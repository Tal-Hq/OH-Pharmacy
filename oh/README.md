# OH Health+ Pharmacy Website

A modern, ultra-sleek pharmacy website built with Next.js, TypeScript, and Tailwind CSS. This static site showcases all pharmacy services and enables online booking.

## Features

- **Ultra-modern UI** with glassmorphism effects and smooth animations
- **Fully responsive** design optimized for all devices
- **30+ service pages** covering all pharmacy services
- **Service filtering and search** functionality
- **Online booking integration** with external booking platforms
- **Component-based architecture** for easy maintenance
- **Static site generation** for fast loading and easy deployment

## Tech Stack

- **Next.js 16** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **React Icons** for icons
- **Static Site Generation (SSG)** for optimal performance

## Project Structure

```
oh/
├── app/                    # Next.js pages (App Router)
│   ├── page.tsx           # Homepage
│   ├── book-services/     # Booking page
│   ├── Services/          # General services pages
│   ├── Travel-Clinic/     # Travel clinic pages
│   └── Vaccines/          # Vaccine pages
├── components/            # React components
│   ├── layout/           # Header, Footer, Navigation
│   ├── services/         # Service-related components
│   └── ui/               # Reusable UI components
├── lib/                  # Utilities and data
│   ├── services.ts       # Service data
│   └── utils.ts          # Utility functions
└── public/               # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd oh
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

To create a static export:

```bash
npm run build
```

The static files will be generated in the `out/` directory, ready for deployment to any static hosting service.

To preview the production build locally:

```bash
npm run start
```

This will serve the static files from the `out/` directory using a local server.

## Services Included

### General Services
- Vitamin B12 Injections
- Earwax Removal
- Minor Ailment Clinic
- Private Prescriptions
- Morning-After Pill
- Erectile Dysfunction Treatment
- Hair Loss Treatment
- Eye Care

### Travel & Vaccination
- Travel Clinic
- Travel Vaccination
- Antimalarials
- Special Vaccination
- Private COVID Vaccination
- Hajj and Umrah Vaccination

### Vaccines (14 types)
- Cholera, Dengue, DTP, Hepatitis A/B, HPV, Japanese Encephalitis, Meningitis ACWY/B, Rabies, Shingles, Tick-Borne Encephalitis, Typhoid

### Weight Loss
- Injectable Weight Loss Programme

## Design System

- **Colors**: Medical blue (#0066CC), teal accents (#00CCCC), clean whites
- **Typography**: Inter (body), Poppins (headings)
- **Spacing**: 8px base unit
- **Components**: Glassmorphic cards, gradient buttons, smooth animations

## Deployment

The site can be deployed to any static hosting service:
- Vercel (recommended for Next.js)
- Netlify
- GitHub Pages
- Any static file server

Simply run `npm run build` and deploy the `out/` directory.

## License

This project is proprietary and confidential.
