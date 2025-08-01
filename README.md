# Mobile Developer Portfolio

A modern, responsive portfolio website for mobile app developers, showcasing skills in Flutter, Kotlin, and Java.

## 🚀 Live Demo

**URL**: [Your Netlify URL here]

## ✨ Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Fast Loading**: Optimized performance with Vite and modern build tools
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Accessible**: Built with accessibility best practices
- **Easy to Customize**: Well-organized code structure for easy modifications

## 🛠️ Built With

- **React 18** - Modern React with hooks
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and development server
- **Lucide React** - Beautiful, customizable icons
- **React Router** - Client-side routing
- **Shadcn/ui** - High-quality, accessible UI components

## 📱 Sections

1. **Hero** - Introduction with name, title, and call-to-action
2. **About** - Brief professional bio and passion statement
3. **Skills** - Technical skills organized by categories
4. **Projects** - Featured mobile app projects with screenshots
5. **Contact** - Contact form and social media links

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/mobile-developer-portfolio.git
   cd mobile-developer-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

### Build for Production
```bash
npm run build
```

## 📦 Deployment

### Deploy to Netlify (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Select your repository
   - Build settings auto-detect (Build: `npm run build`, Publish: `dist`)
   - Deploy!

**See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.**

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.tsx`)
   - Change name, title, and tagline
   - Replace profile photo

2. **About Section** (`src/components/About.tsx`)
   - Update bio and description

3. **Projects Section** (`src/components/Projects.tsx`)
   - Add your projects
   - Update screenshots, descriptions, and links

4. **Contact Section** (`src/components/Contact.tsx`)
   - Update email and social media links

### Replace Assets

- **Profile Photo**: `src/assets/profile-photo.jpg`
- **Project Screenshots**: `src/assets/*.jpg`
- **Resume**: `public/resume.pdf`
- **Favicon**: `public/favicon.png`

### Color Scheme

The design system is defined in `src/index.css`. You can customize:
- Primary colors (blue theme)
- Secondary colors (teal theme)
- Accent colors
- Gradients and shadows

## 📧 Contact Form Setup

The contact form currently shows a success message. To make it functional:

1. **Netlify Forms** (Recommended for Netlify hosting)
   ```html
   <form netlify>
   ```

2. **Formspree** or other form services
   - Sign up for a form service
   - Update the form action URL

3. **Custom Backend**
   - Create an API endpoint
   - Update the `handleSubmit` function

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Lovable](https://lovable.dev) - AI-powered web development
- Icons by [Lucide](https://lucide.dev)
- Fonts by [Google Fonts](https://fonts.google.com)
- UI components by [Shadcn/ui](https://ui.shadcn.com)

## 📞 Support

For issues and questions:
- Check the [DEPLOYMENT.md](./DEPLOYMENT.md) guide
- Create an issue in this repository
- Contact: alex.johnson@email.com

---

Made with ❤️ by Alex Johnson
