import { subscription } from "./data";

const ITEMS_PER_PAGE = 6;

// Fetch all subscriptions
export async function fetchSubscriptions() {
  return subscription;
}

// Fetch a single subscription by ID
export async function fetchSubscriptionById(id) {
  const sub = subscription.find((sub) => sub.id === id);
  if (!sub) throw new Error("Subscription not found");
  return sub;
}

// Create a new subscription
export async function createSubscription({ name, email, phone, cost, duration, renewalDate }) {
  const newSubscription = {
    id: (subscription.length + 1).toString(),
    name,
    email,
    phone,
    cost,
    duration,
    renewalDate,
  };

  subscription.push(newSubscription);
  return newSubscription;
}

// Update an existing subscription
export async function updateSubscription(id, updatedData) {
  const subIndex = subscription.findIndex((sub) => sub.id === id);
  if (subIndex === -1) throw new Error("Subscription not found");

  subscription[subIndex] = {
    ...subscription[subIndex],
    ...updatedData,
  };

  return subscription[subIndex];
}

// Delete a subscription
export async function deleteSubscription(id) {
  const index = subscription.findIndex((sub) => sub.id === id);
  if (index === -1) throw new Error("Subscription not found");

  subscription.splice(index, 1);
  return { message: "Subscription deleted successfully" };
}

// Fetch paginated subscriptions with search
export async function fetchFilteredSubscriptions(query, currentPage) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  const filteredSubscriptions = subscription.filter(
    (sub) =>
      sub.name.toLowerCase().includes(query.toLowerCase()) ||
      sub.email.toLowerCase().includes(query.toLowerCase()) ||
      sub.phone.includes(query) ||
      sub.cost.includes(query) ||
      sub.duration.toLowerCase().includes(query.toLowerCase())
  );

  const paginatedSubscriptions = filteredSubscriptions.slice(offset, offset + ITEMS_PER_PAGE);

  return paginatedSubscriptions;
}

// Fetch total pages for pagination
export async function fetchSubscriptionPages(query) {
  const filteredSubscriptions = subscription.filter(
    (sub) =>
      sub.name.toLowerCase().includes(query.toLowerCase()) ||
      sub.email.toLowerCase().includes(query.toLowerCase()) ||
      sub.phone.includes(query) ||
      sub.cost.includes(query) ||
      sub.duration.toLowerCase().includes(query.toLowerCase())
  );

  return Math.ceil(filteredSubscriptions.length / ITEMS_PER_PAGE);
}
