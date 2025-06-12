import { Settings } from "lucide-react"
import { User, MessageCircle, UsersRound, UserRoundCheck} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton
} from "@/components/ui/sidebar"
import ToggleTheme from "../ToggleTheme"
import { Link } from "react-router-dom"

const items = [
  {
    des: "Profile",
    url: "/profile",
    icon: User,
  },
  {
    des: "Chats",
    url: "/chats",
    icon: MessageCircle,
  },
  {
    des: "Groups",
    url: "/groups",
    icon: UsersRound,
  },
  {
    des: "Contacts",
    url: "/contacts",
    icon: UserRoundCheck,
  },
  {
    des: "Settings",
    url: "/settings",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="text-center">
            <SidebarMenu className= "pt-[100px] mb-[150px]">
              {items.map((item) => (
                <SidebarMenuButton asChild className="py-6">
                  <Link to={item.url} title={item.des}>
                    <item.icon/>
                  </Link>
                </SidebarMenuButton>
              ))}
            </SidebarMenu>
            <ToggleTheme/>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}