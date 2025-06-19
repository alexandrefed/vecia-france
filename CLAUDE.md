# Vecia France - Claude Code Context & Development Guide

⚠️ **CRITICAL**: Always reference this CLAUDE.md file when working on this project. It contains essential information about blog styling issues and solutions.

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

### ⚠️ CRITICAL: Blog Post Styling Issue & Solution

**THE PROBLEM**: 
- Global CSS (`/src/styles/global.css`) sets MASSIVE default heading sizes (h1: 5xl-8xl, h2: 4xl-6xl, h3: 2xl-4xl)
- This makes blog posts look TERRIBLE with headings 5x larger than body text
- The global styles are designed for landing pages, NOT blog content

**THE SOLUTION**:
- Blog posts MUST use custom style overrides in `/src/pages/blog/[slug].astro`
- A `<style is:global>` block forces proper heading sizes with `!important`
- See "Blog Posts Management" section for exact font sizes to use

**IF YOU LOSE CONTEXT**: Check this file first before modifying blog styling!

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

#### Blog Posts Management

##### 🎨 Blog Post Styling Issues & Solutions

**CRITICAL CONTEXT FOR FUTURE DEVELOPERS**:
If you're reading this with no prior context, here's what you need to know:
1. Blog posts will look TERRIBLE without custom styling overrides
2. The fix is already implemented in `/src/pages/blog/[slug].astro`
3. DO NOT remove the `<style is:global>` section or the `!important` declarations

**The Problem & Solution**:

1. **Problem**: Blog headings appear MASSIVE (5x bigger than body text)
   - **Root Cause**: `/src/styles/global.css` has huge heading sizes for landing pages
   - **Visual Impact**: Makes blog posts look unprofessional and unreadable

2. **Current Blog Styling Fix** (DO NOT REMOVE):
   ```css
   /* In /src/pages/blog/[slug].astro */
   
   /* These overrides MUST stay to keep blog posts readable */
   <style is:global>
     article .article-content h1 { font-size: 1.5rem !important; }
     article .article-content h2 { font-size: 1.375rem !important; }
     article .article-content h3 { font-size: 1.25rem !important; }
     article .article-content h4 { font-size: 1.125rem !important; }
   </style>
   
   /* Main title uses inline style */
   <h1 style="font-size: 1.75rem !important;">
   
   /* Body text */
   p: 1.125rem (18px) with text-align: justify
   ```

3. **June 2025 Best Practices** (Based on Astro 5):
   - Consider using `@tailwindcss/typography` plugin with `prose` class
   - Astro 5 content collections are 5x faster for Markdown
   - Use scoped styles when possible, global only when necessary
   - Test with Playwright to verify visual appearance

##### 📝 Adding New Blog Posts

1. **Create new markdown file** in `/src/content/blog/`
   ```markdown
   ---
   title: "Your Title"
   description: "Description"
   publishDate: 2025-01-20
   author: "Équipe Vecia"
   image: "/images/blog/your-image.jpg"
   tags: ["tag1", "tag2"]
   linkedin:
     title: "LinkedIn Title"
     content: |
       LinkedIn post content
     hashtags: ["hashtag1", "hashtag2"]
   seo:
     title: "SEO Title | Vecia"
     description: "SEO Description"
     keywords: ["keyword1", "keyword2"]
   ---

   Your markdown content here...
   ```

2. **Content Structure**:
   - Use `##` for main sections (renders as 22px)
   - Use `###` for subsections (renders as 20px)
   - Use `####` for sub-subsections (renders as 18px)
   - Regular paragraphs automatically justified

3. **Images**:
   - Place images in `/public/images/blog/`
   - Reference as `/images/blog/filename.jpg`

##### 🔧 Troubleshooting Blog Styling

**VERIFICATION CHECKLIST** (Run these checks EVERY time):

1. **Visual Check with Playwright**:
   ```bash
   npm run dev
   # Open browser to http://localhost:4321/blog/[slug]
   # Take screenshot - headings should be ONLY SLIGHTLY larger than body text
   # If headings are HUGE, the fix isn't working
   ```

2. **Check with Browser DevTools**:
   - Right-click on any h2 heading
   - Inspect → Check computed font-size
   - Should show: 22px (1.375rem) NOT 48px or larger
   - If larger, check if `!important` is missing

3. **Common Issues & Fixes**:
   
   **Issue**: "Headings are still massive!"
   - Check: Is `<style is:global>` present in blog template?
   - Check: Are `!important` declarations there?
   - Fix: The global styles might have changed - add more specific selectors
   
   **Issue**: "Text not justified"
   - Check: Is `text-align: justify` in paragraph styles?
   - Fix: Add to `.article-content p` styles

4. **Emergency Fix** (if all else fails):
   ```astro
   <!-- Add this to blog post template -->
   <style>
     /* Nuclear option - inline styles in content div */
     .article-content :where(h1, h2, h3, h4, h5, h6) {
       font-size: revert !important;
       line-height: 1.4 !important;
     }
   </style>
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
- ✅ **USE PLAYWRIGHT TO VERIFY VISUAL CHANGES** - Take screenshots before/after modifications
- ✅ **CHECK BLOG POST STYLING** - Ensure headings are proportional to body text (not 5x larger)

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
**Astro Version**: 4.16.18
**Node Version**: 20.x
**Deployment**: Vercel Static

---

## 🚨 QUICK REFERENCE - Blog Styling Fix

**If blog posts have MASSIVE headings**, the fix is in `/src/pages/blog/[slug].astro`:
```css
<style is:global>
  article .article-content h2 { font-size: 1.375rem !important; }
  /* DO NOT REMOVE THESE OVERRIDES */
</style>
```

**Expected sizes**: H2=22px, H3=20px, H4=18px (NOT 48px+)

**Always verify with screenshots before/after changes!**