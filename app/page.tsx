"use client"

import * as React from "react"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { SidebarNav, MENU_ITEMS } from "@/components/dashboard/sidebar-nav"
import { DashboardTopBar } from "@/components/dashboard/dashboard-topbar"
import { DashboardContent } from "@/components/dashboard/dashboard-content"

export default function Home() {
  const [activeTab, setActiveTab] = React.useState("dashboard")

  const currentItem = MENU_ITEMS.find((item) => item.id === activeTab)
  const activeTitle = currentItem ? currentItem.title : "Dashboard"

  const handleNewAction = (type: string) => {
    if (type === "whiteboard") setActiveTab("whiteboard")
    else if (type === "note") setActiveTab("notes")
    else if (type === "kanban") setActiveTab("task-kanban")
    else if (type === "ai") setActiveTab("ai-assistant")
  }

  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#121214] text-stone-900 dark:text-stone-100 flex flex-col font-sans transition-colors duration-200">
      <SidebarProvider defaultOpen={true}>
        {/* Collapsible Sidebar with Colorful Lucide Icons */}
        <SidebarNav activeTab={activeTab} onSelectTab={setActiveTab} />

        {/* Main Dashboard Inset Shell */}
        <SidebarInset className="flex-1 flex flex-col min-w-0 bg-[#FAF8F5] dark:bg-[#121214]">
          {/* Top navigation bar */}
          <DashboardTopBar
            activeTitle={activeTitle}
            onNewAction={handleNewAction}
          />

          {/* Main Dashboard Interactive Canvas & Views */}
          <main className="flex-1 flex flex-col overflow-y-auto">
            <DashboardContent
              activeTab={activeTab}
              onNavigateTab={setActiveTab}
            />
          </main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}
