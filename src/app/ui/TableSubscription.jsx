'use client';

import { useEffect, useState } from 'react';
import Search from './Search';
import OptionsMenu from './OptionsMenu';
import { fetchSubscriptions } from '../lib/subscriptionApi';
import OptionSubscription from './OptionSubscription';

export default function TableSubscription({searchQuery}) {
    // const subscription =await fetchSubscriptions()
   const [subscription, setSubscription] = useState([]); 
   
     const refreshSubscription = async () => {
      try {
        const data = await fetchSubscriptions();
        setSubscription(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    useEffect(() => {
      async function loadSubscription() {
        try {
          const data = await fetchSubscriptions();
          setSubscription(data);
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      }
      loadSubscription();
    }, []);

  //Filter users based on search query (name or email)
  const filteredSubscription = subscription.filter(subscription =>
    subscription.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    subscription.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mt-6">

      {/* Subscription Table */}
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
                    <tr key={subscription._id} className="border-b text-sm">
                      <td className="px-3 py-3">{subscription.email}</td>
                      <td className="px-3 py-3">{subscription.cost}</td>
                      <td className="px-3 py-3">{subscription.duration}</td>
                      <td className="px-3 py-3">{subscription.renewalDate}</td>

                      <td className="px-3 py-3">
                        <OptionSubscription subscription={subscription} refreshSubscription={refreshSubscription} />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="py-4 text-center text-gray-500">
                      No Subscription found.
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
