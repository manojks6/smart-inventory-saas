# 🔄 AGENT SESSION SYNC

**Project:** Smart Multi-Tenant Inventory & Order Management SaaS
**Last Updated:** 2026-05-05
**Current Status:** Auth & Products Baseline Ready (Backend & Frontend).

---

## 🏗️ PROJECT SNAPSHOT

### 🛠️ Tech Stack
- **Frontend:** Angular 21, Angular Material, Bootstrap (Styles).
- **Backend:** NestJS, TypeORM, PostgreSQL (Supabase).
- **Auth:** JWT-based, tenant-isolated, RBAC ready.

### ✅ Completed Tasks
- [x] Backend: PostgreSQL connection via TypeORM and `.env`.
- [x] Backend: Multi-tenant `Tenant` and `User` entities with security (`Exclude` password).
- [x] Backend: Auth Module with `register` (tenant creation) and `login`.
- [x] Backend: JWT Strategy and custom `@GetUser` decorator for tenant-aware requests.
- [x] Backend: Products CRUD with strict `tenantId` data isolation.
- [x] Frontend: `AuthService` implemented using **Angular Signals**.
- [x] Frontend: `Login` and `Register` pages fully connected to Backend API.
- [x] Frontend: **User Management** (List & Add User Dialog).
- [x] Frontend: **Products Management** (List & Add Product Dialog).
- [x] Frontend: Routing updated with lazy loading.

### 🚧 In Progress
- [ ] Backend: Inventory Stock Management (Stock adjustments & Warehouses).
- [ ] Backend: Role-based Access Control (RBAC) decorator/guard.
- [ ] Frontend: **Inventory UI** (Stock levels & Warehouse management).
- [ ] Backend: **Orders & Customers** CRUD.

---

## 🎯 NEXT PRIORITY: INVENTORY & DASHBOARD

1. **Backend:**
   - Implement `Warehouses` and `Inventory` entities.
   - Create endpoints for stock updates (Add/Remove/Transfer).
2. **Frontend:**
   - Build the Products Management table.
   - Build the Dashboard KPIs (Total Stock, Low Stock Alerts, etc.).

---

## 📂 KEY FILE LOOKUP
- `AGENTS.md`: Core project strategy and constraints.
- `backend/src/app.module.ts`: Backend configuration.
- `backend/src/modules/auth/auth.service.ts`: Auth & Tenant creation logic.
- `backend/src/modules/products/products.service.ts`: Multi-tenant query example.
- `frontend/src/app/core/services/auth.service.ts`: Signal-based auth state.

---

## 💡 QUICK TIPS FOR NEXT AGENT
- **Strict Isolation:** Every entity (Products, Inventory, Orders) MUST have `tenantId`.
- **Backend Filtering:** Always filter by `tenantId` in repositories using `@GetUser('tenantId')`.
- **Frontend Signals:** Keep using `currentUser` and `isAuthenticated` signals for UI reactivity.
- **UI Consistency:** Use the premium styles in `styles.css` (e.g., `.mat-mdc-card`, `.metric-card`).
