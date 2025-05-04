"use client";
import Search from "@/app/ui/Search";
import ExportButton from "@/app/ui/ExportButton";
import FilterButton from "@/app/ui/FilterButton";
import TableSubscription from "@/app/ui/TableSubscription";
import { Suspense, useMemo, useState } from "react";
import { fetchSubscriptions } from "../lib/subscriptionApi";

export default function SubscriptionClient({ subscription: initialSubscriptions }) {
  const [subscriptions, setSubscriptions] = useState(initialSubscriptions);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState([]);

  const filteredSubscriptions = useMemo(() => {
    return subscriptions.filter((subscription) => {
      const matchesSearch =
        subscription.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        subscription.email.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesFilter =
        activeFilters.length === 0 || activeFilters.includes(subscription.duration);

      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, activeFilters, subscriptions]);

  const refreshSubscriptions = async () => {
    const updatedSubscriptions = await fetchSubscriptions();
    setSubscriptions(updatedSubscriptions);
  };

  return (
    <div className="w-full px-2 md:px-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-4">
        <h2 className="text-lg md:text-xl text-slate-600 font-medium px-1">
          Subscribers: {filteredSubscriptions.length}
        </h2>

        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
          <Search placeholder="Search users..." onSearch={setSearchQuery} />
          <FilterButton onFilter={setActiveFilters} />
          <ExportButton />
        </div>
      </div>

      <div className="overflow-x-auto">
        <Suspense fallback={<div>Loading subscriptions...</div>}>
          <TableSubscription
            subscriptions={filteredSubscriptions}
            refreshSubscriptions={refreshSubscriptions}
          />
        </Suspense>
      </div>
    </div>
  );
}
