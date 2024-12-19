import { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { 
  Home, Tags, Network, PlusCircle, Sun, Moon, 
  Search, Command, ArrowLeft, ArrowRight
} from "lucide-react";
import { Sidebar, SidebarContent, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";
import { useTheme } from "@/components/theme/theme-provider";
import { cn } from "@/lib/utils";
import { ResizableHandle, ResizablePanel, ResizableGroup } from "@/components/ui/resizable";
import { RecentItemsMenu } from "../navigation/RecentItemsMenu";
import { PinnedContent } from "../navigation/PinnedContent";
import { HistoryToggle } from "../navigation/HistoryToggle";
import { QuickSwitcher } from "../navigation/QuickSwitcher";

const NAV_ITEMS = [
  { icon: Home, label: "Dashboard", path: "/" },
  { icon: PlusCircle, label: "Add New", path: "/submit" },
  { icon: Tags, label: "Tags", path: "/tags" },
  { icon: Network, label: "Connections", path: "/connections" },
];

export const AppLayout = () => {
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const [isSplitView, setIsSplitView] = useState(false);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <Sidebar>
          <SidebarContent>
            {/* Navigation Items */}
            <nav className="space-y-1">
              {NAV_ITEMS.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                      isActive
                        ? "bg-secondary text-secondary-foreground"
                        : "hover:bg-secondary/50"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </SidebarContent>
        </Sidebar>

        <main className="flex-1 flex flex-col overflow-hidden">
          {/* Top Bar */}
          <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-14 items-center px-4 gap-4">
              <SidebarTrigger className="md:hidden" />
              
              {/* Navigation Controls */}
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" onClick={() => window.history.back()}>
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => window.history.forward()}>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>

              {/* Breadcrumbs */}
              <Breadcrumb>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Current Page</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>

              {/* Right Side Navigation Elements */}
              <div className="ml-auto flex items-center gap-2">
                <RecentItemsMenu />
                <PinnedContent />
                <HistoryToggle />
                
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <ResizableGroup direction="horizontal">
            <ResizablePanel defaultSize={isSplitView ? 50 : 100}>
              <div className="h-full overflow-auto">
                <Outlet />
              </div>
            </ResizablePanel>
            
            {isSplitView && (
              <>
                <ResizableHandle />
                <ResizablePanel defaultSize={50}>
                  <div className="h-full overflow-auto border-l p-4">
                    Split View Content
                  </div>
                </ResizablePanel>
              </>
            )}
          </ResizableGroup>
        </main>

        {/* Quick Switcher */}
        <QuickSwitcher />
      </div>
    </SidebarProvider>
  );
};