# GitHub Pages Deployment Guide

## Royalhouse Chapel Kent Mission Website

Your website is ready for GitHub Pages deployment!

## Quick Deployment Steps

### 1. Create a GitHub Repository
- Go to [GitHub](https://github.com) and create a new repository
- Name it `royalhouse-chapel-kent` (or your preferred name)
- Make it **Public** (required for free GitHub Pages hosting)

### 2. Push Your Code to GitHub
```bash
cd frontend
git init
git add .
git commit -m "Initial commit - Royalhouse Chapel Kent website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### 3. Deploy to GitHub Pages (Option A - Automatic)
```bash
yarn deploy
```
This will build and deploy your site to the `gh-pages` branch automatically.

### 3. Deploy to GitHub Pages (Option B - Manual)
1. Build the project: `yarn build`
2. The `build/` folder contains your production-ready website
3. Push the contents of `build/` to the `gh-pages` branch

### 4. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** > **Pages**
3. Under "Source", select **gh-pages** branch
4. Click **Save**

### 5. Access Your Website
Your website will be available at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

## Custom Domain (Optional)

If you have a custom domain (e.g., `royalhousechapelkent.org`):

1. Create a file named `CNAME` in the `public/` folder with your domain:
   ```
   royalhousechapelkent.org
   ```

2. Configure your domain's DNS:
   - Add a CNAME record pointing to `YOUR_USERNAME.github.io`
   - Or add A records pointing to GitHub's IP addresses:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

3. In GitHub repository Settings > Pages, add your custom domain

## Technical Notes

- **HashRouter**: The site uses HashRouter for GitHub Pages compatibility
  - URLs will look like: `https://yoursite.com/#/give`
  - This ensures proper routing without server configuration

- **Build Output**: The `build/` folder is self-contained and can be hosted anywhere

## File Structure
```
frontend/
├── public/          # Static assets
├── src/
│   ├── pages/
│   │   ├── HomeUpdated.jsx   # Main homepage
│   │   └── Give.jsx          # Bank details page
│   └── App.js        # Router configuration
├── build/           # Production build (created after yarn build)
└── package.json     # Dependencies and scripts
```

## Support

For any issues with deployment, refer to:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Create React App Deployment](https://create-react-app.dev/docs/deployment/#github-pages)
