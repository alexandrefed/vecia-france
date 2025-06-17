# Vecia France - Claude Code Context & Development Guide

## Project Overview
Vecia France is the French regional website for an AI automation agency specializing in agentic workflows for modern businesses. This is a French-only static website built with Astro, Tailwind CSS, and deployed on Vercel.

## 🏗️ Architecture
- **Framework**: Astro 4.x (Static Site Generator)
- **Styling**: Tailwind CSS with custom design system
- **Deployment**: Vercel (static hosting)
- **Language**: French only (fr-FR)
- **Content**: File-based components

## 🎨 Design System
- Primary: #5B8BFF (Mid blue)
- Secondary: #9B59F6 (Purple)
- Accent: #3BB4FF (Light blue)
- Gradient: linear-gradient(135deg, #9B59F6, #3BB4FF)
- Typography: Inter for body, Space Grotesk for headings

## 📁 Project Structure
```
vecia-france/
├── src/
│   ├── components/     # Reusable components
│   ├── layouts/        # Page layouts
│   ├── pages/          # Route pages
│   ├── lib/           # Utilities and translations
│   └── assets/        # Images and static assets
├── public/            # Static files (fonts, favicons)
├── astro.config.mjs   # Astro configuration
├── tailwind.config.mjs # Tailwind configuration
└── package.json       # Dependencies
```

## 🚀 Development Workflow

### 1. Before Starting Development
```bash
# Always pull latest changes
git pull origin main

# Install dependencies if package.json changed
npm install

# Start development server
npm run dev
```

### 2. Safe Modification Practices

#### Component Modifications
1. **Never modify directly in production**
   - Always work in development mode first
   - Test component in isolation
   - Check responsive design

2. **Component Checklist**
   ```
   ✓ Does it render correctly?
   ✓ Are all props passed correctly?
   ✓ Is it responsive (mobile/tablet/desktop)?
   ✓ Does it follow the design system?
   ✓ Are translations working?
   ```

#### Content Updates
1. **Text Changes**
   - Update in `src/lib/i18n/translations/fr.ts`
   - Never hardcode text in components
   - Keep consistent tone and terminology

2. **Image Updates**
   - Optimize images before adding (WebP preferred)
   - Use Astro's Image component for optimization
   - Update alt text in French

### 3. Testing Procedures

#### Local Testing
```bash
# 1. Run development server
npm run dev

# 2. Build locally to catch errors
npm run build

# 3. Preview production build
npm run preview

# 4. Check for TypeScript errors
npx astro check

# 5. Lint code (optional)
npm run lint
```

#### Browser Testing
- ✓ Chrome (latest)
- ✓ Firefox (latest)
- ✓ Safari (latest)
- ✓ Mobile responsive

### 4. Common Modifications

#### Update Pricing
```typescript
// src/lib/i18n/translations/fr.ts
pricing: {
  starter: {
    price: "8 500€",  // Update here
    monthly: "1 000€/mois"
  }
}
```

#### Add New Page
1. Create file in `src/pages/`
2. Import BaseLayout
3. Add to navigation in translations
4. Test routing

#### Update Navigation
```typescript
// src/lib/i18n/translations/fr.ts
nav: {
  newItem: "Nouveau"  // Add here
}
// Update Header.astro to include new item
```

### 5. Git Workflow

#### Feature Branch Strategy
```bash
# Create feature branch
git checkout -b feature/update-pricing

# Make changes
# Test thoroughly

# Commit with clear message
git add .
git commit -m "Update pricing for Q3 2025"

# Push to GitHub
git push origin feature/update-pricing

# Create Pull Request on GitHub
```

#### Direct Main Branch (Small Changes)
```bash
# For typos, small text updates
git add .
git commit -m "Fix: Correct typo in hero section"
git push origin main
```

### 6. Deployment Process

#### Automatic Deployment
- Every push to `main` triggers deployment
- Vercel builds and deploys automatically
- Check Vercel dashboard for status

#### Manual Deployment
```bash
# If needed, deploy manually
npx vercel --prod
```

### 7. Troubleshooting

#### Build Errors
1. **Dependency Issues**
   ```bash
   rm -rf node_modules
   npm install
   ```

2. **TypeScript Errors**
   ```bash
   npx astro check
   # Fix any type errors shown
   ```

3. **CSS Issues**
   - Check Tailwind classes exist
   - Verify custom CSS in globals.css

#### Deployment Errors
1. Check Vercel logs
2. Ensure all dependencies in package.json
3. Verify environment variables (if any)

### 8. Performance Optimization

#### Before Deploy Checklist
- [ ] Images optimized (WebP format)
- [ ] No console.log statements
- [ ] CSS purged (Tailwind does automatically)
- [ ] Build size reasonable (<5MB)
- [ ] Lighthouse score >90

### 9. Emergency Rollback

```bash
# Find previous working commit
git log --oneline

# Revert to previous commit
git revert HEAD
git push origin main

# Or reset (careful!)
git reset --hard [commit-hash]
git push --force origin main
```

## 🚨 Critical Rules

### DO NOT:
- ❌ Edit files directly on Vercel
- ❌ Use `npm audit fix --force`
- ❌ Update major versions without testing
- ❌ Hardcode text (use translations)
- ❌ Commit sensitive data
- ❌ Deploy without testing build

### ALWAYS:
- ✅ Test locally first
- ✅ Build before committing
- ✅ Write clear commit messages
- ✅ Check responsive design
- ✅ Verify French text accuracy
- ✅ Monitor Vercel deployment

## 📊 Monitoring

### Check Site Health
1. **Vercel Dashboard**: Check build status
2. **Google Lighthouse**: Run performance audit
3. **Browser Console**: Check for errors
4. **Mobile Test**: Verify responsive design

### Analytics (If Configured)
- Check Google Analytics
- Monitor page load times
- Track user engagement

## 🔧 Maintenance

### Weekly Tasks
- Check for dependency updates
- Review Vercel analytics
- Test forms (if any)
- Verify all links work

### Monthly Tasks
- Update dependencies (minor versions)
- Review and optimize images
- Check SEO meta tags
- Audit accessibility

## 📞 Support

### Common Issues & Solutions

**Site not updating after push?**
- Check Vercel dashboard
- Clear browser cache
- Wait 2-3 minutes for propagation

**Build failing on Vercel?**
- Check package.json dependencies
- Verify Node version compatibility
- Review Vercel build logs

**Style not applying?**
- Restart dev server
- Check Tailwind class names
- Verify CSS imports

## 🎯 Quick Commands Reference

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npx astro check      # TypeScript check
npm run lint         # ESLint check
npm run format       # Prettier format

# Deployment
git push origin main # Auto-deploy to Vercel
npx vercel --prod    # Manual deploy
```

---

**Last Updated**: June 2025
**Astro Version**: 4.11.5
**Node Version**: 20.x
**Deployment**: Vercel Static