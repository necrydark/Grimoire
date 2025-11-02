"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import {
  BookOpen,
  Calculator,
  Calendar,
  ChevronDown,
  Database,
  Fish,
  Gem,
  Home,
  Notebook,
  Shield,
  Sword,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { useEffect, useState } from "react";
import { BsDiscord } from "react-icons/bs";
import { PiNotionLogo } from "react-icons/pi";

interface NavItem {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
    icon: Home,
  },
  {
    title: "Database",
    href: "/database",
    icon: Database,
    children: [
      { title: "Characters", href: "/database/characters", icon: Users },
      { title: "Items", href: "/database/items", icon: Sword },
      { title: "Materials", href: "/database/materials", icon: Shield },
      { title: "Fishing", href: "/database/fishing", icon: Fish },
      { title: "Equipment", href: "/database/equipment", icon: Gem },
    ],
  },
  {
    title: "Calculator",
    href: "/calculator",
    icon: Calculator,
  },
  {
    title: "Events",
    href: "/events",
    icon: Calendar,
  },
  {
    title: "Farmable Today",
    href: "/farmable",
    icon: Gem,
  },

  {
    title: "Discord",
    href: "https://discord.gg/m9JP8x7EF4",
    icon: BsDiscord,
  },
  {
    title: "Roadmap",
    href: "https://www.notion.so/27a4f66304e8805ab3bed28384df89db?v=27a4f66304e880a6bf69000c554825f0&source=copy_link",
    icon: PiNotionLogo,
  },
  {
    title: "GCWiki",
    href: "https://gcwiki.vercel.app/",
    icon: Notebook,
  },
];

export default function AppSidebar() {
  const pathname = usePathname();
  const { state } = useSidebar();

  const isDatabasePage = pathname.startsWith("/database");
  const [isOpen, setIsOpen] = useState(isDatabasePage);

  const handleDatabaseClick = () => {
    if (state === "collapsed") {
      window.location.href = "/database";
    } else {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    setIsOpen(isDatabasePage);
  }, [isDatabasePage]);

  return (
    <Sidebar collapsible="icon" className="border-r-0">
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex items-center justify-center p-2">
          {state === "expanded" ? (
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mystical-glow">
                <BookOpen className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold grimoire-text origin-font text-sidebar-foreground">
                  Grimoire
                </h1>
                <p className="text-sm text-muted-foreground origin-font">
                  7DS Origins
                </p>
              </div>
            </div>
          ) : (
            <div
              className={cn(
                state === "collapsed" &&
                  "w-6 h-6 p-2 bg-primary rounded-lg flex items-center justify-center mystical-glow",
                "w-10 h-10 bg-primary rounded-lg flex items-center justify-center mystical-glow"
              )}
            >
              <BookOpen className="w-6 h-6 text-primary-foreground" />
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.children ? (
                    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton
                          tooltip={item.title}
                          isActive={pathname.startsWith("/database")}
                          className="data-[active=true]:bg-primary/20 data-[active=true]:text-primary data-[active=true]:border-l-4 data-[active=true]:border-primary data-[active=true]:rounded-l-none"
                          onClick={handleDatabaseClick}
                        >
                          <item.icon className="w-4 h-4" />
                          <span>{item.title}</span>
                          {state === "expanded" && (
                            <ChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                          )}
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.children.map((child) => (
                            <SidebarMenuSubItem key={child.title}>
                              <SidebarMenuSubButton
                                asChild
                                isActive={pathname === child.href}
                                className="data-[active=true]:bg-primary/20 data-[active=true]:text-primary data-[active=true]:border-l-4 data-[active=true]:border-primary data-[active=true]:rounded-l-none"
                              >
                                <Link href={child.href}>
                                  <child.icon className="w-4 h-4" />
                                  <span>{child.title}</span>
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    <SidebarMenuButton
                      asChild
                      tooltip={item.title}
                      isActive={pathname === item.href}
                      className="data-[active=true]:bg-primary/20 data-[active=true]:text-primary data-[active=true]:border-l-4 data-[active=true]:border-primary data-[active=true]:rounded-l-none"
                    >
                      <Link
                        href={item.href}
                        target={
                          item.href.startsWith("http") ? "_blank" : undefined
                        }
                      >
                        <item.icon className="w-4 h-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
