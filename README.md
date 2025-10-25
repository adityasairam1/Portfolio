# Aditya Sairam Pullabhatla - Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion. This website showcases my professional experience, skills, projects, and achievements as a Full-Stack Developer and AI/ML Engineer.

## 🚀 Features

- **Dynamic Hero Section**: Animated changing titles showcasing different professional roles
- **Profile Image Integration**: Personal profile photos displayed across all sections with gradient borders
- **Modern Design**: Clean, professional design with dark/light mode toggle
- **Responsive**: Mobile-first approach with responsive design
- **Interactive Animations**: Smooth animations and micro-interactions using Framer Motion
- **Performance Optimized**: Fast loading with lazy loading and optimized assets
- **SEO Friendly**: Proper meta tags and structured data
- **Accessibility**: ARIA labels and keyboard navigation support
- **Glass Morphism Effects**: Modern UI elements with backdrop blur and transparency
- **Advanced CSS**: Custom animations, gradients, and responsive utilities
- **Resume Download**: Direct PDF download functionality
- **Social Media Integration**: Working LinkedIn, GitHub, Email, and Phone links

## 🛠️ Technology Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS 3.4.0
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Notifications**: React Hot Toast
- **Email**: EmailJS (optional)
- **PostCSS**: Autoprefixer for cross-browser compatibility
- **Fonts**: Inter, Space Grotesk, JetBrains Mono

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── Resume.pdf
│   ├── Profile.JPG
│   └── site.webmanifest
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── LoadingScreen.jsx
│   ├── data/
│   │   └── data.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/adityasairam1/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```
cl
The built files will be in the `dist` directory.

## 🎨 Customization

### Updating Personal Information

All personal information is stored in `src/data/data.js`. Update the following objects:

- `personalInfo`: Basic information, contact details, summary, resume URL, and profile image path
- `experience`: Work experience and achievements (6 positions including Amazon, Robotics Technologies LLC, UMEE, Cleveland State University, Pyramid SoftSol, ECIL)
- `skills`: Technical skills with proficiency levels (Programming Languages, Systems Programming, Web Technologies, Cloud & DevOps, Databases, Tools & Frameworks)
- `projects`: Featured projects with descriptions and links (6 projects including Medline Medical Search Engine, Big Data Ecosystem, Distributed Systems)
- `education`: Academic background and achievements (Master's from Cleveland State University, Bachelor's from JNTU Hyderabad)
- `certifications`: Professional certifications (AWS, Google Cloud, Kubernetes)
- `socialLinks`: Social media and contact links (LinkedIn, GitHub, Email, Phone)
- `stats`: Key statistics displayed on hero section

### Profile Image Setup

1. Add your profile image to `public/Profile.JPG` (case-sensitive filename)
2. The image will automatically display in:
   - Hero section (large circular image)
   - About section (medium circular image)
   - Navbar (small circular image)
   - Footer (medium circular image)
   - Loading screen (small circular image)
3. All profile images have gradient borders and fallback to initials if image fails to load

### Resume Setup

1. Add your resume PDF to `public/Resume.pdf` (case-sensitive filename)
2. The download button will automatically work with the correct filename
3. Resume downloads as "Aditya_Sairam_Pullabhatla_Resume.pdf"

### Styling

The website uses Tailwind CSS with a custom color palette defined in `tailwind.config.js`. You can customize:

- Colors in the `theme.extend.colors` section (Primary, Secondary, Accent color schemes)
- Fonts in the `theme.extend.fontFamily` section (Inter, Space Grotesk, JetBrains Mono)
- Animations in the `theme.extend.animation` section
- Custom CSS classes in `src/index.css` for glass morphism effects, gradients, and advanced animations

### Dynamic Hero Section

The hero section features animated changing titles that cycle through different professional roles:
- Software Engineer
- Passionate Developer
- AI/ML Engineer
- Full-Stack Developer
- Data Engineer
- Problem Solver
- Tech Innovator
- Code Architect

Titles change every 3 seconds with smooth fade and scale animations.

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `App.jsx`
3. Add navigation link in `src/data/data.js`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌙 Dark Mode

The website includes a dark mode toggle that:
- Persists user preference in localStorage
- Respects system preference on first visit
- Smoothly transitions between themes

## ⚡ Performance

- Lazy loading for images and components
- Optimized animations with Framer Motion
- Minimal bundle size with tree shaking
- Efficient re-renders with React optimization
- GPU-accelerated animations with `transform-gpu` utility
- Optimized scrollbar with custom styling
- Responsive images and efficient asset loading

## 🔧 Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/adityasairam1/portfolio/issues).

## 🎯 Key Projects Featured

1. **Medline Medical Search Engine**: AI-powered information retrieval system with 4,500+ medical articles, TF-IDF scoring, and cosine similarity ranking
2. **Comprehensive Data Processing Ecosystem**: End-to-end big data pipeline processing 100+ GB across Hadoop, MongoDB, and SQL Server
3. **Distributed Data Store**: Fault-tolerant replication system with UDP networking and MD5 integrity verification
4. **Load-Balanced RPC System**: Dynamic job distribution with real-time CPU monitoring and adaptive scheduling
5. **Virtual Memory Manager**: OS-level memory management with LRU page replacement algorithms
6. **Custom Read-Write Lock**: User-space threading synchronization with atomic operations

## 📞 Contact

Aditya Sairam Pullabhatla
- Email: adityapsairam@gmail.com
- Phone: +1 (216) 413-2548
- LinkedIn: [adityasairam](https://www.linkedin.com/in/adityasairam/)
- GitHub: [adityasairam1](https://github.com/adityasairam1)
- Location: Detroit Metropolitan Area

## 🆕 Recent Updates

- ✅ **Profile Image Integration**: Personal photos now display across all sections with beautiful gradient borders
- ✅ **Resume Download**: Fixed resume download functionality with proper filename handling
- ✅ **Social Media Links**: All LinkedIn, GitHub, Email, and Phone links are working correctly
- ✅ **Dynamic Hero Titles**: Animated cycling titles showcasing different professional roles
- ✅ **Enhanced CSS**: Advanced glass morphism effects, gradients, and responsive utilities
- ✅ **Case Sensitivity**: Fixed file path issues for profile image and resume
- ✅ **Error Handling**: Graceful fallbacks for profile images and resume downloads

---

Made with ❤️ and lots of ☕ by Aditya Sairam Pullabhatla