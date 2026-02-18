import DashboardNavSidebar from "@/components/dashboard/DashboardNavSidebar";

export const metadata = {
  title: "Care.xyz | User Dashboard",
};

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#f6f7f8] text-slate-800 dark:bg-[#111921] dark:text-slate-200">
      <aside>
        {" "}
        <DashboardNavSidebar />
      </aside>
      <main>{children}</main>
    </div>
  );
}
