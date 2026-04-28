"use client";
import { useState } from "react";

export default function AddLeadForm({ onLeadAdded }) {
  const [formData, setFormData] = useState({ name: "", email: "", budget: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormData({ name: "", email: "", budget: "" });
        onLeadAdded(); // Refresh the parent list
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 border rounded-xl bg-white shadow-sm border-gray-200">
      <h3 className="text-lg font-semibold mb-4 text-gray-700">Add New Opportunity</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input 
          className="border p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder="Client Name" 
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})} 
          required 
        />
        <input 
          className="border p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder="Email Address" 
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})} 
          required 
        />
        <input 
          className="border p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder="Budget ($)" 
          type="number"
          value={formData.budget}
          onChange={(e) => setFormData({...formData, budget: e.target.value})} 
          required 
        />
      </div>
      <button 
        type="submit" 
        disabled={loading}
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-6 rounded-lg transition-colors disabled:bg-blue-300"
      >
        {loading ? "Saving..." : "Create Lead"}
      </button>
    </form>
  );
}