const ITEMS_PER_PAGE = 6;

// Fetch all subscriptions
export async function fetchSubscriptions() {
  const response = await fetch("/api/subscription");
  if (!response.ok) throw new Error("Failed to fetch subscriptions");
  return await response.json();
}

// Fetch a single subscription by ID
export async function fetchSubscriptionById(id) {
  const response = await fetch(`/api/subscription/${id}`);
  if (!response.ok) throw new Error("Subscription not found");
  return await response.json();
}

// Create a new subscription
export async function createSubscription({ name, email, phone, cost, duration, renewalDate }) {
  const response = await fetch("/api/subscription", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, phone, cost, duration, renewalDate }),
  });

  if (!response.ok) throw new Error("Failed to create subscription");
  return await response.json();
}

// Update an existing subscription
export async function updateSubscription(id, updatedData) {
  const response = await fetch(`/api/subscription/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedData),
  });

  if (!response.ok) throw new Error("Failed to update subscription");
  return await response.json();
}

// Delete a subscription
export async function deleteSubscription(id) {
  console.log(id);
  const response = await fetch("/api/subscription", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });

  if (!response.ok) throw new Error("Failed to delete subscription");
  return await response.json();
}

// Fetch paginated subscriptions with search (client-side filtering fallback)
export async function fetchFilteredSubscriptions(query, currentPage) {
  const allSubs = await fetchSubscriptions();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  const filtered = allSubs.filter((sub) =>
    [sub.name, sub.email, sub.phone, sub.cost, sub.duration]
      .some((field) => field.toLowerCase().includes(query.toLowerCase()))
  );

  return filtered.slice(offset, offset + ITEMS_PER_PAGE);
}

// Fetch total pages (client-side logic based on fetchFilteredSubscriptions)
export async function fetchSubscriptionPages(query) {
  const allSubs = await fetchSubscriptions();

  const filtered = allSubs.filter((sub) =>
    [sub.name, sub.email, sub.phone, sub.cost, sub.duration]
      .some((field) => field.toLowerCase().includes(query.toLowerCase()))
  );

  return Math.ceil(filtered.length / ITEMS_PER_PAGE);
}
