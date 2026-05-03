# Ops Landing

> **Status:** Active
> This project is currently maintained as the public landing page for Ops.

Public landing page for Ops, the open-source desktop workspace for product catalog, inventory, sales, orders, payments, and analytics.

## Summary

- Public landing page for the Ops desktop operations app.
- Solves product positioning, installation guidance, feature explanation, and public routing outside the desktop codebase.
- Main stack: Next.js, React, TypeScript, Tailwind CSS, next-themes, lucide-react, and landing-page sections.
- Current status: active landing app inside the DOST/Ops workspace.
- Technical value: separates public product copy from the Tauri operations desktop app.

## Overview

`ops-landing` is the marketing and installation page for the Ops desktop application. It explains the product in one screen, shows core screenshots, links to GitHub, and exposes the install command.

## Motivation

- Communicate Ops as a practical desktop operations app, not a generic SaaS landing page.
- Make installation obvious through the curl command and copy action.
- Show the product surface through screenshots of catalog and analytics workflows.
- Keep the page lightweight enough to maintain separately from the desktop app.

## Features

- Header with the Ops brand lockup, alpha badge, and GitHub link.
- Hero headline for the desktop workspace value proposition.
- Quick install command with copy affordance.
- Feature grid for product management, inventory, sales/orders, and analytics.
- Screenshot column for product and analytics views.
- Footer crediting Erick Barcelos.

## Project Structure

```text
ops-landing/
├── app/          # Next.js App Router page, layout, and global styles
├── components/   # Brand lockup, theme provider, and UI primitives
├── public/       # Logo and screenshots
├── lib/          # Shared utilities
└── package.json
```

## Current Status

The page is a focused Next.js app using Tailwind, shadcn-style primitives, and static screenshots. The root layout already includes browser translation protection.

## Known Limitations

- Keep visible copy short and product-oriented.
- Keep the install command aligned with the actual Ops repository.
- Do not let this repository drift into product documentation; detailed feature docs belong in the main Ops README.
