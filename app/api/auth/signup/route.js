import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db";
import User from "@/models/User";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    const hash = await bcrypt.hash(body.password, 10);

    await User.create({
      name: body.name,
      email: body.email,
      password: hash,
      role: body.role || "agent"
    });

    return NextResponse.json({ message: "Signup Success" });

  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}