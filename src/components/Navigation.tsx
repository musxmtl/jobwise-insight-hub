import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { HomeIcon, FileTextIcon, BriefcaseIcon, BarChartIcon, HeartHandshakeIcon } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const links = [
    { href: "/", label: "Home", icon: HomeIcon },
    { href: "/resume", label: "Resume", icon: FileTextIcon },
    { href: "/job-tracking", label: "Job Tracking", icon: BriefcaseIcon },
    { href: "/analytics", label: "Analytics", icon: BarChartIcon },
    { href: "/ai-counselor", label: "AI Counselor", icon: HeartHandshakeIcon },
  ];

  return (
    <nav className="border-b bg-background">
      <div className="container">
        <div className="flex h-16 items-center space-x-4 sm:space-x-8">
          {links.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              to={href}
              className={cn(
                "flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary",
                location.pathname === href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              <Icon className="h-4 w-4" />
              <span className="hidden sm:inline">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;