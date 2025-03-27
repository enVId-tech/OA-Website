# Oxford Academy Website

A modern Next.js website for Oxford Academy, featuring responsive design and interactive elements.

## Overview

This project is a Next.js-based website for Oxford Academy that includes:
- Home page with animated sections
- Dynamic subpages using a shared layout pattern
- Responsive design for multiple screen sizes
- Interactive elements for improved user experience

## Project Structure

```
oxford-academy-website/
├── app/                    # Next.js app directory
│   ├── _components/        # Shared components
│   │   ├── analytics/      # Analytics tracking
│   │   ├── animations/     # Animation utilities
│   │   ├── footer/         # Footer component
│   │   ├── layouts/        # Layout components
│   │   ├── navbar/         # Navigation bar
│   │   └── pagetitle/      # Page title components
│   ├── [subpage]/          # Dynamic route for subpages
│   ├── admissions/         # Admissions page
│   ├── bell-schedule/      # Bell schedule page
│   └── page.tsx            # Home page
├── _scss/                  # SCSS styles
│   └── pages/              # Page-specific styles
│       └── subpages/       # Subpage styles
├── public/                 # Static assets
│   └── images/             # Image assets
├── .gitignore              # Git ignore file
├── next.config.js          # Next.js configuration
├── package.json            # Project dependencies
└── tsconfig.json           # TypeScript configuration
```

## Features

- **Responsive Design**: Adapts to different screen sizes
- **Dynamic Routing**: Uses Next.js file-based and dynamic routing
- **Shared Layout Pattern**: Reusable layout components for consistent UI
- **Animation Effects**: Scroll-based animations for enhanced user experience
- **SEO Optimized**: Custom page titles and metadata

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone [repository-url]

# Navigate to project directory
cd oxford-academy-website

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

Visit `http://localhost:3000` to view the website.

### Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Technology Stack

- **Framework**: Next.js
- **Language**: TypeScript
- **Styling**: SCSS
- **Deployment**: Vercel/Netlify/Docker (recommended)

## Project Structure Notes

The project uses a shared layout pattern to reduce code duplication across similar pages. The `SubpageLayout` component encapsulates common elements like the navbar, page title, and footer, while allowing individual pages to provide their unique content.