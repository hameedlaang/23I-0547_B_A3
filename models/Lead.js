import mongoose from "mongoose";

const LeadSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  propertyInterest: String,
  budget: Number,
  status: { type: String, default: "New" },
  notes: String,
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  score: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Lead || mongoose.model("Lead", LeadSchema);