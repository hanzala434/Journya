'use client';

import { useEffect, useState } from 'react';
import Search from './Search';
import OptionsMenu from './OptionsMenu';
import { fetchSubscriptions } from '../lib/subscriptionApi';

export default function TableUsers() {
  const [subscription, setSubscription] = useState([]); // Store users from API
  const [searchQuery, setSearchQuery] = useState(''); // Search input state

  // Fetch users from API when component mounts
  useEffect(() => {
    async function loadSubscription() {
      try {
        const data = await fetchSubscriptions();
        setSubscription(data);
      } catch (error) {
        console.error('Error fetching subscription:', error);
      }
    }
    loadSubscription();
  }, []);

  // Filter users based on search query (name or email)
  const filteredSubscription = subscription.filter(subscription =>
    subscription.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    subscription.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mt-6">
      {/* Search Bar */}
      <div className="mb-4 ">
        <Search onSearch={setSearchQuery} />
      </div>

      {/* Users Table */}
      <div className="flow-root">
        <div className="inline-block min-w-full align-middle">
          <div className="rounded-lg p-2">
            <table className="min-w-full bg-white">
              <thead className="text-left rounded bg-opacity-20 text-sm font-semibold bg-[#00BFA6]">
                <tr>
                  <th className="px-3 py-3">EMAIL</th>
                  <th className="px-3 py-3">COST</th>
                  <th className="px-3 py-3">DURATION</th>
                  <th className="px-3 py-3">RENEWAL DATE</th>
                  <th className="px-3 py-3">OPTIONS</th>
                </tr>
              </thead>
              <tbody>
                {filteredSubscription.length > 0 ? (
                  filteredSubscription.map(subscription => (
                    <tr key={subscription.id} className="border-b text-sm">
                      <td className="px-3 py-3">{subscription.email}</td>
                      <td className="px-3 py-3">{subscription.cost}</td>
                      <td className="px-3 py-3">{subscription.duration}</td>
                      <td className="px-3 py-3">{subscription.renewalDate}</td>

                      <td className="px-3 py-3">
                        <OptionsMenu />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="py-4 text-center text-gray-500">
                      No users found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
