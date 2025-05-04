"use client"
import Search from "@/app/ui/Search";
import ExportButton from "@/app/ui/ExportButton";
import FilterButton from "@/app/ui/FilterButton";
import TableSubscription from "@/app/ui/TableSubscription";
import { Suspense } from "react";
import { useState,useMemo } from "react";
import { fetchSubscriptions } from "../lib/subscriptionApi";

export default function SubscriptionClient({ subscription: initialSubscriptions }) {
    const [subscriptions, setsubScriptions] = useState(initialSubscriptions);
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
      setsubScriptions(updatedSubscriptions);
    };
  
    return (
      <div>
        <div className="flex justify-between my-2">
          <h2 className="md:text-xl px-2 md:mt-2 text-slate-500">
            Subscribers : {filteredSubscriptions.length}
          </h2>
  
          <div className="flex gap-2">
            <Search placeholder="Search users..." onSearch={setSearchQuery} />
            <FilterButton onFilter={setActiveFilters} />
            <ExportButton />
          </div>
        </div>
  
        <div>
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
  