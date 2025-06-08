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

const items = [
  {
    des: "Profile",
    url: "#",
    icon: User,
  },
  {
    des: "Chats",
    url: "#",
    icon: MessageCircle,
  },
  {
    des: "Groups",
    url: "#",
    icon: UsersRound,
  },
  {
    des: "Contacts",
    url: "#",
    icon: UserRoundCheck,
  },
  {
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className= "pt-[100px]">
              {items.map((item) => (
                <SidebarMenuButton asChild className="py-6">
                  <a href={item.url}>
                    <item.icon/>
                  </a>
                </SidebarMenuButton>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}