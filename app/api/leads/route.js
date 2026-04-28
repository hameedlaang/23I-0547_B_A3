import { connectDB } from "@/lib/db";
import Lead from "@/models/Lead";
import { calculateScore } from "@/lib/utils";

export async function GET(){
 await connectDB();
 return Response.json(await Lead.find());
}

export async function POST(req){
 const body = await req.json();
 await connectDB();
 const lead = await Lead.create({...body,score:calculateScore(body.budget)});
 return Response.json(lead);
}