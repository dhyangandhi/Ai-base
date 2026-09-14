"use client"

import * as React from "react"
import {
  LayoutDashboard,
  Sparkles,
  CalendarDays,
  Kanban,
  FileText,
  Palette,
  Layers,
  Wand2,
  Settings,
  PanelLeftClose,
  PanelLeftOpen,
  ChevronRight,
  Plus,
  Compass,
  FolderOpen,
  CheckCircle2,
  MoreVertical,
  LogOut,
  Moon,
  Sun,
  Laptop
} from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

export interface NavItem {
  id: string
  title: string
  icon: React.ComponentType<{ className?: string }>
  badge?: string
  badgeVariant?: "default" | "sparkle" | "count"
  accent: {
    iconColor: string
    bgColor: string
    borderColor: string
    darkBgColor: string
    glow: string
  }
}

export const MENU_ITEMS: NavItem[] = [
  {
    id: "dashboard",
    title: "Dashboard",
    icon: LayoutDashboard,
    badge: "Main",
    accent: {
      iconColor: "text-indigo-600 dark:text-indigo-400",
      bgColor: "bg-indigo-50 border-indigo-200/70 text-indigo-700",
      borderColor: "border-indigo-200/80 dark:border-indigo-800/50",
      darkBgColor: "dark:bg-indigo-950/70 dark:text-indigo-300",
      glow: "group-hover:shadow-[0_0_12px_rgba(99,102,241,0.25)]",
    },
  },
  {
    id: "ai-assistant",
    title: "AI Assistant",
    icon: Sparkles,
    badge: "v2.5",
    badgeVariant: "sparkle",
    accent: {
      iconColor: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-50 border-purple-200/70 text-purple-700",
      borderColor: "border-purple-200/80 dark:border-purple-800/50",
      darkBgColor: "dark:bg-purple-950/70 dark:text-purple-300",
      glow: "group-hover:shadow-[0_0_12px_rgba(168,85,247,0.25)]",
    },
  },
  {
    id: "calendar",
    title: "Calendar",
    icon: CalendarDays,
    badge: "4",
    badgeVariant: "count",
    accent: {
      iconColor: "text-rose-600 dark:text-rose-400",
      bgColor: "bg-rose-50 border-rose-200/70 text-rose-700",
      borderColor: "border-rose-200/80 dark:border-rose-800/50",
      darkBgColor: "dark:bg-rose-950/70 dark:text-rose-300",
      glow: "group-hover:shadow-[0_0_12px_rgba(244,63,94,0.25)]",
    },
  },
  {
    id: "task-kanban",
    title: "Task / Kanban",
    icon: Kanban,
    badge: "12",
    badgeVariant: "count",
    accent: {
      iconColor: "text-emerald-600 dark:text-emerald-400",
      bgColor: "bg-emerald-50 border-emerald-200/70 text-emerald-700",
      borderColor: "border-emerald-200/80 dark:border-emerald-800/50",
      darkBgColor: "dark:bg-emerald-950/70 dark:text-emerald-300",
      glow: "group-hover:shadow-[0_0_12px_rgba(16,185,129,0.25)]",
    },
  },
  {
    id: "notes",
    title: "Notes",
    icon: FileText,
    accent: {
      iconColor: "text-amber-600 dark:text-amber-400",
      bgColor: "bg-amber-50 border-amber-200/70 text-amber-700",
      borderColor: "border-amber-200/80 dark:border-amber-800/50",
      darkBgColor: "dark:bg-amber-950/70 dark:text-amber-300",
      glow: "group-hover:shadow-[0_0_12px_rgba(245,158,11,0.25)]",
    },
  },
  {
    id: "whiteboard",
    title: "Whiteboard",
    icon: Palette,
    badge: "Miro",
    badgeVariant: "sparkle",
    accent: {
      iconColor: "text-fuchsia-600 dark:text-fuchsia-400",
      bgColor: "bg-fuchsia-50 border-fuchsia-200/70 text-fuchsia-700",
      borderColor: "border-fuchsia-200/80 dark:border-fuchsia-800/50",
      darkBgColor: "dark:bg-fuchsia-950/70 dark:text-fuchsia-300",
      glow: "group-hover:shadow-[0_0_12px_rgba(217,70,239,0.25)]",
    },
  },
  {
    id: "pages-spaces",
    title: "Pages / Spaces",
    icon: Layers,
    accent: {
      iconColor: "text-sky-600 dark:text-sky-400",
      bgColor: "bg-sky-50 border-sky-200/70 text-sky-700",
      borderColor: "border-sky-200/80 dark:border-sky-800/50",
      darkBgColor: "dark:bg-sky-950/70 dark:text-sky-300",
      glow: "group-hover:shadow-[0_0_12px_rgba(14,165,233,0.25)]",
    },
  },
  {
    id: "ai-template-builder",
    title: "AI Template Builder",
    icon: Wand2,
    badge: "Pro",
    accent: {
      iconColor: "text-teal-600 dark:text-teal-400",
      bgColor: "bg-teal-50 border-teal-200/70 text-teal-700",
      borderColor: "border-teal-200/80 dark:border-teal-800/50",
      darkBgColor: "dark:bg-teal-950/70 dark:text-teal-300",
      glow: "group-hover:shadow-[0_0_12px_rgba(20,184,166,0.25)]",
    },
  },
  {
    id: "settings",
    title: "Settings",
    icon: Settings,
    accent: {
      iconColor: "text-stone-600 dark:text-stone-300",
      bgColor: "bg-stone-100 border-stone-200/80 text-stone-700",
      borderColor: "border-stone-200/80 dark:border-stone-700/60",
      darkBgColor: "dark:bg-stone-800/80 dark:text-stone-300",
      glow: "group-hover:shadow-[0_0_12px_rgba(120,113,108,0.2)]",
    },
  },
]

interface SidebarNavProps {
  activeTab?: string
  onSelectTab?: (id: string) => void
}

export function SidebarNav({
  activeTab = "dashboard",
  onSelectTab,
}: SidebarNavProps) {
  const { state, toggleSidebar } = useSidebar()
  const isCollapsed = state === "collapsed"

  return (
    <Sidebar
      collapsible="icon"
      className="border-r border-stone-200/70 dark:border-stone-800/70 bg-[#FAF8F5]/95 dark:bg-[#141416]/95 backdrop-blur-md transition-all duration-300 ease-in-out select-none"
    >
      {/* 1. Header with Logo, App Name & Collapsible Toggle */}
      <SidebarHeader className="p-3 pb-2 border-b border-stone-200/50 dark:border-stone-800/50">
        <div className="flex items-center justify-between gap-2">
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-2.5 overflow-hidden min-w-0">
            {/* Playful & Cozy Logo Mark combining Notion Doc & Miro Canvas */}
            <div className="relative flex-shrink-0 size-9 rounded-xl bg-gradient-to-br from-amber-400 via-rose-400 to-indigo-500 p-[1.5px] shadow-sm transition-transform hover:scale-105 active:scale-95">
              <div className="size-full bg-white dark:bg-stone-900 rounded-[10px] flex items-center justify-center overflow-hidden">
                <div className="relative flex items-center justify-center size-full">
                  <span className="font-extrabold text-xs tracking-tighter bg-gradient-to-tr from-amber-500 via-rose-500 to-indigo-600 bg-clip-text text-transparent">
                    NF
                  </span>
                  {/* Subtle Miro-like corner dot */}
                  <div className="absolute top-1 right-1 size-1.5 rounded-full bg-emerald-400" />
                </div>
              </div>
            </div>

            {/* App Name & Workspace Info */}
            <div className="flex flex-col truncate group-data-[collapsible=icon]:hidden leading-tight">
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-stone-900 dark:text-stone-100 text-sm tracking-tight">
                  MuseFlow
                </span>
                <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/40">
                  Notion × Miro
                </span>
              </div>
              <span className="text-[11px] text-stone-500 dark:text-stone-400 truncate flex items-center gap-1 mt-0.5">
                <span className="size-1.5 rounded-full bg-emerald-500 inline-block" />
                Studio Workspace
              </span>
            </div>
          </div>

          {/* Collapse / Expand Toggle Button */}
          <Tooltip>
            <TooltipTrigger
              render={
                <button
                  type="button"
                  onClick={toggleSidebar}
                  className="size-7 flex items-center justify-center text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 hover:bg-stone-200/50 dark:hover:bg-stone-800/60 rounded-lg transition-colors group-data-[collapsible=icon]:mx-auto cursor-pointer outline-none"
                  aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
                >
                  {isCollapsed ? (
                    <PanelLeftOpen className="size-4" />
                  ) : (
                    <PanelLeftClose className="size-4" />
                  )}
                </button>
              }
            />
            <TooltipContent side="right" align="center">
              {isCollapsed ? "Expand sidebar (Ctrl+B)" : "Collapse sidebar (Ctrl+B)"}
            </TooltipContent>
          </Tooltip>
        </div>
      </SidebarHeader>

      {/* 2. Menu Navigation with 9 Colorful Lucide Icons */}
      <SidebarContent className="px-2 py-3 overflow-x-hidden">
        <SidebarGroup className="p-0">
          <SidebarGroupLabel className="text-[10px] font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500 px-2 mb-1.5 group-data-[collapsible=icon]:hidden">
            Workspace
          </SidebarGroupLabel>
          <SidebarMenu className="gap-1">
            {MENU_ITEMS.map((item) => {
              const Icon = item.icon
              const isActive = activeTab === item.id

              return (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    isActive={isActive}
                    onClick={() => onSelectTab?.(item.id)}
                    tooltip={item.title}
                    className={cn(
                      "group/btn relative flex items-center gap-3 rounded-xl px-2.5 py-2 text-sm font-medium transition-all duration-200",
                      "hover:bg-stone-200/50 dark:hover:bg-stone-800/50",
                      isActive &&
                        "bg-white dark:bg-stone-800/90 text-stone-900 dark:text-stone-50 shadow-sm border border-stone-200/70 dark:border-stone-700/60",
                      !isActive && "text-stone-600 dark:text-stone-400",
                      // When collapsed, center the icon neatly
                      "group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-0 group-data-[collapsible=icon]:size-10 group-data-[collapsible=icon]:mx-auto"
                    )}
                  >
                    {/* Colorful Icon Container */}
                    <div
                      className={cn(
                        "relative flex size-7 items-center justify-center rounded-lg border transition-all duration-200 flex-shrink-0",
                        item.accent.bgColor,
                        item.accent.borderColor,
                        item.accent.darkBgColor,
                        item.accent.glow,
                        isActive && "scale-105 ring-2 ring-primary/20",
                        "group-hover/btn:scale-105"
                      )}
                    >
                      <Icon className={cn("size-4 transition-transform", item.accent.iconColor)} />
                    </div>

                    {/* Title Text (Hidden when collapsed) */}
                    <span className="truncate flex-1 text-left tracking-tight group-data-[collapsible=icon]:hidden">
                      {item.title}
                    </span>

                    {/* Badge / Indicator (Hidden when collapsed) */}
                    {item.badge && (
                      <span
                        className={cn(
                          "ml-auto text-[10px] font-semibold px-1.5 py-0.2 rounded-full border group-data-[collapsible=icon]:hidden",
                          item.badgeVariant === "sparkle" &&
                            "bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/70 dark:to-pink-950/70 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800/60",
                          item.badgeVariant === "count" &&
                            "bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 border-stone-200 dark:border-stone-700",
                          !item.badgeVariant &&
                            "bg-stone-100/70 dark:bg-stone-800/70 text-stone-500 dark:text-stone-400 border-transparent"
                        )}
                      >
                        {item.badge}
                      </span>
                    )}

                    {/* Active Accent Pill on the right edge */}
                    {isActive && (
                      <span className="absolute right-1 size-1.5 rounded-full bg-stone-900 dark:bg-stone-100 group-data-[collapsible=icon]:hidden" />
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            })}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarSeparator className="my-3 bg-stone-200/60 dark:bg-stone-800/60" />

        {/* Quick Notion/Miro Space Favorites */}
        <SidebarGroup className="p-0 group-data-[collapsible=icon]:hidden">
          <div className="flex items-center justify-between px-2 mb-1.5">
            <SidebarGroupLabel className="text-[10px] font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500 p-0">
              Pinned Boards & Docs
            </SidebarGroupLabel>
            <Button
              variant="ghost"
              size="icon"
              className="size-5 rounded-md text-stone-400 hover:text-stone-700 dark:hover:text-stone-200"
              title="Add new board or doc"
            >
              <Plus className="size-3" />
            </Button>
          </div>
          <SidebarMenu className="gap-0.5">
            <SidebarMenuItem>
              <SidebarMenuButton className="h-7 text-xs text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 rounded-lg px-2">
                <span className="size-2 rounded-full bg-amber-400 mr-2 flex-shrink-0" />
                <span className="truncate">Product Roadmap 2026</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton className="h-7 text-xs text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 rounded-lg px-2">
                <span className="size-2 rounded-full bg-fuchsia-400 mr-2 flex-shrink-0" />
                <span className="truncate">UX Flow & Sticky Board</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton className="h-7 text-xs text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 rounded-lg px-2">
                <span className="size-2 rounded-full bg-emerald-400 mr-2 flex-shrink-0" />
                <span className="truncate">Weekly Sprint Kanban</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      {/* 3. Footer Section in Sidebar */}
      <SidebarFooter className="p-2.5 border-t border-stone-200/50 dark:border-stone-800/50 bg-[#F6F4F0]/60 dark:bg-[#18181B]/60">
        {/* Workspace Plan Usage Indicator (Only when expanded) */}
        <div className="group-data-[collapsible=icon]:hidden mb-2 p-2.5 rounded-xl bg-white/80 dark:bg-stone-900/80 border border-stone-200/70 dark:border-stone-800/70 shadow-xs">
          <div className="flex items-center justify-between text-[11px] mb-1.5">
            <span className="font-medium text-stone-700 dark:text-stone-300">
              Canvas & Docs Usage
            </span>
            <span className="text-stone-500 dark:text-stone-400 font-mono text-[10px]">
              18/50
            </span>
          </div>
          <Progress value={36} className="h-1.5 bg-stone-100 dark:bg-stone-800" />
          <div className="mt-1.5 flex items-center justify-between">
            <span className="text-[10px] text-stone-400 dark:text-stone-500">Free Tier</span>
            <button className="text-[10px] font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">
              Upgrade to Pro
            </button>
          </div>
        </div>

        {/* User Profile Card & Action Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <button
                type="button"
                className={cn(
                  "w-full flex items-center gap-2.5 p-1.5 rounded-xl text-left transition-all duration-150",
                  "hover:bg-white dark:hover:bg-stone-800/80 border border-transparent hover:border-stone-200/60 dark:hover:border-stone-700/50",
                  "group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-1 group-data-[collapsible=icon]:mx-auto"
                )}
              />
            }
          >
            {/* Avatar with Cozy Status Ring */}
            <div className="relative flex-shrink-0">
              <Avatar className="size-8 rounded-lg ring-1 ring-stone-300/60 dark:ring-stone-700/60 shadow-xs">
                <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=128&q=80" alt="Alex Morgan" />
                <AvatarFallback className="bg-amber-100 text-amber-800 text-xs font-semibold rounded-lg">
                  AM
                </AvatarFallback>
              </Avatar>
              <span className="absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-stone-900" />
            </div>

            {/* Profile Info (Expanded Mode) */}
            <div className="flex flex-col min-w-0 flex-1 leading-tight group-data-[collapsible=icon]:hidden">
              <span className="text-xs font-semibold text-stone-900 dark:text-stone-100 truncate">
                Alex Morgan
              </span>
              <span className="text-[10px] text-stone-500 dark:text-stone-400 truncate">
                alex@museflow.app
              </span>
            </div>

            <MoreVertical className="size-4 text-stone-400 group-data-[collapsible=icon]:hidden flex-shrink-0" />
          </DropdownMenuTrigger>

          <DropdownMenuContent
            side={isCollapsed ? "right" : "top"}
            align={isCollapsed ? "start" : "end"}
            className="w-56 rounded-xl p-1.5 shadow-lg border-stone-200/80 dark:border-stone-800 bg-white/95 dark:bg-stone-900/95 backdrop-blur-md"
          >
            <DropdownMenuLabel className="font-normal px-2 py-1.5">
              <div className="flex flex-col space-y-1">
                <p className="text-xs font-semibold text-stone-900 dark:text-stone-100">Alex Morgan</p>
                <p className="text-[11px] text-stone-500 dark:text-stone-400">alex@museflow.app</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-stone-200/70 dark:bg-stone-800/70" />
            <DropdownMenuItem className="text-xs rounded-lg cursor-pointer">
              <Compass className="size-3.5 mr-2 text-stone-500" />
              Workspace Settings
            </DropdownMenuItem>
            <DropdownMenuItem className="text-xs rounded-lg cursor-pointer">
              <Sparkles className="size-3.5 mr-2 text-purple-500" />
              AI Credits & Usage
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-stone-200/70 dark:bg-stone-800/70" />
            <DropdownMenuItem className="text-xs text-rose-600 dark:text-rose-400 rounded-lg cursor-pointer">
              <LogOut className="size-3.5 mr-2" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
