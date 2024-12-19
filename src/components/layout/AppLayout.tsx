import { Sidebar, SidebarContent, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Home, Tags, Network, PlusCircle } from "lucide-react";
import { Link, Outlet, useLocation } from "react-router-dom";

const NAV_ITEMS = [
  { icon: Home, label: "Dashboard", path: "/" },
  { icon: PlusCircle, label: "Add New", path: "/submit" },
  { icon: Tags, label: "Tags", path: "/tags" },
  { icon: Network, label: "Connections", path: "/connections" },
];

export const AppLayout = () => {
  const location = useLocation();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar>
          <SidebarContent>
            <nav className="space-y-1">
              {NAV_ITEMS.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                      isActive
                        ? "bg-secondary text-secondary-foreground"
                        : "hover:bg-secondary/50"
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </SidebarContent>
        </Sidebar>
        <main className="flex-1 overflow-auto">
          <SidebarTrigger className="p-4 md:hidden" />
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
};