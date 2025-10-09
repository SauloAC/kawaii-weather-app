# Deploying Your Weather App to Vercel

## Prerequisites

- A Vercel account (sign up at https://vercel.com)
- Your weather app code in a GitHub repository
- OpenWeather API key (from https://openweathermap.org/api)
- Google Maps API key (from https://console.cloud.google.com/)

## Deployment Steps

### Option 1: Deploy via GitHub (Recommended)

1. **Push your code to GitHub**
   \`\`\`bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   \`\`\`

2. **Connect to Vercel**

   - Go to https://vercel.com/new
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will auto-detect the configuration from `vercel.json`

3. **Set Environment Variables**
   In the Vercel project settings, add these environment variables:

   - `OPENWEATHER_API_KEY` = your OpenWeather API key
   - `GOOGLE_MAPS_API_KEY` = your Google Maps API key

4. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy your app
   - You'll get a live URL like `https://your-app.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   \`\`\`bash
   npm install -g vercel
   \`\`\`

2. **Login to Vercel**
   \`\`\`bash
   vercel login
   \`\`\`

3. **Deploy**
   \`\`\`bash
   vercel
   \`\`\`
4. **Set Environment Variables**
   \`\`\`bash
   vercel env add OPENWEATHER_API_KEY
   vercel env add GOOGLE_MAPS_API_KEY
   \`\`\`

5. **Deploy to Production**
   \`\`\`bash
   vercel --prod
   \`\`\`

## Local Development

1. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

2. **Create your local config.js**

   - Copy `src/public/js/config.example.js` to `src/public/js/config.js`
   - Add your API keys

3. **Run development server**
   \`\`\`bash
   npm run dev
   \`\`\`
   This will watch your SCSS files and compile them automatically.

4. **Open in browser**
   - Open `src/public/main.html` in your browser
   - Or use a local server like Live Server in VS Code

## Build Process

The build process does the following:

1. Compiles SCSS to CSS (compressed for production)
2. Copies HTML, JavaScript, and assets to `dist/` folder
3. Creates `config.js` from environment variables
4. Outputs a production-ready static site

## Troubleshooting

**API keys not working:**

- Make sure environment variables are set in Vercel dashboard
- Redeploy after adding environment variables

**SCSS not compiling:**

- Run `npm install` to ensure sass is installed
- Check that `src/public/sass/main.scss` exists

**Assets not loading:**

- Ensure your assets are in `src/public/assets/`
- Check that paths in your code use `./assets/` (relative paths)

## Automatic Deployments

Once connected to GitHub, Vercel will automatically:

- Deploy every push to your main branch
- Create preview deployments for pull requests
- Provide deployment URLs for each commit
