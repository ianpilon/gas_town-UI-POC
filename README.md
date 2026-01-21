# Gas Town - Multi-Agent Orchestration System

## Demo

https://github.com/ianpilon/gas_town-UI-POC/assets/gas_town_UI_POC_ian_pilon_70mb.mp4

## Overview

Gas Town is a UI proof of concept designed by Ian Pilon for a multi-agent orchestration system built for Claude Code. It's a workspace manager that helps coordinate multiple AI agents working on complex development tasks, providing infrastructure for running 20-30 concurrent AI workers without losing track of what they're doing.

## Purpose

The system addresses the challenge of managing multiple concurrent AI agents in software development workflows. Gas Town provides visualization and coordination tools to:

- Track and monitor multiple AI agents simultaneously
- Visualize agent relationships and task dependencies
- Manage complex multi-agent workflows
- Provide real-time status and progress tracking
- Coordinate distributed development tasks across agent teams

## Tech Stack

### Frontend
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS v4 with custom tactical theme
- **UI Components**: shadcn/ui component library (New York style) with Radix UI primitives
- **Visualization**: react-force-graph-2d with D3.js for force-directed network graphs
- **Animations**: Framer Motion for transitions

### Backend
- **Runtime**: Node.js with Express
- **Language**: TypeScript with ESM modules
- **Build Tool**: esbuild for server bundling, Vite for client
- **API Pattern**: REST endpoints prefixed with `/api`

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` (shared between client and server)
- **Validation**: Zod schemas generated via drizzle-zod
- **Current Storage**: In-memory storage implementation with interface for future database migration

## Project Structure

```
├── client/src/          # React frontend application
│   ├── components/      # React components including UI library
│   ├── pages/           # Route page components
│   ├── lib/             # Utilities, mock data, query client
│   └── hooks/           # Custom React hooks
├── server/              # Express backend
│   ├── routes.ts        # API route definitions
│   ├── storage.ts       # Data access layer interface
│   ├── voice.ts         # Voice integration
│   └── static.ts        # Static file serving
├── shared/              # Shared code between client/server
│   └── schema.ts        # Drizzle database schema
└── migrations/          # Drizzle migration files
```

## Getting Started

### Prerequisites
- Node.js (v20+)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Development

The development environment runs:
- Vite dev server on port 5000 (frontend)
- Express server in development mode (backend)

### Scripts

- `npm run dev:client` - Start Vite dev server
- `npm run dev` - Start Express backend in development mode
- `npm run build` - Build both client and server for production
- `npm start` - Start production server
- `npm run check` - Type check with TypeScript
- `npm run db:push` - Push database schema changes

## Features

- Interactive force-directed graph visualization for agent orchestration
- Real-time monitoring of multiple concurrent AI agents
- Task dependency visualization and tracking
- Tactical UI theme optimized for complex workflow management
- Profile/status cards for individual agents
- Filter and search capabilities across agent networks
- Mock data generation for testing with 1000+ nodes

## License

MIT

---

**UI Proof of Concept by Ian Pilon**
