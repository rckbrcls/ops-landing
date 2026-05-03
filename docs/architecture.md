# Architecture

## Overview

`ops-landing` is a Next.js App Router marketing and product landing page for the Ops Tauri desktop app.

## Components

- `app/`: route, metadata, and page shell.
- `components/`: page sections and UI primitives.
- `public/screenshots/`: existing product screenshots.

## Data Flow

1. Static content and screenshots are rendered by the Next.js page.
2. Section components explain the product and route users to the desktop app/download surface.
3. Product claims should be checked against the Tauri app in `../ops`.

## Trade-offs

- A small static landing site keeps product communication independent from the desktop app.
- It can drift from the app if screenshots and claims are not reviewed together.
