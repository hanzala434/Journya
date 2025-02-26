import mongoose from "mongoose";

const SubscriptionSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    cost: String,
    duration: String,
    renewalDate: String,
  });
  
  export default mongoose.models.Subscription || mongoose.model("Subscription", SubscriptionSchema);
  