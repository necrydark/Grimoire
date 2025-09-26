"use client";
import { Book, Home, Newspaper, User2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "./ui/sidebar";

const navigationItems = [
  {
    title: "Home",
    icon: Home,
    href: "/",
  },
  {
    title: "Characters",
    icon: User2,
    href: "/characters",
  },
  {
    title: "News",
    icon: Newspaper,
    href: "/news",
  },
];

export default function AppSidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";
  const pathname = usePathname();

  const isRouteActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <Sidebar collapsible="icon" className="bg-[#303C52]">
      <SidebarHeader>
        <div className="flex items-center gap-2 py-2 px-4 transition-all duration-200 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:gap-0 group-data-[collapsible=icon]:px-0">
          <Book className="h-6 w-6 text-white shrink-0 group-data-[collapsible=icon]:opacity-0 group-data-[collapsible=icon]:w-0 group-data-[collapsible=icon]:overflow-hidden" />
          <h1 className="text-xl font-bold transition-opacity duration-200 group-data-[collapsible=icon]:opacity-0 group-data-[collapsible=icon]:w-0 group-data-[collapsible=icon]:overflow-hidden">
            Grimoire
          </h1>
          {isCollapsed && <span className="text-xl font-bold ">G</span>}
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton
                    asChild
                    className="rounded-[5px] items-center py-3 px-4 cursor-pointer"
                    tooltip={item.title}
                    isActive={isRouteActive(item.href)}
                  >
                    <Link href={item.href}>
                      <item.icon className="h-8 w-8" />
                      <span className="font-semibold flex-1 text-lg leading-none">
                        {item.title}
                      </span>
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
