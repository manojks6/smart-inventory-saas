# High-Level Design (HLD) & Project Purpose

## 🎯 Project Identity
**Name:** Smart Multi-Tenant Inventory & Order Management SaaS

### 1️⃣ The Business Purpose (Product Vision)
This application is a **Multi-Tenant Software as a Service (SaaS)** designed to handle inventory and order management for businesses of any scale. 

**Target Audience:**
Because the architecture is strictly multi-tenant, it is highly versatile. It can be used simultaneously by:
*   🏢 **Large Warehouses:** Tracking massive pallets of stock across multiple geographic locations.
*   🏪 **Small Boutiques & Local Shops:** Ringing up daily orders and checking on-shelf availability.
*   🚚 **Independent Vendors:** Managing their specific catalog of goods.

**How it works:**
Every piece of data in the system is securely tagged with a unique `tenantId`. This guarantees **Data Isolation**. Multiple businesses can sign up and use the platform on the same backend infrastructure, but their data will never cross over or leak to another tenant.

### 2️⃣ Technical Architecture & Engineering Goals
Beyond its business utility, this project is architected to serve as a **Production-Grade System Prototype**. 
It demonstrates the implementation of advanced architectural concepts required for scalable Enterprise SaaS applications:

*   **Multi-Tenancy & Data Isolation:** Proving the ability to build scalable, secure SaaS infrastructure.
*   **Role-Based Access Control (RBAC):** Managing complex permissions (Admin, Manager, Staff) via JWT auth guards.
*   **Full-Stack Integration:** Seamlessly bridging an Angular reactive frontend (Signals) with a robust NestJS backend.
*   **Monorepo Structure:** Maintaining clean, deployable codebases with synchronized environments.

---

## 🏗️ Core Architecture Overview

### Frontend (Angular)
*   **Framework:** Angular (Standalone Components)
*   **State Management:** Angular Signals
*   **UI Library:** Angular Material + Bootstrap Utility Classes
*   **Routing:** Lazy-loaded modules protected by Auth and Role Guards.

### Backend (NestJS)
*   **Framework:** NestJS (TypeScript)
*   **Database:** PostgreSQL via TypeORM
*   **Security:** JWT Authentication + Bcrypt password hashing
*   **Global Filters:** Strict validation pipes and CORS configuration.

### Data Model (Key Entities)
All business entities are strictly isolated by `tenantId`:
*   `Tenant`
*   `User`
*   `Product`
*   `Warehouse`
*   `Inventory`
*   `Order` (Planned)
*   `Customer` (Planned)
