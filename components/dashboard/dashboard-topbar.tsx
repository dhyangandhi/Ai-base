"use client"

import * as React from "react"
import {
  Search,
  Plus,
  Share2,
  Sparkles,
  Palette,
  FileText,
  Kanban,
  Sun,
  Moon,
  Users,
  Bell,
  PanelLeft
} from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar"

interface TopBarProps {
  activeTitle?: string
  onNewAction?: (type: string) => void
}

export function DashboardTopBar({
  activeTitle = "Dashboard",
  onNewAction,
}: TopBarProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="sticky top-0 z-20 flex h-14 w-full items-center justify-between border-b border-stone-200/70 dark:border-stone-800/70 bg-[#FAF8F5]/80 dark:bg-[#121214]/80 backdrop-blur-md px-4 sm:px-6 transition-colors">
      {/* Left side: Sidebar Toggle & Notion Breadcrumbs */}
      <div className="flex items-center gap-3">
        <SidebarTrigger className="text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 size-8 rounded-lg hover:bg-stone-200/50 dark:hover:bg-stone-800/60" />

        <div className="h-4 w-px bg-stone-200 dark:bg-stone-800 hidden sm:block" />

        <Breadcrumb className="hidden sm:flex">
          <BreadcrumbList className="text-xs text-stone-500 dark:text-stone-400">
            <BreadcrumbItem>
              <BreadcrumbLink href="#" className="hover:text-stone-900 dark:hover:text-stone-200 font-medium">
                Workspace
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-semibold text-stone-800 dark:text-stone-100 flex items-center gap-1.5">
                {activeTitle}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Middle: Quick Search Bar */}
      <div className="flex-1 max-w-md mx-4 hidden md:block">
        <button
          type="button"
          className="w-full flex items-center justify-between px-3 py-1.5 text-xs text-stone-500 dark:text-stone-400 bg-white/70 dark:bg-stone-900/60 border border-stone-200/70 dark:border-stone-800 rounded-xl hover:border-stone-300 dark:hover:border-stone-700 hover:shadow-xs transition-all"
        >
          <div className="flex items-center gap-2">
            <Search className="size-3.5 text-stone-400" />
            <span>Search whiteboards, docs, and tags...</span>
          </div>
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-stone-200 dark:border-stone-700 bg-stone-100 dark:bg-stone-800 px-1.5 font-mono text-[10px] font-medium text-stone-600 dark:text-stone-300">
            <span className="text-xs">⌘</span>K
          </kbd>
        </button>
      </div>

      {/* Right side: Miro Realtime Presence + Action Buttons */}
      <div className="flex items-center gap-2 sm:gap-2.5">
        {/* Miro-style Realtime Collaborators Presence */}
        <div className="hidden lg:flex items-center -space-x-1.5 overflow-hidden pl-1 pr-2 py-1 rounded-full bg-stone-100/70 dark:bg-stone-800/40 border border-stone-200/60 dark:border-stone-800/60">
          <Tooltip>
            <TooltipTrigger>
              <Avatar className="size-6 border-2 border-white dark:border-stone-900 ring-1 ring-amber-400">
                <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&q=80" />
                <AvatarFallback className="text-[9px] bg-amber-200 text-amber-900 font-bold">SP</AvatarFallback>
              </Avatar>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="text-xs">Sophia (Editing Strategy Board)</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <Avatar className="size-6 border-2 border-white dark:border-stone-900 ring-1 ring-indigo-400">
                <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&q=80" />
                <AvatarFallback className="text-[9px] bg-indigo-200 text-indigo-900 font-bold">LC</AvatarFallback>
              </Avatar>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="text-xs">Liam (Adding Sticky Notes)</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <Avatar className="size-6 border-2 border-white dark:border-stone-900 ring-1 ring-emerald-400">
                <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=64&q=80" />
                <AvatarFallback className="text-[9px] bg-emerald-200 text-emerald-900 font-bold">MV</AvatarFallback>
              </Avatar>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="text-xs">Marcus (Reviewing Kanban)</TooltipContent>
          </Tooltip>

          <div className="size-6 rounded-full bg-stone-200 dark:bg-stone-700 flex items-center justify-center text-[10px] font-semibold text-stone-600 dark:text-stone-300 border-2 border-white dark:border-stone-900">
            +3
          </div>
        </div>

        {/* Theme Toggle Button */}
        {mounted && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="size-8 rounded-lg text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 hover:bg-stone-200/50 dark:hover:bg-stone-800/60"
            title="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="size-4 text-amber-400" />
            ) : (
              <Moon className="size-4 text-stone-600" />
            )}
          </Button>
        )}

        {/* Share Button */}
        <Button
          variant="outline"
          size="sm"
          className="hidden sm:flex items-center gap-1.5 h-8 text-xs font-medium rounded-lg border-stone-200/80 dark:border-stone-800 bg-white/60 dark:bg-stone-900/60 hover:bg-white dark:hover:bg-stone-800"
        >
          <Share2 className="size-3.5 text-stone-500" />
          <span>Share</span>
        </Button>

        {/* "+ New" Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button
                size="sm"
                className="h-8 gap-1.5 text-xs font-semibold rounded-lg bg-stone-900 text-stone-50 hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-white shadow-xs"
              >
                <Plus className="size-3.5" />
                <span>New</span>
              </Button>
            }
          />
          <DropdownMenuContent
            align="end"
            className="w-52 rounded-xl p-1.5 shadow-xl border-stone-200/80 dark:border-stone-800 bg-white/95 dark:bg-stone-900/95 backdrop-blur-md"
          >
            <DropdownMenuLabel className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider px-2 py-1">
              Create New
            </DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => onNewAction?.("whiteboard")}
              className="text-xs rounded-lg cursor-pointer flex items-center gap-2.5 py-2"
            >
              <div className="size-6 rounded-md bg-fuchsia-100 dark:bg-fuchsia-950/70 text-fuchsia-600 dark:text-fuchsia-400 flex items-center justify-center">
                <Palette className="size-3.5" />
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-stone-800 dark:text-stone-100">Whiteboard Canvas</span>
                <span className="text-[10px] text-stone-400">Miro-style infinite board</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => onNewAction?.("note")}
              className="text-xs rounded-lg cursor-pointer flex items-center gap-2.5 py-2"
            >
              <div className="size-6 rounded-md bg-amber-100 dark:bg-amber-950/70 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                <FileText className="size-3.5" />
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-stone-800 dark:text-stone-100">Document / Note</span>
                <span className="text-[10px] text-stone-400">Notion-style rich blocks</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => onNewAction?.("kanban")}
              className="text-xs rounded-lg cursor-pointer flex items-center gap-2.5 py-2"
            >
              <div className="size-6 rounded-md bg-emerald-100 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <Kanban className="size-3.5" />
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-stone-800 dark:text-stone-100">Task Board</span>
                <span className="text-[10px] text-stone-400">Kanban sprint workflow</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-stone-200/60 dark:bg-stone-800/60" />
            <DropdownMenuItem
              onClick={() => onNewAction?.("ai")}
              className="text-xs rounded-lg cursor-pointer flex items-center gap-2.5 py-2"
            >
              <div className="size-6 rounded-md bg-purple-100 dark:bg-purple-950/70 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                <Sparkles className="size-3.5" />
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-stone-800 dark:text-stone-100">AI Sprint Generator</span>
                <span className="text-[10px] text-stone-400">Instant workflow from prompt</span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
