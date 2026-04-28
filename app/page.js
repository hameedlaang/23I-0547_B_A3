import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-4">
      <h1 className="text-4xl font-bold">Property Dealer CRM</h1>
      <div className="flex gap-4">
        <Link href="/login">Login</Link>
        <Link href="/signup">Signup</Link>
      </div>
    </div>
  );
}