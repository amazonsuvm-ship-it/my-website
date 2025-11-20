# E-Commerce Services Platform

## Overview

A professional B2B e-commerce services platform that connects sellers with expert services for Amazon, Flipkart, Facebook, and Instagram platforms. The application provides a marketing website with multilingual support, contact form functionality, and service recommendations to help e-commerce sellers improve their operations across multiple platforms.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **Framework:** React 18 with TypeScript
- **Routing:** Wouter (lightweight client-side routing)
- **Build Tool:** Vite
- **Styling:** Tailwind CSS with custom design system
- **UI Components:** Radix UI primitives via shadcn/ui component library
- **State Management:** TanStack Query (React Query) for server state

**Design System:**
- Custom Tailwind configuration with extended color palette supporting light/dark themes
- Typography: Inter (headings/UI) and Open Sans (body text) from Google Fonts
- Responsive design with mobile-first approach
- Component styling follows "new-york" shadcn style variant

**Key Features:**
- Multi-language support (English, Hindi, Spanish) with context-based i18n
- Theme switching (light/dark mode) with localStorage persistence
- Smooth scrolling navigation between page sections
- Form validation using react-hook-form with Zod schemas

**Component Structure:**
- Page components in `client/src/pages/`
- Reusable UI components in `client/src/components/`
- shadcn/ui primitives in `client/src/components/ui/`
- Context providers for language and theme management

### Backend Architecture

**Technology Stack:**
- **Runtime:** Node.js with TypeScript
- **Framework:** Express.js
- **Development Server:** Custom Vite integration with HMR support
- **Data Validation:** Zod schemas with drizzle-zod integration

**API Design:**
- RESTful endpoints under `/api` prefix
- JSON request/response format
- Request logging middleware with response capture
- Form validation using Zod schemas from shared directory

**Server Structure:**
- Main server setup in `server/index.ts`
- Route definitions in `server/routes.ts`
- Storage abstraction layer in `server/storage.ts`
- Currently using in-memory storage (MemStorage class)

**Development Setup:**
- Vite middleware mode for development with HMR
- Static file serving for production builds
- Request logging with timing information
- Error overlay integration for development

### Data Storage Solutions

**Current Implementation:**
- In-memory storage using Map-based MemStorage class
- Contact submissions stored with UUID identifiers
- Chronological sorting by creation timestamp

**Schema Definition:**
- Database schema defined using Drizzle ORM in `shared/schema.ts`
- PostgreSQL-compatible schema (currently not connected)
- Contact submissions table with fields: id, name, email, phone, business_name, platform, services array, message, created_at

**Migration Setup:**
- Drizzle Kit configured for PostgreSQL in `drizzle.config.ts`
- Migration output directory: `./migrations`
- Uses DATABASE_URL environment variable (currently not set)
- Schema location: `./shared/schema.ts`

**Note:** The application is configured for PostgreSQL via Drizzle ORM and Neon Database serverless driver, but currently operates with in-memory storage. Database integration requires setting DATABASE_URL environment variable and running migrations.

### Authentication and Authorization

**Current State:** No authentication system implemented. The application is a public-facing marketing website with contact form submission.

**Future Considerations:** If admin functionality is added to view contact submissions, authentication would be needed for the `/api/contact-submissions` endpoint.

## External Dependencies

### Third-Party Services

**Neon Database:**
- Serverless PostgreSQL database (configured but not active)
- Package: `@neondatabase/serverless`
- Connection via DATABASE_URL environment variable

**Drizzle ORM:**
- Type-safe database toolkit
- PostgreSQL dialect configured
- Schema-first approach with Zod validation integration

### UI Component Libraries

**Radix UI:**
- Comprehensive set of accessible, unstyled UI primitives
- 25+ component packages including Dialog, Dropdown Menu, Select, Toast, etc.
- Provides keyboard navigation and ARIA attributes

**shadcn/ui:**
- Component collection built on Radix UI
- Configured with "new-york" style variant
- Custom path aliases for easy imports

### Development Tools

**Replit Integrations:**
- `@replit/vite-plugin-runtime-error-modal` - Error overlay
- `@replit/vite-plugin-cartographer` - Development tooling
- `@replit/vite-plugin-dev-banner` - Development banner

### Form and Validation

**React Hook Form:**
- Form state management and validation
- Package: `@hookform/resolvers` for Zod integration

**Zod:**
- TypeScript-first schema validation
- Used for API request validation and form validation
- Integration with Drizzle ORM via `drizzle-zod`

### Styling and Icons

**Tailwind CSS:**
- Utility-first CSS framework
- Custom configuration with extended theme
- PostCSS for processing

**Icon Libraries:**
- `lucide-react` - Modern icon set
- `react-icons` - Includes brand icons (SiAmazon, SiFacebook, etc.)

### Date Handling

**date-fns:**
- Modern date utility library
- Used for timestamp formatting and manipulation