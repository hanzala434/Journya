import { fetchSubscriptions } from '@/app/lib/subscriptionApi';
import SubscriptionClient from '@/app/ui/SubscriptionClient'; 

export default async function subscriptionsPage() {
  const subscription = await fetchSubscriptions();

  return (
    <div>
      <h1 className="text-3xl">Subscription</h1>
      <SubscriptionClient subscription={subscription} />
    </div>
  );
}
