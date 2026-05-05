# smart-inventory-saas

Smart Multi-Tenant Inventory & Order Management SaaS

## Overview

`smart-inventory-saas` is a full-stack monorepo prepared for building a professional software-as-a-service platform focused on inventory and order management across multiple tenants.

This repository currently includes only a clean foundational structure so the frontend and backend can be developed independently while staying organized within a single project workspace.

## Structure

```text
smart-inventory-saas/
  frontend/
  backend/
  README.md
```

## Project Status

- [x] Initial structure created.
- [x] Tech stack: Angular 17+ & NestJS.
- [ ] Authentication implementation (In Progress).

## AI Agent Context

This repository uses persistent context files to help AI coding agents understand the project goals and constraints:

- `AGENTS.md`: Core project strategy, constraints, and roadmap.
- `AGENT_SKILL.md`: Senior-level engineering instructions.
- `AGENT_SESSION_SYNC.md`: **Current session lookup** for quick handover between agents.

## Getting Started

1. **Backend**: `cd backend && npm install && npm run start:dev`
2. **Frontend**: `cd frontend && npm install && npm start`

