# Deployment Guide

This guide covers various deployment options for the portfolio website.

## 🚀 Quick Deploy Options

### 1. Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect it's a Vite project
4. Deploy with zero configuration

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# For production
vercel --prod
```

### 2. Netlify

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `dist` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

### 3. GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add deploy script to package.json:
```json
{
  "scripts": {
    "deploy": "gh-pages -d dist"
  }
}
```

3. Deploy:
```bash
npm run build
npm run deploy
```

### 4. AWS S3 + CloudFront

1. Build the project:
```bash
npm run build
```

2. Upload `dist` folder contents to S3 bucket
3. Configure CloudFront distribution
4. Set up custom domain (optional)

## 🔧 Environment Variables

Create a `.env` file for environment-specific variables:

```env
VITE_APP_TITLE=Aditya Sairam Pullabhatla - Portfolio
VITE_APP_DESCRIPTION=Software Engineer Portfolio
VITE_APP_URL=https://adityasairam.dev
```

## 📝 Pre-deployment Checklist

- [ ] Update personal information in `src/data/data.js`
- [ ] Add your actual resume PDF to `public/resume.pdf`
- [ ] Update meta tags in `index.html`
- [ ] Test the website locally with `npm run dev`
- [ ] Build and test with `npm run build && npm run preview`
- [ ] Check all links and contact information
- [ ] Verify responsive design on different devices
- [ ] Test dark/light mode toggle
- [ ] Validate contact form functionality

## 🌐 Custom Domain Setup

### For Vercel:
1. Go to your project settings
2. Add your domain in the "Domains" section
3. Update DNS records as instructed

### For Netlify:
1. Go to Site settings
2. Add your domain in "Domain management"
3. Configure DNS settings

## 📊 Performance Optimization

### Before Deployment:
1. Optimize images (use WebP format)
2. Enable gzip compression
3. Set up CDN for static assets
4. Configure caching headers

### Post-deployment:
1. Run Lighthouse audit
2. Check Core Web Vitals
3. Monitor performance with tools like GTmetrix

## 🔒 Security Considerations

- Use HTTPS (most platforms provide this automatically)
- Set up Content Security Policy (CSP) headers
- Regularly update dependencies
- Use environment variables for sensitive data

## 📱 PWA Features

The website includes PWA features:
- Service worker for offline functionality
- Web app manifest for installability
- Responsive design for mobile devices

## 🐛 Troubleshooting

### Common Issues:

1. **Build fails**: Check for TypeScript errors and missing dependencies
2. **Styling issues**: Ensure Tailwind CSS is properly configured
3. **Animations not working**: Check Framer Motion imports
4. **Contact form**: Configure EmailJS service (optional)

### Debug Commands:

```bash
# Check for linting errors
npm run lint

# Build and preview
npm run build
npm run preview

# Check bundle size
npm run build && npx vite-bundle-analyzer dist
```

## 📈 Analytics Setup

Add Google Analytics or other analytics tools:

1. Create analytics account
2. Add tracking code to `index.html`
3. Configure events for user interactions

## 🔄 Continuous Deployment

Set up automatic deployments:
1. Connect repository to deployment platform
2. Configure build settings
3. Set up branch-based deployments (main = production, dev = staging)

---

For more detailed deployment instructions, refer to the specific platform documentation.
