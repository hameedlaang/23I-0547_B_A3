"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import DashCards from "@/components/DashCards";
import LeadCard from "@/components/LeadCard";
import AddLeadForm from "@/components/AddLeadForm";

export default function Dashboard() {
  const [leads, setLeads] = useState([]);
  
  
  const [refresh, setRefresh] = useState(0);

  
  useEffect(() => {
  fetch('/api/leads')
    .then(r => r.json())
    .then(data => {
      
      const leadArray = Array.isArray(data) ? data : data.leads || [];
      setLeads(leadArray);
    });
}, [refresh]);
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="p-6 max-w-7xl mx-auto">
        <DashCards leads={leads} />

        {/* 3. The Form: Increments refresh to trigger the useEffect above */}
        <div className="my-8">
          <AddLeadForm onLeadAdded={() => setRefresh(prev => prev + 1)} />
        </div>

        <h2 className="text-2xl font-bold mb-4 text-gray-800">Current Leads</h2>
        
        {leads.length === 0 ? (
          <p className="text-gray-500 italic">No leads found. Use the form above to add one!</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leads.map(l => (
              <LeadCard 
                key={l._id} 
                lead={l} 
                onRefresh={() => setRefresh(prev => prev + 1)} 
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}