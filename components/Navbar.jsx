"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar(){
 const router = useRouter();
 const logout=()=>{localStorage.removeItem("token");router.push("/login");};
 return <div className="bg-blue-600 text-white p-4 flex justify-between"><Link href="/dashboard">CRM Dashboard</Link><button onClick={logout}>Logout</button></div>;
}