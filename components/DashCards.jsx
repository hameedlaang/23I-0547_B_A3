"use client";

export default function DashCards({ leads = [] }) {
  const totalLeads = leads.length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <p className="text-sm font-medium text-gray-500 mb-1">Total Leads</p>
        <h3 className="text-2xl font-bold text-gray-800">{totalLeads}</h3>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <p className="text-sm font-medium text-gray-500 mb-1">Leads Managed</p>
        <h3 className="text-2xl font-bold text-blue-600">{totalLeads}</h3>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <p className="text-sm font-medium text-gray-500 mb-1">CRM Running</p>
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></span>
          <h3 className="text-2xl font-bold text-gray-800">Connected</h3>
        </div>
      </div>
    </div>
  );
}