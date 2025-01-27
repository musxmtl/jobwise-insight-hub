import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { HomeIcon, FileTextIcon, BriefcaseIcon, BarChartIcon, HeartHandshakeIcon } from "lucide-react";
import { Link } from "react-router-dom";

const items = [
  {
    title: "Home",
    icon: HomeIcon,
    href: "/",
  },
  {
    title: "Resume",
    icon: FileTextIcon,
    href: "/resume",
  },
  {
    title: "Job Tracking",
    icon: BriefcaseIcon,
    href: "/job-tracking",
  },
  {
    title: "Analytics",
    icon: BarChartIcon,
    href: "/analytics",
  },
  {
    title: "AI Counselor",
    icon: HeartHandshakeIcon,
    href: "/ai-counselor",
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-job-border bg-job-glass backdrop-blur-xl">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-white/70">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.href} className="text-white/80 hover:text-white">
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}