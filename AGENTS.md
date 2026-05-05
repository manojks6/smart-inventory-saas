# AGENTS.md

## Smart Multi-Tenant Inventory & Order Management SaaS

## Persistent Context File (Use Across Different AI Agents)

---

# 🎯 PROJECT IDENTITY

**Project Name:** Smart Multi-Tenant Inventory & Order Management SaaS

**Purpose:** Resume showcase project demonstrating full-stack engineering skills using real business workflows.

**Primary Goal:** Finish a polished deployable project with strong recruiter value using minimum time and minimum AI credits.

---

# 🧠 CURRENT STRATEGY

Use practical stack instead of harder stack.

## Final Chosen Stack

### Frontend

* Angular (Latest)
* TypeScript
* Angular Material & CDK
* Tailwind CSS
* RxJS
* TanStack Query (Angular version) or standard HttpClient
* Signals for State Management

### Backend

* NestJS
* TypeScript
* JWT Auth
* REST APIs
* TypeORM (or Prisma if migrated later)

### Database

* PostgreSQL

### Free Deployment

* Frontend: Vercel / Netlify
* Backend: Render
* Database: Supabase / Neon

---

# 🚫 IMPORTANT CONSTRAINTS

* User switches AI agents frequently.
* Need persistent context file.
* Need to reduce token / credit usage.
* Need direct actionable answers.
* Avoid unnecessary explanations.
* Avoid overengineering.
* Prefer shipping fast.

---

# 🎯 WHAT TO OPTIMIZE FOR

When helping on this project:

1. Save time
2. Save credits
3. Give exact code changes
4. Give minimal but correct answers
5. Prioritize completion
6. Resume impact over feature count
7. Production-looking UI
8. Use free-tier tools only

---

# 📦 PROJECT SCOPE (ONLY BUILD THESE)

## Must Have

* Authentication
* Multi-tenant tenant_id model
* Dashboard
* Products CRUD
* Inventory stock management
* Orders CRUD
* Customers CRUD
* Reports page
* Role-based access
* Deployment

## Skip Unless Asked

* Redis
* Kafka
* Stripe
* Twilio
* Microservices
* AI features
* Native mobile app
* Kubernetes
* Complex DevOps

---

# 🏗 DATABASE CORE TABLES

* tenants
* users
* products
* warehouses
* inventory
* customers
* orders
* order_items

All business tables use:

tenant_id

---

# 🔐 SECURITY MODEL

* JWT auth
* Password hashing
* Protected routes
* Role guards
* Backend tenant filtering
* Validation DTOs

---

# 📁 RECOMMENDED STRUCTURE

## Frontend

src/

* components
* pages
* layouts
* hooks
* store
* services
* utils

## Backend

src/

* modules
* common
* config

---

# 📅 CURRENT ROADMAP

Weekend-based execution.

## Planned Order

1. [x] Setup
2. [/] Auth
3. [ ] Products
4. [ ] Inventory
5. [ ] Orders
6. [ ] Dashboard
7. [ ] Reports
8. [ ] Deploy
9. [ ] Resume polish

---

# 💼 RESUME POSITIONING

Project should look like:

Enterprise SaaS Admin Platform

Not tutorial CRUD app.

---

# 🎨 UI STYLE

* Clean dashboard
* Cards
* Charts
* Tables
* Responsive
* Premium spacing
* Fast UX

---

# 🤖 HOW ANY AGENT SHOULD RESPOND

When reading this file:

## Prefer:

* concise answers
* exact commands
* exact file edits
* copy-paste code
* practical debugging
* recruiter-focused suggestions

## Avoid:

* giant essays
* theoretical overviews
* unnecessary alternatives
* changing stack often
* advanced features not needed now

---

# 📌 CURRENT USER SKILL CONTEXT

* Knows NestJS basics
* Wants practical roadmap
* Wants resume-ready output
* Wants low-cost / free deployment
* Wants efficient AI usage

---

# 🔥 DEFAULT REQUEST MODE

If user asks vague question, assume:

“Give shortest high-value answer for this project.”

---

# 🧾 REUSABLE RESUME BULLET

Built a multi-tenant Inventory & Order Management SaaS using Angular, NestJS, and PostgreSQL with JWT authentication, tenant isolation, inventory workflows, reporting dashboard, and cloud deployment.

---

# 🚀 NEXT PRIORITY

Current best next step:

Build authentication + DB schema first.

---

# END
