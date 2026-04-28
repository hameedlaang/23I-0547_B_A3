import mongoose from "mongoose";

const ActivitySchema = new mongoose.Schema({
  leadId: String,
  action: String,
  timestamp: { type: Date, default: Date.now }
});

export default mongoose.models.Activity || mongoose.model("Activity", ActivitySchema);