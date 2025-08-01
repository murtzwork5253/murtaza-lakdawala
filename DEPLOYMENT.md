# Deployment Guide - Mobile Developer Portfolio

This guide will help you deploy your portfolio website to Netlify.

## Quick Deploy to Netlify

### Option 1: Deploy from GitHub (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Mobile Developer Portfolio"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com) and sign up/log in
   - Click "New site from Git"
   - Choose GitHub and authorize Netlify
   - Select your repository
   - Build settings should auto-detect:
     - **Build command**: `npm run build`
     - **Publish directory**: `dist`
   - Click "Deploy site"

### Option 2: Manual Deploy

1. **Build the project locally**
   ```bash
   npm install
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder to the deploy area
   - Your site will be live instantly!

## Configuration Files

The project includes:
- `netlify.toml` - Netlify configuration for optimal deployment
- Proper redirects for single-page application
- Asset optimization settings
- Cache headers for performance

## Environment Setup

### Prerequisites
- Node.js 18+ and npm
- Git (for version control)
- GitHub account (for automated deployments)

### Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Customization Before Deploy

### 1. Update Personal Information
Replace placeholder data in:
- `src/components/Hero.tsx` - Name, title, tagline
- `src/components/About.tsx` - Bio and description
- `src/components/Projects.tsx` - Project details and links
- `src/components/Contact.tsx` - Email and LinkedIn URLs

### 2. Replace Images
- Profile photo: `src/assets/profile-photo.jpg`
- Project screenshots: `src/assets/expense-tracker.jpg`, etc.
- Add your resume: `public/resume.pdf`

### 3. Update Meta Tags
In `index.html`, update:
- Site title and description
- Open Graph URLs
- Favicon references

### 4. Configure Contact Form
The contact form currently shows a success toast. To make it functional:
- Add a form handling service (Netlify Forms, Formspree, etc.)
- Update the `handleSubmit` function in `Contact.tsx`

## Post-Deployment

### Custom Domain (Optional)
1. In Netlify dashboard, go to Site settings > Domain management
2. Add your custom domain
3. Configure DNS settings as instructed

### Analytics (Optional)
Add Google Analytics or other tracking:
1. Get your tracking ID
2. Add the script to `index.html`
3. Implement tracking in components

### Performance Optimization
The site is already optimized with:
- Image optimization
- CSS/JS minification
- Gzip compression
- Proper caching headers

## Troubleshooting

### Build Errors
- Ensure all dependencies are in `package.json`
- Check for TypeScript errors: `npm run type-check`
- Verify all imports are correct

### 404 Errors
- The `netlify.toml` file handles SPA redirects
- Ensure the file is in the project root

### Slow Loading
- Images are optimized but can be further compressed
- Consider using WebP format for better compression
- Enable Netlify's image optimization features

## License

This project is open source under the MIT License. See `LICENSE` file for details.

## Support

For issues with the portfolio template:
- Check the documentation
- Review the component code
- Create an issue in the repository

For Netlify-specific issues:
- Check [Netlify documentation](https://docs.netlify.com)
- Visit [Netlify community](https://community.netlify.com)