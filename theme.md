# MuseFlow — Design System & Cozy UI Theme Guidelines
> *A harmonious productivity environment blending the editorial focus of Notion with the visual freedom of Miro.*

---

## 1. Design Philosophy

The MuseFlow UI is built around three core pillars:
- **Cozy & Tactile**: Soft warm backgrounds, gentle contrast, natural curves, and comfortable typography that avoids harsh starkness or sterile corporate coldness.
- **Structured Zen (Notion-inspired)**: Clear hierarchy, calm reading rhythm, mindful whitespace, and distraction-free document and database views.
- **Playful Canvas (Miro-inspired)**: Tactile sticky notes, colorful visual cues, delightful micro-animations, and fluid spatial layouts.

---

## 2. Color Palette

### 2.1 Cozy Canvas Neutrals (Warm Tint)
We avoid pure cold whites `#FFFFFF` or stark `#000000`. Instead, our neutral palette is grounded in warm eggshell, soft linen, and rich deep espresso/slate.

| Role | Light Theme (Default) | Dark Theme | Purpose |
| :--- | :--- | :--- | :--- |
| **Canvas Background** | `#FAF8F5` (Warm Cream) | `#121214` (Deep Espresso) | Primary workspace canvas |
| **Surface / Card** | `#FFFFFF` (Ivory White) | `#1A1A1E` (Warm Slate) | Sidebar, cards, popovers |
| **Subtle Surface** | `#F3EFEA` (Soft Sand) | `#222228` (Muted Zinc) | Hover states, input backgrounds |
| **Borders & Dividers**| `#E8E3DC` (Warm Mist) | `#2E2E36` (Low Contrast) | Soft dividing lines, outlines |
| **Primary Text** | `#1C1917` (Deep Stone) | `#F5F5F4` (Soft Ivory) | Headings, primary content |
| **Secondary Text** | `#78716C` (Warm Neutral) | `#A8A29E` (Warm Gray) | Subtitles, metadata, timestamps |
| **Muted Text** | `#A8A29E` (Subtle Warm) | `#71717A` (Muted Zinc) | Placeholders, inactive hints |

---

### 2.2 Menu Items — Colorful Signature Accents
Each functional area has a signature warm/vibrant accent pairing. When rendered in the sidebar, every icon sits in a rounded soft-pastel container with a vibrant glyph:

| Menu Item | Icon Name | Glyph Color | Badge Background (Light) | Badge Background (Dark) |
| :--- | :--- | :--- | :--- | :--- |
| **Dashboard** | `LayoutDashboard` | `#4F46E5` (Indigo) | `#EEF2FF` | `rgba(79, 70, 229, 0.18)` |
| **AI Assistant** | `Sparkles` | `#9333EA` (Violet Sparkle) | `#FAF5FF` | `rgba(147, 51, 234, 0.18)` |
| **Calendar** | `CalendarDays` | `#E11D48` (Rose Coral) | `#FFF1F2` | `rgba(225, 29, 72, 0.18)` |
| **Task / Kanban** | `Kanban` | `#059669` (Emerald Mint) | `#ECFDF5` | `rgba(5, 150, 105, 0.18)` |
| **Notes** | `FileText` | `#D97706` (Warm Honey) | `#FFFBEB` | `rgba(217, 119, 6, 0.18)` |
| **Whiteboard** | `Palette` | `#C026D3` (Fuchsia Berry) | `#FDF4FF` | `rgba(192, 38, 211, 0.18)` |
| **Pages / Spaces** | `Layers` | `#0284C7` (Sky Teal) | `#F0F9FF` | `rgba(2, 132, 199, 0.18)` |
| **AI Template Builder** | `Wand2` | `#0D9488` (Electric Teal) | `#F0FDFA` | `rgba(13, 148, 136, 0.18)` |
| **Settings** | `Settings` | `#64748B` (Cozy Slate) | `#F1F5F9` | `rgba(100, 116, 139, 0.18)` |

---

### 2.3 Miro-Inspired Tactile Canvas & Sticky Notes
For creative brainstorming boards and widgets:
- **Sunny Yellow**: `#FEF08A` (Border: `#FACC15`)
- **Peachy Rose**: `#FECDD3` (Border: `#FB7185`)
- **Mint Sage**: `#A7F3D0` (Border: `#34D399`)
- **Soft Lavender**: `#E9D5FF` (Border: `#C084FC`)
- **Breeze Blue**: `#BAE6FD` (Border: `#38BDF8`)

---

## 3. Typography Guidelines

- **Primary Font**: `Inter`, `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `Roboto`, `sans-serif`.
- **Editorial Headings**: Modern clean sans with generous tracking (`tracking-tight`) and balanced line heights:
  - `Display / Hero`: `28px - 32px`, `font-bold` (700)
  - `Section Titles`: `18px - 20px`, `font-semibold` (600)
  - `Card Titles / Nav`: `14px`, `font-medium` (500)
  - `Body Text`: `14px`, `font-normal` (400), `leading-relaxed` (1.6)
  - `Microcopy / Badges`: `11px - 12px`, `font-medium` (500), `tracking-wide`

---

## 4. Spacing, Radii & Depth

### 4.1 Border Radii
- **Badges & Tooltips**: `rounded-md` (`6px - 8px`)
- **Buttons & Nav Items**: `rounded-lg` (`10px`)
- **Cards & Surfaces**: `rounded-xl` (`14px`)
- **Modals & Canvas Boards**: `rounded-2xl` (`18px`)
- **Avatars & Pills**: `rounded-full` (`9999px`)

### 4.2 Shadows & Elevation
- **Elevation 0 (Flat)**: `border border-border/60`
- **Elevation 1 (Cards)**: `shadow-[0_2px_8px_rgba(0,0,0,0.04)] ring-1 ring-black/5`
- **Elevation 2 (Floating Toolbar/Dropdowns)**: `shadow-[0_8px_24px_rgba(0,0,0,0.08)] ring-1 ring-black/5`
- **Elevation 3 (Modals/Overlays)**: `shadow-[0_20px_48px_rgba(0,0,0,0.12)]`

---

## 5. Sidebar Layout & Collapsible Behavior

### 5.1 Expanded State (`width: 256px / 16rem`)
- **Header**:
  - Logo icon: Dual-tone rounded badge featuring doc + canvas symbolism.
  - Workspace selector: App name ("MuseFlow") + tier badge ("Personal").
  - Collapse icon button: Instant toggle with keyboard shortcut hint (`⌘B`).
- **Navigation Groups**:
  - Menu options grouped with comfortable 4px spacing.
  - Icon container: 32px × 32px rounded squircle with signature pastel background and colorful icon glyph.
  - Label: Medium weight, subtle hover shift, active indicator pill on the right.
- **Footer**:
  - Storage/Board usage indicator bar ("18 / 50 Canvases").
  - User profile bar: Avatar with active green dot, display name, and options trigger.

### 5.2 Collapsed State (`width: 64px / 4rem`)
- Header compresses into the logo mark with collapse toggle accessible on hover.
- Navigation items compress to centered 36px × 36px colorful icons.
- Hovering an icon instantly displays a high-contrast floating tooltip with the menu name and shortcut.
- Footer smoothly minimizes to user avatar with status tooltip.

---

## 6. Micro-Interactions & Animation Standards
- **Transition Duration**: `180ms - 240ms ease-in-out` for width transitions and hover states.
- **Hover Scale**: Soft `scale-[1.03]` on clickable cards and icon badges.
- **Focus Ring**: `ring-2 ring-primary/20 ring-offset-1`.
- **Canvas Dot Grid**: Subtle `radial-gradient` pattern with 20px spacing for the infinite Miro-like feel.
