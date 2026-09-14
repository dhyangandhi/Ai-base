"use client"

import * as React from "react"
import {
  Sparkles,
  Plus,
  Palette,
  FileText,
  Kanban,
  ArrowRight,
  Clock,
  MoreHorizontal,
  FolderOpen,
  Pin,
  CheckCircle2,
  Calendar,
  Layers,
  Wand2,
  MousePointer,
  StickyNote,
  PenTool,
  Shapes,
  Move,
  Search,
  ExternalLink,
  MessageSquare,
  Zap,
  TrendingUp,
  Tag
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface DashboardContentProps {
  activeTab: string
  onNavigateTab: (tab: string) => void
}

export function DashboardContent({
  activeTab,
  onNavigateTab,
}: DashboardContentProps) {
  // Sample interactive sticky note state for the Miro canvas feel
  const [stickyNotes, setStickyNotes] = React.useState([
    {
      id: "1",
      color: "bg-amber-100 dark:bg-amber-950/80 border-amber-300 dark:border-amber-700 text-amber-900 dark:text-amber-100",
      tagColor: "bg-amber-200/80 text-amber-800 dark:bg-amber-900/60 dark:text-amber-200",
      author: "Alex",
      title: "Design System Tokens",
      text: "Standardize warm neutral tints & Miro pastel sticky tokens across all team workspaces.",
      tag: "UI / UX",
    },
    {
      id: "2",
      color: "bg-rose-100 dark:bg-rose-950/80 border-rose-300 dark:border-rose-700 text-rose-900 dark:text-rose-100",
      tagColor: "bg-rose-200/80 text-rose-800 dark:bg-rose-900/60 dark:text-rose-200",
      author: "Sophia",
      title: "Realtime Collaboration",
      text: "Multiplayer WebSockets with cursor presence & dynamic viewport synchronization.",
      tag: "Engine",
    },
    {
      id: "3",
      color: "bg-emerald-100 dark:bg-emerald-950/80 border-emerald-300 dark:border-emerald-700 text-emerald-900 dark:text-emerald-100",
      tagColor: "bg-emerald-200/80 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200",
      author: "Liam",
      title: "Notion Block Embeds",
      text: "Bi-directional sync between markdown knowledge base and visual whiteboard nodes.",
      tag: "Feature",
    },
    {
      id: "4",
      color: "bg-purple-100 dark:bg-purple-950/80 border-purple-300 dark:border-purple-700 text-purple-900 dark:text-purple-100",
      tagColor: "bg-purple-200/80 text-purple-800 dark:bg-purple-900/60 dark:text-purple-200",
      author: "Marcus",
      title: "AI Canvas Synthesis",
      text: "Prompt-to-canvas layout: auto-cluster brainstorm sticky notes into actionable Kanban tickets.",
      tag: "AI Model",
    },
  ])

  // New sticky note input
  const [newStickyText, setNewStickyText] = React.useState("")

  const handleAddSticky = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newStickyText.trim()) return
    const colors = [
      {
        color: "bg-sky-100 dark:bg-sky-950/80 border-sky-300 dark:border-sky-700 text-sky-900 dark:text-sky-100",
        tagColor: "bg-sky-200/80 text-sky-800 dark:bg-sky-900/60 dark:text-sky-200",
      },
      {
        color: "bg-fuchsia-100 dark:bg-fuchsia-950/80 border-fuchsia-300 dark:border-fuchsia-700 text-fuchsia-900 dark:text-fuchsia-100",
        tagColor: "bg-fuchsia-200/80 text-fuchsia-800 dark:bg-fuchsia-900/60 dark:text-fuchsia-200",
      },
    ]
    const pick = colors[Math.floor(Math.random() * colors.length)]
    setStickyNotes([
      ...stickyNotes,
      {
        id: Date.now().toString(),
        color: pick.color,
        tagColor: pick.tagColor,
        author: "Alex",
        title: "Brainstorm Idea",
        text: newStickyText,
        tag: "Idea",
      },
    ])
    setNewStickyText("")
  }

  return (
    <div className="flex-1 w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
      {/* 1. Cozy Greeting & Welcome Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-amber-50 via-rose-50 to-indigo-50 dark:from-stone-900/90 dark:via-stone-900/80 dark:to-indigo-950/40 p-6 sm:p-8 border border-stone-200/70 dark:border-stone-800/80 shadow-xs">
        <div className="relative z-10 max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 dark:bg-stone-800/80 border border-stone-200/80 dark:border-stone-700/60 shadow-2xs">
            <span className="flex size-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold text-stone-700 dark:text-stone-300">
              Notion × Miro Hybrid Studio
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
            Good morning, Alex <span className="inline-block animate-bounce">☕</span>
          </h1>
          <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
            Your creative workspace is synced and ready. You have 3 collaborative whiteboards active, 
            12 sprint tasks in progress, and your AI copilot is online.
          </p>
        </div>

        {/* Decorative Miro visual dots in background */}
        <div className="absolute right-4 bottom-2 opacity-15 dark:opacity-10 pointer-events-none hidden md:block">
          <div className="grid grid-cols-4 gap-3">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="size-4 rounded-full bg-stone-900 dark:bg-white" />
            ))}
          </div>
        </div>
      </div>

      {/* 2. Quick Create Action Bar (Notion + Miro Essentials) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* New Whiteboard */}
        <button
          onClick={() => onNavigateTab("whiteboard")}
          className="group flex flex-col p-4 text-left rounded-xl bg-white dark:bg-stone-900/80 border border-stone-200/80 dark:border-stone-800 hover:border-fuchsia-300 dark:hover:border-fuchsia-800/60 hover:shadow-md transition-all duration-200"
        >
          <div className="flex items-center justify-between w-full mb-3">
            <div className="size-9 rounded-lg bg-fuchsia-50 dark:bg-fuchsia-950/70 border border-fuchsia-200/80 dark:border-fuchsia-800/50 flex items-center justify-center text-fuchsia-600 dark:text-fuchsia-400 group-hover:scale-110 transition-transform">
              <Palette className="size-4" />
            </div>
            <Badge variant="outline" className="text-[10px] text-fuchsia-700 bg-fuchsia-50 dark:bg-fuchsia-950/40 border-fuchsia-200">
              Miro Canvas
            </Badge>
          </div>
          <span className="text-sm font-semibold text-stone-900 dark:text-stone-100 group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400 transition-colors">
            Infinite Whiteboard
          </span>
          <span className="text-xs text-stone-500 dark:text-stone-400 mt-1">
            Visual brainstorming, sticky notes, and live flowcharts.
          </span>
        </button>

        {/* New Doc */}
        <button
          onClick={() => onNavigateTab("notes")}
          className="group flex flex-col p-4 text-left rounded-xl bg-white dark:bg-stone-900/80 border border-stone-200/80 dark:border-stone-800 hover:border-amber-300 dark:hover:border-amber-800/60 hover:shadow-md transition-all duration-200"
        >
          <div className="flex items-center justify-between w-full mb-3">
            <div className="size-9 rounded-lg bg-amber-50 dark:bg-amber-950/70 border border-amber-200/80 dark:border-amber-800/50 flex items-center justify-center text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform">
              <FileText className="size-4" />
            </div>
            <Badge variant="outline" className="text-[10px] text-amber-700 bg-amber-50 dark:bg-amber-950/40 border-amber-200">
              Notion Doc
            </Badge>
          </div>
          <span className="text-sm font-semibold text-stone-900 dark:text-stone-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
            Structured Notes & Docs
          </span>
          <span className="text-xs text-stone-500 dark:text-stone-400 mt-1">
            Markdown blocks, databases, specs, and knowledge wiki.
          </span>
        </button>

        {/* Kanban Board */}
        <button
          onClick={() => onNavigateTab("task-kanban")}
          className="group flex flex-col p-4 text-left rounded-xl bg-white dark:bg-stone-900/80 border border-stone-200/80 dark:border-stone-800 hover:border-emerald-300 dark:hover:border-emerald-800/60 hover:shadow-md transition-all duration-200"
        >
          <div className="flex items-center justify-between w-full mb-3">
            <div className="size-9 rounded-lg bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200/80 dark:border-emerald-800/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
              <Kanban className="size-4" />
            </div>
            <Badge variant="outline" className="text-[10px] text-emerald-700 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200">
              Agile
            </Badge>
          </div>
          <span className="text-sm font-semibold text-stone-900 dark:text-stone-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
            Task / Kanban
          </span>
          <span className="text-xs text-stone-500 dark:text-stone-400 mt-1">
            Sprint pipelines, card assignments, and progress metrics.
          </span>
        </button>

        {/* AI Assistant Generator */}
        <button
          onClick={() => onNavigateTab("ai-assistant")}
          className="group flex flex-col p-4 text-left rounded-xl bg-white dark:bg-stone-900/80 border border-stone-200/80 dark:border-stone-800 hover:border-purple-300 dark:hover:border-purple-800/60 hover:shadow-md transition-all duration-200"
        >
          <div className="flex items-center justify-between w-full mb-3">
            <div className="size-9 rounded-lg bg-purple-50 dark:bg-purple-950/70 border border-purple-200/80 dark:border-purple-800/50 flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
              <Sparkles className="size-4" />
            </div>
            <Badge variant="outline" className="text-[10px] text-purple-700 bg-purple-50 dark:bg-purple-950/40 border-purple-200">
              AI Copilot
            </Badge>
          </div>
          <span className="text-sm font-semibold text-stone-900 dark:text-stone-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            AI Assistant & Templates
          </span>
          <span className="text-xs text-stone-500 dark:text-stone-400 mt-1">
            Generate diagrams, document drafts, and sprint plans.
          </span>
        </button>
      </div>

      {/* 3. Dynamic Section Content depending on active tab */}
      {activeTab === "dashboard" && (
        <div className="space-y-8">
          {/* Miro-style Interactive Canvas Board Live Preview */}
          <div className="rounded-2xl border border-stone-200/80 dark:border-stone-800 bg-white dark:bg-stone-900/90 shadow-sm overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border-b border-stone-200/70 dark:border-stone-800/70 gap-3 bg-[#FAF8F5]/60 dark:bg-stone-900/60">
              <div className="flex items-center gap-2.5">
                <div className="size-7 rounded-lg bg-fuchsia-100 dark:bg-fuchsia-950/80 text-fuchsia-600 dark:text-fuchsia-400 flex items-center justify-center">
                  <Palette className="size-4" />
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                    Live Whiteboard Preview: Product Strategy & UX Map
                    <span className="text-[10px] font-normal px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300">
                      Collaborative • 3 active
                    </span>
                  </h2>
                  <p className="text-xs text-stone-500 dark:text-stone-400">
                    Miro-style infinite dot canvas with interactive sticky notes & block connectors.
                  </p>
                </div>
              </div>

              {/* Quick Canvas Toolbar */}
              <div className="flex items-center gap-1.5 self-start sm:self-auto">
                <div className="flex items-center bg-stone-100 dark:bg-stone-800 p-0.5 rounded-lg border border-stone-200/60 dark:border-stone-700/60">
                  <button className="size-7 flex items-center justify-center rounded text-stone-600 dark:text-stone-300 hover:bg-white dark:hover:bg-stone-700 shadow-2xs">
                    <MousePointer className="size-3.5" />
                  </button>
                  <button className="size-7 flex items-center justify-center rounded text-stone-600 dark:text-stone-300 hover:bg-white dark:hover:bg-stone-700">
                    <StickyNote className="size-3.5 text-amber-500" />
                  </button>
                  <button className="size-7 flex items-center justify-center rounded text-stone-600 dark:text-stone-300 hover:bg-white dark:hover:bg-stone-700">
                    <PenTool className="size-3.5 text-fuchsia-500" />
                  </button>
                  <button className="size-7 flex items-center justify-center rounded text-stone-600 dark:text-stone-300 hover:bg-white dark:hover:bg-stone-700">
                    <Shapes className="size-3.5 text-sky-500" />
                  </button>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => onNavigateTab("whiteboard")}
                  className="h-8 text-xs border-stone-200 dark:border-stone-700 gap-1"
                >
                  <span>Open Full Canvas</span>
                  <ExternalLink className="size-3" />
                </Button>
              </div>
            </div>

            {/* Canvas Area with Dot Grid */}
            <div className="canvas-grid relative p-6 sm:p-8 min-h-[340px] bg-[#FAF8F5]/80 dark:bg-[#151517] overflow-x-auto">
              {/* Simulated Miro User Cursors */}
              <div className="absolute top-8 right-24 pointer-events-none hidden sm:flex items-center gap-1">
                <div className="size-3 rounded-full bg-amber-500 ring-2 ring-white dark:ring-stone-900" />
                <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-amber-500 text-white shadow-xs">
                  Sophia
                </span>
              </div>
              <div className="absolute bottom-12 left-16 pointer-events-none hidden sm:flex items-center gap-1">
                <div className="size-3 rounded-full bg-indigo-500 ring-2 ring-white dark:ring-stone-900" />
                <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-indigo-500 text-white shadow-xs">
                  Liam
                </span>
              </div>

              {/* Sticky Notes Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stickyNotes.map((note) => (
                  <div
                    key={note.id}
                    className={cn(
                      "p-4 rounded-xl border shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between min-h-[160px]",
                      note.color
                    )}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className={cn("text-[10px] font-semibold px-2 py-0.5 rounded-md", note.tagColor)}>
                          {note.tag}
                        </span>
                        <span className="text-[11px] font-medium opacity-70">
                          {note.author}
                        </span>
                      </div>
                      <h4 className="text-xs font-bold mb-1 tracking-tight">{note.title}</h4>
                      <p className="text-xs leading-relaxed opacity-90">{note.text}</p>
                    </div>
                    <div className="pt-2 flex items-center justify-between border-t border-black/5 dark:border-white/5 text-[10px] opacity-60">
                      <span>Just now</span>
                      <Pin className="size-3" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Add Quick Sticky Note Input */}
              <form onSubmit={handleAddSticky} className="mt-5 flex items-center gap-2 max-w-md">
                <input
                  type="text"
                  value={newStickyText}
                  onChange={(e) => setNewStickyText(e.target.value)}
                  placeholder="Drop a quick sticky note on canvas..."
                  className="flex-1 text-xs px-3 py-2 rounded-xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 shadow-xs focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                />
                <Button size="sm" type="submit" className="h-8 text-xs bg-stone-900 hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 rounded-xl">
                  Add Note
                </Button>
              </form>
            </div>
          </div>

          {/* Notion-style Knowledge Docs & Recent Canvases */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Notion Documents & Pages */}
            <div className="p-5 rounded-2xl border border-stone-200/80 dark:border-stone-800 bg-white dark:bg-stone-900/80 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="size-6 rounded-md bg-amber-100 dark:bg-amber-950/70 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                    <FileText className="size-3.5" />
                  </div>
                  <h3 className="text-sm font-semibold text-stone-900 dark:text-stone-100">
                    Notion Knowledge Docs
                  </h3>
                </div>
                <button
                  onClick={() => onNavigateTab("notes")}
                  className="text-xs text-indigo-600 dark:text-indigo-400 font-medium hover:underline flex items-center gap-1"
                >
                  <span>View All</span>
                  <ArrowRight className="size-3" />
                </button>
              </div>

              <div className="divide-y divide-stone-100 dark:divide-stone-800/80">
                {[
                  {
                    title: "Product Requirements Document (PRD) v2",
                    icon: "📄",
                    tag: "Specification",
                    tagColor: "bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300",
                    updated: "12m ago",
                  },
                  {
                    title: "Engineering Onboarding & Architecture Guide",
                    icon: "📚",
                    tag: "Wiki",
                    tagColor: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300",
                    updated: "1h ago",
                  },
                  {
                    title: "Brand Voice, Aesthetics & Tone Guidelines",
                    icon: "🎨",
                    tag: "Design",
                    tagColor: "bg-purple-50 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300",
                    updated: "Yesterday",
                  },
                  {
                    title: "Weekly Sprint Retrospective & Next Goals",
                    icon: "🚀",
                    tag: "Agile",
                    tagColor: "bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300",
                    updated: "2 days ago",
                  },
                ].map((doc, idx) => (
                  <div
                    key={idx}
                    className="py-2.5 flex items-center justify-between hover:bg-stone-50 dark:hover:bg-stone-800/40 px-2 rounded-lg transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="text-base">{doc.icon}</span>
                      <span className="text-xs font-medium text-stone-800 dark:text-stone-200 truncate">
                        {doc.title}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className={cn("text-[10px] font-semibold px-2 py-0.5 rounded-full", doc.tagColor)}>
                        {doc.tag}
                      </span>
                      <span className="text-[11px] text-stone-400">{doc.updated}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Active Sprint Kanban Snapshot */}
            <div className="p-5 rounded-2xl border border-stone-200/80 dark:border-stone-800 bg-white dark:bg-stone-900/80 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="size-6 rounded-md bg-emerald-100 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <Kanban className="size-3.5" />
                  </div>
                  <h3 className="text-sm font-semibold text-stone-900 dark:text-stone-100">
                    Sprint Kanban Highlights
                  </h3>
                </div>
                <button
                  onClick={() => onNavigateTab("task-kanban")}
                  className="text-xs text-indigo-600 dark:text-indigo-400 font-medium hover:underline flex items-center gap-1"
                >
                  <span>Kanban Board</span>
                  <ArrowRight className="size-3" />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-2.5">
                {/* Column 1: To Do */}
                <div className="p-3 rounded-xl bg-stone-50 dark:bg-stone-800/50 border border-stone-200/60 dark:border-stone-700/50 space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-stone-600 dark:text-stone-400">
                    <span>To Do</span>
                    <span className="size-4 rounded-full bg-stone-200 dark:bg-stone-700 flex items-center justify-center text-[10px]">
                      4
                    </span>
                  </div>
                  <div className="p-2 rounded-lg bg-white dark:bg-stone-900 border border-stone-200/60 dark:border-stone-800 shadow-2xs text-[11px] space-y-1">
                    <p className="font-medium text-stone-800 dark:text-stone-200">Dark Mode Palette</p>
                    <span className="inline-block text-[9px] px-1.5 py-0.2 rounded bg-amber-100 text-amber-800">Cozy UI</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white dark:bg-stone-900 border border-stone-200/60 dark:border-stone-800 shadow-2xs text-[11px] space-y-1">
                    <p className="font-medium text-stone-800 dark:text-stone-200">Miro Zoom Wheel</p>
                    <span className="inline-block text-[9px] px-1.5 py-0.2 rounded bg-fuchsia-100 text-fuchsia-800">Canvas</span>
                  </div>
                </div>

                {/* Column 2: In Progress */}
                <div className="p-3 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200/60 dark:border-indigo-900/40 space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-indigo-700 dark:text-indigo-300">
                    <span>In Progress</span>
                    <span className="size-4 rounded-full bg-indigo-200/80 dark:bg-indigo-900/70 flex items-center justify-center text-[10px]">
                      3
                    </span>
                  </div>
                  <div className="p-2 rounded-lg bg-white dark:bg-stone-900 border border-stone-200/60 dark:border-stone-800 shadow-2xs text-[11px] space-y-1">
                    <p className="font-medium text-stone-800 dark:text-stone-200">Sidebar Collapsible</p>
                    <span className="inline-block text-[9px] px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800">Feature</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white dark:bg-stone-900 border border-stone-200/60 dark:border-stone-800 shadow-2xs text-[11px] space-y-1">
                    <p className="font-medium text-stone-800 dark:text-stone-200">Lucide Color System</p>
                    <span className="inline-block text-[9px] px-1.5 py-0.2 rounded bg-purple-100 text-purple-800">Design</span>
                  </div>
                </div>

                {/* Column 3: Completed */}
                <div className="p-3 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40 space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-emerald-700 dark:text-emerald-300">
                    <span>Done</span>
                    <span className="size-4 rounded-full bg-emerald-200/80 dark:bg-emerald-900/70 flex items-center justify-center text-[10px]">
                      8
                    </span>
                  </div>
                  <div className="p-2 rounded-lg bg-white dark:bg-stone-900 border border-stone-200/60 dark:border-stone-800 shadow-2xs text-[11px] space-y-1 opacity-80">
                    <p className="font-medium line-through text-stone-600 dark:text-stone-400">theme.md spec</p>
                    <span className="inline-block text-[9px] px-1.5 py-0.2 rounded bg-stone-100 text-stone-700">Doc</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white dark:bg-stone-900 border border-stone-200/60 dark:border-stone-800 shadow-2xs text-[11px] space-y-1 opacity-80">
                    <p className="font-medium line-through text-stone-600 dark:text-stone-400">Clerk Auth Setup</p>
                    <span className="inline-block text-[9px] px-1.5 py-0.2 rounded bg-stone-100 text-stone-700">Auth</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. Whiteboard Canvas Tab */}
      {activeTab === "whiteboard" && (
        <div className="rounded-2xl border border-stone-200/80 dark:border-stone-800 bg-white dark:bg-stone-900 shadow-sm overflow-hidden flex flex-col h-[700px]">
          {/* Miro Canvas Floating Toolbar */}
          <div className="p-3 border-b border-stone-200/70 dark:border-stone-800 bg-[#FAF8F5]/90 dark:bg-stone-900/90 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-stone-900 dark:text-stone-100">
                Infinite Canvas: MuseFlow Board #01
              </span>
              <Badge variant="outline" className="text-[10px] text-fuchsia-600 bg-fuchsia-50 border-fuchsia-200">
                Miro Mode
              </Badge>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-stone-500 font-mono">100% Zoom</span>
              <Button size="sm" className="h-7 text-xs bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900">
                Export Canvas
              </Button>
            </div>
          </div>

          <div className="canvas-grid flex-1 relative p-8 flex items-center justify-center bg-[#FAF8F5] dark:bg-[#141416]">
            <div className="text-center space-y-3 max-w-md p-6 rounded-2xl bg-white/90 dark:bg-stone-900/90 border border-stone-200/80 dark:border-stone-800 shadow-lg backdrop-blur-md">
              <div className="size-12 rounded-xl bg-fuchsia-100 dark:bg-fuchsia-950 text-fuchsia-600 dark:text-fuchsia-400 mx-auto flex items-center justify-center">
                <Palette className="size-6" />
              </div>
              <h3 className="text-base font-bold text-stone-900 dark:text-stone-100">
                Visual Whiteboard Studio
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
                Draw shapes, connect ideas, pin colorful sticky notes, and collaborate in real-time with team cursors.
              </p>
              <Button
                onClick={() => onNavigateTab("dashboard")}
                variant="outline"
                className="text-xs rounded-xl"
              >
                Back to Dashboard
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* 5. Notes & Docs Tab */}
      {activeTab === "notes" && (
        <div className="rounded-2xl border border-stone-200/80 dark:border-stone-800 bg-white dark:bg-stone-900 p-8 shadow-sm space-y-6 max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <span className="text-3xl">📝</span>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
                Product Architecture & Guidelines
              </h2>
              <p className="text-xs text-stone-500">Last edited 12 minutes ago by Alex</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/50 flex items-start gap-3">
            <span className="text-amber-600 dark:text-amber-400 font-bold text-sm mt-0.5">💡</span>
            <p className="text-xs text-amber-900 dark:text-amber-200 leading-relaxed">
              <strong>Notion Callout Block:</strong> This workspace marries Notion's calm reading rhythm with Miro's tactile spatial canvas. Type <code className="font-mono bg-white/70 dark:bg-stone-800 px-1 py-0.5 rounded">/</code> to insert blocks.
            </p>
          </div>

          <div className="space-y-3 text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
            <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100">1. Core Design Goals</h3>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-stone-600 dark:text-stone-300">
              <li>Cozy modern UI with warm off-white canvas and rich dark mode.</li>
              <li>Collapsible sidebar showing only colorful Lucide icons when collapsed.</li>
              <li>Lucide icons library for all 9 primary workspace destinations.</li>
              <li>Footer section with plan usage and user profile dropdown.</li>
            </ul>
          </div>
        </div>
      )}

      {/* 6. AI Assistant Tab */}
      {activeTab === "ai-assistant" && (
        <div className="rounded-2xl border border-stone-200/80 dark:border-stone-800 bg-white dark:bg-stone-900 p-8 shadow-sm space-y-6 max-w-3xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center">
              <Sparkles className="size-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100">
                MuseFlow AI Copilot
              </h2>
              <p className="text-xs text-stone-500">Ask AI to organize your thoughts, convert notes to whiteboards, or generate specs.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Generate a Miro flowchart for user checkout",
              "Synthesize all sticky notes into a Notion PRD",
              "Plan a 2-week agile sprint with 10 user stories",
              "Create an AI template for customer journey mapping",
            ].map((prompt, i) => (
              <button
                key={i}
                className="p-3.5 text-left rounded-xl border border-stone-200/70 dark:border-stone-800 bg-[#FAF8F5]/60 dark:bg-stone-800/40 hover:border-purple-300 dark:hover:border-purple-700 text-xs font-medium text-stone-700 dark:text-stone-300 transition-colors"
              >
                ✨ {prompt}
              </button>
            ))}
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Ask MuseFlow AI anything about your docs or boards..."
              className="w-full text-xs p-3.5 pr-24 rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 focus:outline-hidden focus:ring-2 focus:ring-purple-500"
            />
            <Button size="sm" className="absolute right-2 top-2 h-8 text-xs bg-purple-600 hover:bg-purple-700 text-white rounded-lg">
              Generate
            </Button>
          </div>
        </div>
      )}

      {/* 7. Task / Kanban Tab */}
      {activeTab === "task-kanban" && (
        <div className="rounded-2xl border border-stone-200/80 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="size-8 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <Kanban className="size-4" />
              </div>
              <h2 className="text-base font-bold text-stone-900 dark:text-stone-100">
                Engineering & Design Sprint Board
              </h2>
            </div>
            <Button size="sm" className="h-8 text-xs bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900">
              <Plus className="size-3.5 mr-1" /> New Task
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {["Backlog", "To Do", "In Progress", "Done"].map((col, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200/60 dark:border-stone-800 space-y-3">
                <div className="flex items-center justify-between text-xs font-semibold text-stone-700 dark:text-stone-300">
                  <span>{col}</span>
                  <span className="size-5 rounded-full bg-stone-200 dark:bg-stone-700 flex items-center justify-center text-[10px]">
                    {idx === 0 ? "5" : idx === 1 ? "4" : idx === 2 ? "3" : "8"}
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="p-3 rounded-lg bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 shadow-2xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 dark:bg-emerald-950/60 px-1.5 py-0.5 rounded">
                        High
                      </span>
                      <span className="text-[10px] text-stone-400">#412</span>
                    </div>
                    <p className="text-xs font-medium text-stone-800 dark:text-stone-200">
                      {idx === 0 ? "Collaborative sticky notes sync" : idx === 1 ? "Sidebar tooltip responsive" : idx === 2 ? "Lucide icons colorful styling" : "theme.md documentation"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 8. Fallback for other tabs: Calendar, Pages, AI Template, Settings */}
      {["calendar", "pages-spaces", "ai-template-builder", "settings"].includes(activeTab) && (
        <div className="rounded-2xl border border-stone-200/80 dark:border-stone-800 bg-white dark:bg-stone-900 p-12 text-center shadow-sm space-y-4 max-w-lg mx-auto">
          <div className="size-14 rounded-2xl bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 mx-auto flex items-center justify-center">
            {activeTab === "calendar" && <Calendar className="size-7 text-rose-500" />}
            {activeTab === "pages-spaces" && <Layers className="size-7 text-sky-500" />}
            {activeTab === "ai-template-builder" && <Wand2 className="size-7 text-teal-500" />}
            {activeTab === "settings" && <Zap className="size-7 text-stone-500" />}
          </div>
          <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 capitalize">
            {activeTab.replace("-", " ")}
          </h3>
          <p className="text-xs text-stone-500 leading-relaxed">
            This module is seamlessly integrated into the MuseFlow workspace. Click below to return to the main dashboard.
          </p>
          <Button onClick={() => onNavigateTab("dashboard")} className="text-xs bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 rounded-xl">
            Return to Dashboard
          </Button>
        </div>
      )}
    </div>
  )
}
