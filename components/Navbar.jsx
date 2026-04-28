"use client";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">CRM System</h1>
      <button 
        onClick={handleLogout} 
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
      >
        Logout
      </button>
    </nav>
  );
}