# عبدالعزيز الأبلم للمحاماة والاستشارات القانونية
# Abdulaziz Al-Ablam Advocates & Legal Consultants

A modern, responsive legal website built with React.js, Vite, and Tailwind CSS. Features bilingual support (Arabic/English) with RTL/LTR switching and professional legal services presentation.

## 🚀 Features

- ✅ **Bilingual Support** - Arabic & English with RTL/LTR switching
- ✅ **Responsive Design** - Works perfectly on all devices
- ✅ **Modern Tech Stack** - React 19, Vite, Tailwind CSS
- ✅ **Professional UI** - Material Icons, smooth animations
- ✅ **SEO Optimized** - Ready for search engines
- ✅ **Fast Performance** - Optimized build and loading

## 🛠️ Technology Stack

- **Frontend**: React 19.2.4
- **Build Tool**: Vite 8.0.3
- **Styling**: Tailwind CSS 4.2.2
- **Icons**: Material Symbols Outlined
- **Deployment**: GitHub Pages

## 📦 Installation

```bash
npm install
```

## 🏃‍♂️ Development

```bash
npm run dev
```

## 🔨 Build for Production

```bash
npm run build
```

## 🌐 Deployment

This project is configured for automatic deployment to GitHub Pages via GitHub Actions.

### GitHub Actions Configuration

The `.github/workflows/deploy.yml` file is configured to:
- Trigger on push to `main` branch
- Build the project using Vite
- Deploy to GitHub Pages automatically

### Vite Configuration

The `vite.config.js` is configured with:
- Base path: `/Abdulaziz-Alablam-Advocates-Legal-Consultants/`
- React plugin
- Production optimizations

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── CompleteNavigation.jsx
│   ├── CompleteHero.jsx
│   ├── CompleteServices.jsx
│   ├── CompleteMethodology.jsx
│   ├── CompleteExpertise.jsx
│   ├── CompleteAbout.jsx
│   ├── CompleteContact.jsx
│   └── CompleteFooter.jsx
├── contexts/           # React contexts
│   └── CompleteLanguageContext.jsx
├── CompleteApp.jsx     # Main application component
├── App.jsx            # Root component
└── main.jsx           # Entry point
```

## 🌍 Language Support

The website supports:
- **Arabic (RTL)** - Default language
- **English (LTR)** - Secondary language

Language switching is handled via React Context with persistent storage.

## 🎨 Design System

- **Primary Color**: #FBD070 (Muted Gold)
- **Background**: #2F3E46 (Deep Slate)
- **Surface**: #37474F (Dark Gray)
- **Typography**: Noto Serif (headlines), Manrope (body)

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Local Development

For local development without Node.js issues:
1. Use `index-full.html` directly in browser
2. Or use Python server: `python -m http.server 8080`

## 📄 License

© 2024 Abdulaziz Al-Ablam Lawyers & Legal Consultants. All Rights Reserved.

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## 📞 Contact

- **Phone**: +971 4 284 5200
- **Email**: info@alablam.org
- **Location**: Deira, Port Saeed, Al Owais Building, Office 506, Dubai
