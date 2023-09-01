import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import DashboardPage from "./(routes)/dashboard/page";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();
  return (
    <div className="h-full relative">
      {/* for the side bar */}
      <div className="hidden h-full md:flex md:flex-col md:w-72 md:fixed md:inset-y-0 bg-gray-900">
        <Sidebar isPro={isPro} apiLimitCount={apiLimitCount} />
      </div>
      <main className="md:pl-72">
        <Navbar />
        {children}
      </main>
    </div>
  );
}

export default DashboardLayout;
