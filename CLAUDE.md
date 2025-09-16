# Nick Agee Studio Engineer Website - Project Memory

## Project Overview
Professional studio engineer website rebuilt from Wix to modern React application. Website showcases mixing/mastering services, client testimonials, and booking integration.

## Current Status: ✅ COMPLETE & FUNCTIONAL
- Development server running at: http://localhost:3000
- All major features implemented and styled
- Real content integrated (testimonials, images, Spotify playlist)
- Responsive design complete with optimized mobile spacing
- All booking links functional
- GitHub Pages deployment fully working
- Post-production page with real video content

## Tech Stack
- **Frontend**: React 18 + Vite
- **Routing**: React Router DOM
- **Styling**: Custom CSS with CSS variables
- **Fonts**: Open Sans (body text) + Suez One (buttons) - locally hosted
- **Development**: Hot reload enabled, ESLint & Prettier configured

## Site Structure
```
/ (Landing Page)
├── Hero Section (studio image + CTA buttons)
├── Album Grid (4x5 rotating artwork with hover details)
├── Testimonials (10 client reviews in thought bubbles)
├── Music Player (embedded Spotify playlist)
└── Book Now button

/about
├── Studio image (left)
├── About text + certifications (right)

/post-production
├── Header section
├── Breakthrough For Men videos (real YouTube content)
├── Hotchi Motchi MTG podcast example
├── National Organization for Medical Intuition video (real content)
├── Nurses & The Lost Year examples

/templates/freelance-portal (Hidden Landing Page)
├── Hero Section (template image + pricing + CTA)
├── Video Tutorials (3 YouTube embeds)
├── Template Screenshots Gallery (6 images with lightbox)
├── Creator Information Section
└── Final CTA with coupon code
```

## Key External Links
- **Booking**: https://engineears.com/nickagee13
- **Instagram**: https://www.instagram.com/nickagee13/
- **Discography**: https://credits.muso.ai/profile/399ac1a7-3ea7-4533-8090-ba04d15e3f38
- **Spotify Playlist**: Embedded with playlist ID: 0SeBZbT1pjfaT1X7D10Fdx
- **Notion Template**: https://www.notion.so/templates/freelance-portal-dashboard

## Design System

### Colors
- **Background Primary**: #E1CAA8 (warm beige)
- **Background Secondary**: #D6BFA1 (slightly darker beige for sections)
- **Text Primary**: #000000 (black)
- **Text Secondary**: #666666 (gray)
- **Button Color**: #1B4B5A (dark teal)
- **Button Hover**: #2A5A6B (lighter teal)
- **Accent Color**: #8B0000 (dark red for hover effects)
- **Border Color**: #C4B394 (complementary border tone)

### Typography
- **Headers**: Open Sans (semi-bold 600 for nav, bold 700 for titles)
- **Body Text**: Open Sans (regular 400, various sizes)
- **Buttons**: Suez One (18px, uppercase, 1.5px letter-spacing, 25px border-radius)
- **Site Title**: "NICK AGEE" (32px, bold 700, 2px letter-spacing)
- **Site Subtitle**: "STUDIO ENGINEER" (16px, 3px letter-spacing, uppercase)

### Visual Effects
- **Drop Shadows**: `0 20px 40px rgba(0, 0, 0, 0.5), 0 8px 25px rgba(0, 0, 0, 0.25)`
  - Applied to: music player, all buttons, album artwork, testimonial bubbles
- **Hover Effects**: Scale transforms, opacity changes, color transitions
- **Testimonial Bubbles**: Teal background with CSS triangle tails

## Assets Location
```
src/assets/
├── GMR Mixing Full.jpeg (hero section image)
├── gmr studio.jpg (about page image)
├── notion/
│   └── freelance-portal-dashboard/
│       ├── carousel/ (6 template showcase images)
│       └── covers/ (5 feature-specific screenshots)
└── Logos/
    ├── Instagram sq.png (55x55px in header)
    └── Notion_app_logo.png

src/fonts/
├── OpenSans-*.ttf (all weights)
└── SuezOne-Regular.ttf
```

## Component Architecture
```
App.jsx (router setup)
├── Header.jsx (navigation + Instagram logo)
├── Footer.jsx (copyright)
└── Pages:
    ├── LandingPage.jsx
    │   ├── HeroSection.jsx
    │   ├── AlbumGrid.jsx (auto-rotating every 10s)
    │   ├── Testimonials.jsx (auto-rotating every 8s)
    │   └── MusicPlayer.jsx (Spotify + Book Now button)
    ├── About.jsx
    ├── AudioPostProduction.jsx
    └── FreelancePortalLanding.jsx (hidden product landing page)
```

## Responsive Breakpoints
- **Mobile**: < 768px (hamburger menu, stacked layouts, smaller album grid)
- **Tablet/Desktop**: > 768px (horizontal nav, side-by-side layouts)

## Content Status

### ✅ Real Content Integrated
- **Studio Images**: Professional photos in hero and about sections
- **Client Testimonials**: 10 authentic reviews from real clients
- **Spotify Playlist**: Embedded with actual mixed tracks
- **External Links**: All booking and social links connected
- **Album Artwork**: All 40 album covers integrated with proper ES module imports
- **Post-Production Videos**: Real YouTube content for Breakthrough For Men and NOMI sections

### 🔄 Remaining Placeholder Content
- **About Page Text**: Generic placeholder bio text
- **Remaining Video Embeds**: Hotchi Motchi MTG and Nurses & The Lost Year sections
- **Certification Logos**: Placeholder containers ready for cert images

## Navigation Behavior
- **HOME**: Returns to landing page
- **DISCOGRAPHY**: Opens Muso.ai credits in new tab
- **MIXES**: Smooth scrolls to Spotify player on landing page
- **POST-PRODUCTION**: Routes to /post-production page
- **ABOUT**: Routes to /about page
- **BOOK**: Opens engineears.com in new tab
- **Instagram Logo**: Opens Instagram profile in new tab

## Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run format` - Format with Prettier

## Recent Optimizations (December 2024)
### Mobile Spacing Improvements
- Significantly tightened mobile layout spacing across all sections
- Hero to album grid: reduced from 60px to 20px margin/padding
- Album grid: reduced from 60px to 20px padding
- Testimonials: optimized from 60px/80px to 20px/0px padding
- Music player: reduced from 80px to 20px top padding
- Fixed testimonial drop shadow clipping with proper mobile padding

### Desktop Spacing Improvements  
- Tightened desktop section spacing for better flow
- Hero section: 60px → 40px margin
- Album grid: 60px → 40px padding
- Testimonials: 60px/80px → 40px/20px padding
- Music player: 80px → 30px top padding

### Technical Fixes
- Fixed Motorhead album image filename encoding for production deployment
- Resolved GitHub Actions deployment permissions with modern Pages workflow
- Testimonial drop shadow clipping resolved with proper container padding
- Album artwork grid now displays all images correctly including album #6

### Content Updates
- Added real YouTube videos to post-production page:
  - Breakthrough For Men: 7OY1zB-cINQ, Ow_MAwSFHjk
  - Hotchi Motchi MTG: cOPI4Kjwj-k
  - National Organization for Medical Intuition: cfHayN_Cm4A
  - I Am A Nurse & The Lost Year: yOp6RQthNWg, SD4ytvMG2mg
- Video embeds sized to 70% width (85% for single videos) for optimal viewing balance

### Post-Production Page Improvements (January 2025)
- Improved typography hierarchy: separated service types from brand names
- Added italic project credits in Open Sans font (20px desktop, 18px mobile)
- Centered single videos with their text sections for better alignment
- Increased single video size to 85% for better prominence
- Enhanced header section padding for cleaner appearance (40px 60px desktop)
- Updated content: "Nurses & The Lost Year" → "I Am A Nurse & The Lost Year"

### Layout & Visual Improvements (January 2025)
- Fixed hero image positioning with object-position: center 25% to prevent head cropping
- Tightened spacing between testimonials and music player (30px → 15px top padding)
- All post-production videos now use real YouTube content (no more placeholders)

### Freelance Portal Landing Page (September 2025)
- Added hidden landing page at `/templates/freelance-portal` for Meta ads campaigns
- Implemented clean Notion-style design with professional blue CTAs (#2383e2)
- Created responsive video tutorials section with 3 YouTube embeds (320x180px)
- Integrated template screenshots gallery with lightbox functionality (6 carousel + 5 feature images)
- Added pricing section with $8 one-time pricing and 20% off coupon code (FREELANCE20)
- Implemented side-by-side coupon + CTA button layout for better conversion
- Mobile-first responsive design with proper centering and overflow prevention
- Links to Notion template marketplace: https://www.notion.so/templates/freelance-portal-dashboard

## Next Steps / Potential Improvements
1. **About Page**: Replace placeholder bio with real content
2. **Certification Display**: Add actual certification logos
3. **Performance**: Consider image optimization and lazy loading for album artwork
4. **SEO**: Add meta tags and structured data
5. **Analytics**: Integrate Google Analytics or similar
6. **Contact Form**: Consider adding functional contact form to About page

## Git Status
- All current changes committed
- Ready for deployment
- Working tree clean
- Fixed custom domain deployment configuration

## Notes
- Custom fonts load from local files (not CDN)
- All external links open in new tabs to retain visitors
- Mobile-first responsive approach implemented
- Accessibility considerations included (alt texts, semantic HTML)
- Professional drop shadow effects create visual depth throughout site