import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    package: String,
    date: String,
  });
  
  export default mongoose.models.Transaction || mongoose.model("Transaction", TransactionSchema);
  