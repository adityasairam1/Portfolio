# Portfolio Website - Technical Documentation

## Overview
This is a modern, responsive portfolio website built with React and styled using a Bento Box grid layout design system. The portfolio features a dark charcoal theme with minimal, engineered aesthetics inspired by Apple and Linear.app design principles.

## Tech Stack

### Core Framework
- **React 19.1.1** - Modern UI library for building component-based user interfaces
- **Vite 7.1.7** - Next-generation frontend build tool for fast development and optimized production builds

### Styling & Design
- **Tailwind CSS 3.4.18** - Utility-first CSS framework for rapid UI development
- **Framer Motion 12.23.24** - Production-ready motion library for React animations
- **Inter Font** - Google Fonts sans-serif typeface for clean, modern typography

### Additional Libraries
- **React Hot Toast 2.6.0** - Elegant toast notifications
- **React Icons 5.5.0** - Popular icon library (Font Awesome icons)

### Development Tools
- **ESLint 9.36.0** - JavaScript linter for code quality
- **PostCSS 8.5.6** - CSS processing tool
- **Autoprefixer 10.4.21** - Automatic vendor prefixing for CSS

## Project Structure

```
portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── About.jsx         # About section with profile info
│   │   ├── Certifications.jsx # Professional certifications
│   │   ├── Contact.jsx      # Contact form and information
│   │   ├── Education.jsx    # Educational background
│   │   ├── Experience.jsx   # Work experience timeline
│   │   ├── Footer.jsx       # Site footer
│   │   ├── Hero.jsx         # Hero/landing section
│   │   ├── LoadingScreen.jsx # Initial loading animation
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── Projects.jsx    # Project showcase grid
│   │   └── Skills.jsx       # Technical skills display
│   ├── data/
│   │   └── data.js          # Portfolio data (projects, experience, etc.)
│   ├── App.jsx              # Main application component
│   ├── main.jsx            # Application entry point
│   └── index.css            # Global styles and Tailwind imports
├── public/                  # Static assets
├── dist/                    # Production build output
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.js          # Vite build configuration
└── info.md                  # This documentation file
```

## Design System

### Color Palette
- **Background**: `#111111` (Dark charcoal)
- **Card Background**: `#1a1a1a` (Slightly lighter gray)
- **Text Primary**: `#ffffff` (White)
- **Text Secondary**: `rgba(255, 255, 255, 0.7)` (70% opacity white)
- **Text Tertiary**: `rgba(255, 255, 255, 0.6)` (60% opacity white)
- **Border**: `rgba(255, 255, 255, 0.05)` (5% opacity white)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Font Weights**: 300, 400, 500, 600, 700, 800, 900
- **Hierarchy**: Heavy typographic hierarchy with clear size distinctions

### Layout System
- **Bento Box Grid**: Responsive grid layout where each section lives in its own rounded card
- **Card Styling**: 
  - Rounded corners: `rounded-2xl` (1rem border radius)
  - Border: 1px solid with low opacity (`border-white/5`)
  - Hover effect: Subtle glow (`box-shadow: 0 0 20px rgba(255, 255, 255, 0.05)`)
  - Padding: Consistent spacing (`p-6` or `p-8`)

### Animation System
- **Entrance Animations**: Staggered fade-in and slide-up effects
- **Hover Effects**: Subtle lift (`y: -4px`) with glow enhancement
- **Stagger Delay**: 0.1s between each card animation
- **Duration**: 0.5-0.6s for smooth transitions

## Key Features

### 1. Bento Box Layout
- Each section (Projects, About, Contact, etc.) is displayed in its own card
- Responsive grid system that adapts to different screen sizes
- Cards have consistent styling and spacing

### 2. Staggered Animations
- Page load animations with staggered entrance
- Each card animates in sequence for a polished feel
- Uses Framer Motion's `variants` and `staggerChildren`

### 3. Responsive Design
- Mobile-first approach
- Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px)
- Grid layouts adapt from 1 column (mobile) to 2-3 columns (desktop)

### 4. Navigation
- Fixed navbar with smooth scroll to sections
- Mobile hamburger menu
- Resume download functionality

### 5. Interactive Elements
- Hover effects on all cards
- Form submission with toast notifications
- External links to GitHub, LinkedIn, etc.

## Component Architecture

### App.jsx
- Main application wrapper
- Manages loading screen state
- Sets up staggered animation container
- Configures toast notifications

### Hero Component
- Landing section with name, title, and summary
- Call-to-action buttons (Learn More, Resume Download)
- Social media links
- Profile image display

### Projects Component
- Category filter buttons
- Responsive grid of project cards
- Each card shows: title, description, technologies, links
- Hover reveals GitHub and demo links

### About Component
- Two-column layout (text + image)
- Personal information and summary
- Location and experience details

### Contact Component
- Split layout: contact info + contact form
- Contact information cards with icons
- Functional contact form with validation
- Social media links

### Experience Component
- Timeline-style layout
- Work history with company, position, dates
- Technology tags for each role

### Skills Component
- Categorized skill display
- Grid layout showing skill categories
- Technology tags within each category

## Build Process

### Development
```bash
npm run dev
```
- Starts Vite development server
- Hot Module Replacement (HMR) enabled
- Fast refresh for React components

### Production Build
```bash
npm run build
```
- Optimizes and bundles all assets
- Outputs to `dist/` directory
- Minifies JavaScript and CSS
- Tree-shaking for unused code

### Preview Production Build
```bash
npm run preview
```
- Serves the production build locally
- Tests optimized version before deployment

## Deployment

### Build Output
- Static files in `dist/` directory
- Can be deployed to any static hosting service:
  - Vercel
  - Netlify
  - GitHub Pages
  - Firebase Hosting
  - AWS S3 + CloudFront

### Environment
- No environment variables required
- All data is stored in `src/data/data.js`
- Resume PDF stored in `public/` directory

## Data Management

### Data Structure (`src/data/data.js`)
- **personalInfo**: Name, title, summary, contact details, profile image
- **experience**: Array of work experience objects
- **projects**: Array of project objects with details
- **skills**: Object with categorized skill arrays
- **education**: Array of education entries
- **certifications**: Array of certification objects
- **socialLinks**: Array of social media links

## Performance Optimizations

1. **Code Splitting**: Vite automatically splits code for optimal loading
2. **Image Optimization**: Profile images loaded with error handling
3. **Lazy Loading**: Components use `whileInView` for viewport-based animations
4. **Minimal CSS**: Only essential styles, no bloated CSS
5. **Tree Shaking**: Unused code eliminated in production build

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ JavaScript features
- CSS Grid and Flexbox
- CSS Custom Properties

## Customization

### Changing Colors
Edit `tailwind.config.js` to modify the color palette:
```javascript
colors: {
  charcoal: {
    DEFAULT: '#111111',
    light: '#1a1a1a',
  },
}
```

### Adding New Sections
1. Create new component in `src/components/`
2. Import and add to `App.jsx`
3. Add navigation link in `src/data/data.js` navigation array

### Modifying Animations
Edit Framer Motion variants in individual components:
```javascript
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};
```

## Dependencies Summary

### Production Dependencies
- `react` & `react-dom`: Core React library
- `framer-motion`: Animation library
- `react-hot-toast`: Toast notifications
- `react-icons`: Icon library

### Development Dependencies
- `vite`: Build tool
- `@vitejs/plugin-react`: React plugin for Vite
- `tailwindcss`: CSS framework
- `autoprefixer` & `postcss`: CSS processing
- `eslint`: Code linting

## License & Credits

- Built with React and Vite
- Styled with Tailwind CSS
- Animated with Framer Motion
- Icons from React Icons (Font Awesome)
- Font: Inter by Google Fonts

---

**Last Updated**: 2024
**Version**: 1.0.0
**Author**: Aditya Sairam

