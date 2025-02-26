import mongoose from "mongoose";

const QuerySchema = new mongoose.Schema({
    ticket_id: String,
    issue: String,
    subject: String,
    date: String,
    status: String,
  });
  
  export default mongoose.models.Query || mongoose.model("Query", QuerySchema);
  