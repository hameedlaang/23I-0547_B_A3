"use client";

export default function LeadCard({ lead, onRefresh }) {
  const handleDelete = async () => {
    if (!confirm(`Are you sure you want to delete ${lead.name}?`)) return;

    try {
      const res = await fetch(`/api/leads/${lead._id}`, { 
        method: "DELETE" 
      });

      if (res.ok) {
        onRefresh(); 
      } else {
        const errorData = await res.json();
        console.error("Delete failed:", errorData.message);
        alert("Could not delete lead. Check console for details.");
      }
    } catch (err) {
      console.error("Network error during delete:", err);
    }
  };

  return (
    <div className="p-4 border rounded-xl shadow-sm bg-white relative hover:shadow-md transition">
      <h3 className="text-lg font-bold text-gray-800">{lead.name}</h3>
      <p className="text-sm text-gray-500">{lead.email}</p>
      
      <div className="mt-4 space-y-2 border-t pt-3">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Status:</span>
          <span className="font-medium text-blue-600">{lead.status || "New"}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Score:</span>
          <span className="font-bold text-orange-600">
            {lead.score !== undefined ? lead.score : "N/A"}
          </span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Priority:</span>
          <span className={`font-bold ${
            lead.priority === 'High' ? 'text-red-600' : 'text-green-600'
          }`}>
            {lead.priority || "Normal"}
          </span>
        </div>
      </div>

      <button 
        onClick={handleDelete}
        className="mt-4 w-full text-xs bg-red-50 text-red-600 py-2 rounded hover:bg-red-600 hover:text-white transition-colors"
      >
        Delete Lead
      </button>
    </div>
  );
}