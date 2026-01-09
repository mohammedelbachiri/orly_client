# Orly Web Client 

Next.js frontend application for the Orly e-commerce platform.

## Features

- Product browsing and search
- Shopping cart management
- User authentication and orders
- Admin dashboard
- Payment integration

## Quick Start

### Install Dependencies
```bash
npm install
```

### Configure API
Update the API base URL in `.env.local`:
```
NEXT_PUBLIC_API_URL=http://localhost:4000/api
```

### Run Development Server
```bash
npm run dev
```

Visit http://localhost:3000

## Tech Stack

- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui

## Project Structure

```
/app              - Pages and routes
/components       - Reusable UI components
/lib              - API services and utilities
/types            - TypeScript type definitions
```
