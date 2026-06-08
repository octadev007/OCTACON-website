# OCTACON - Professional Construction Company Website

A modern, professional website for OCTACON (Pty) Ltd built with React, TypeScript, and Tailwind CSS.

## Features

✅ **Responsive Design** - Works seamlessly on mobile, tablet, and desktop  
✅ **Modern Aesthetic** - Navy blue, steel gray, and construction orange color scheme  
✅ **Professional Components** - Reusable components for consistency  
✅ **Multi-page Navigation** - Home, About, Services, Projects, Contact pages  
✅ **Contact Form** - Functional form for inquiries  
✅ **Portfolio Showcase** - Display of completed projects  
✅ **SEO Ready** - Structured metadata and semantic HTML  

## Color Palette

- **Navy**: Trust and stability (#1a365d)
- **Steel**: Modern industrial look (#6c757d)
- **Construction Orange**: Energy and action (#f97316)

## Technology Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **React Router** - Client-side routing
- **Lucide React** - Icon library
- **Vite** - Fast build tool

## Getting Started

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/octadev007/octacon-website.git
cd octacon-website

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Navigation.tsx    # Main navigation bar
│   ├── Footer.tsx        # Footer component
│   ├── Hero.tsx          # Hero section component
│   ├── ServiceCard.tsx   # Service card component
│   └── ProjectCard.tsx   # Project showcase card
├── pages/
│   ├── Home.tsx          # Home page
│   ├── About.tsx         # About page
│   ├── Services.tsx      # Services page
│   ├── Projects.tsx      # Projects portfolio
│   └── Contact.tsx       # Contact page with form
├── App.tsx               # Main app component
├── main.tsx              # Entry point
└── index.css             # Global styles
```

## Pages

- **Home** - Hero section, stats, services overview, and CTA
- **About** - Company story, values, and team information
- **Services** - Detailed service offerings (Commercial, Infrastructure, Residential, Renovations)
- **Projects** - Portfolio of completed projects
- **Contact** - Contact form and company information

## Customization

### Update Company Information
Edit contact details in `Footer.tsx` and `Contact.tsx`:
- Phone number
- Email address
- Office location

### Add Projects
Update the projects array in `src/pages/Projects.tsx`

### Change Colors
Modify the color palette in `tailwind.config.js`

### Update Content
Edit text content in individual page components

## Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

## Performance

- Optimized images and lazy loading
- Efficient code splitting with Vite
- Tailwind CSS purging for minimal bundle size
- Fast page transitions with React Router

## SEO

- Semantic HTML structure
- Meta tags for description and keywords
- Mobile-friendly design
- Fast loading times

## License

Copyright © 2024 OCTACON (Pty) Ltd. All rights reserved.

## Contact

For inquiries about the website or development:
- Email: info@octacon.co.za
- Phone: +27 (0)12 345 6789
