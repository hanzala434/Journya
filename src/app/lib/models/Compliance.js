import mongoose from "mongoose";

const ComplianceSchema = new mongoose.Schema({
    email: { type: String, unique: true },
    activity: String,
    device: String,
    location: String,
    date: String,
    status: String,
  });
  
  export default mongoose.models.Compliance || mongoose.model("Compliance", ComplianceSchema);
  