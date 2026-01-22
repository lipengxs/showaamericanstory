# Showa American Story - Fan Website

A modern, responsive fan website for the Showa American Story game, built with Next.js 15, TypeScript, and Tailwind CSS.

**🌐 Website**: [https://showa-american-story.com/](https://showa-american-story.com/)

**⚠️ Disclaimer**: This is a fan-created website and is not affiliated with, endorsed by, or connected to NEKCOM Games or any official Showa American Story entities. All game content, trademarks, and copyrights belong to their respective owners.

## About the Website

This fan-created website serves as a digital hub for fans and potential players to discover information about this unique post-apocalyptic action RPG. The website showcases the game's distinctive blend of Japanese and American culture in a world where Japan has economically dominated the United States.

### Website Features
- **Immersive Landing Experience**: Hero section with dynamic countdown timer to game release
- **Comprehensive Game Information**: Detailed story, features, and gameplay mechanics
- **Rich Media Gallery**: Official trailers, gameplay videos, and high-quality screenshots
- **Multi-language Support**: Full English and Japanese localization
- **SEO Optimized**: Built for maximum search engine visibility and discoverability
- **Mobile Responsive**: Perfect experience across all devices and screen sizes

### Target Audience
- Gaming enthusiasts interested in unique RPG experiences
- Fans of Japanese and American pop culture fusion
- Players looking for post-apocalyptic action games
- International audience (English and Japanese speakers)

## Features

- **Modern Design**: Clean, responsive design with dark theme optimized for gaming websites
- **Multi-language Support**: English and Japanese language support with automatic IP-based redirection
- **SEO Optimized**: Comprehensive meta tags, structured data, and performance optimizations
- **Interactive Elements**: Countdown timer, responsive navigation, and smooth animations
- **Game Information**: Complete game details, system requirements, and media gallery

## Pages

1. **Home Page** (`/`) - Landing page with hero section, game introduction, features, and FAQ
2. **News Page** (`/news`) - Latest news and announcements about the game
3. **Media Page** (`/media`) - Videos, screenshots, and downloadable wallpapers
4. **Guides Page** (`/guides`) - System requirements, platform information, and publisher details

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Components**: Custom components with Radix UI primitives
- **Images**: Next.js Image optimization

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── news/              # News page
│   ├── media/             # Media page
│   └── guides/            # Guides/Product page
├── components/            # Reusable components
│   ├── layout/           # Layout components (Header, Footer)
│   └── CountdownTimer.tsx # Countdown component
├── public/               # Static assets
│   └── images/          # Game images and assets
└── styles/              # Global styles
```

## Key Features Implemented

### SEO Optimization
- Comprehensive meta tags for all pages
- Open Graph and Twitter Card support
- Structured data markup
- Sitemap and robots.txt generation

### Performance
- Next.js Image optimization
- Font optimization with Google Fonts
- Lazy loading for images and components
- Responsive design for all devices

### Content
- Rich game information and story
- System requirements for PC
- Platform availability (Steam, PS4, PS5)
- Publisher information (NEKCOM Games)
- Media gallery with videos and screenshots

### Interactive Elements
- Countdown timer to game release
- Responsive navigation with mobile menu
- Language switcher (structure ready)
- Social media links
- External game store links

## Customization

### Colors and Theme
The website uses a dark theme with red accents matching the game's aesthetic:
- Primary: Red (#DC2626)
- Background: Black (#000000)
- Text: White and gray variations
- Accents: Red and orange gradients

### Content Updates
- Update game information in respective page components
- Add new news articles in `/app/news/page.tsx`
- Add new media in `/app/media/page.tsx`
- Update system requirements in `/app/guides/page.tsx`

## Deployment

The website is ready for deployment on platforms like:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any platform supporting Next.js

## License

This project is created for the Showa American Story game website. All game assets and content are property of NEKCOM Games.

## Contact

For questions about the game, visit the official NEKCOM Games website (https://nekcomgames.com/) or Steam page. This website is a fan-created, unofficial resource.

---

**Website**: [https://showa-american-story.com/](https://showa-american-story.com/)  
**GitHub Repository**: [https://github.com/lipengxs/showaamericanstory](https://github.com/lipengxs/showaamericanstory)  
**Game Publisher**: NEKCOM Games  
**Platforms**: PlayStation 4, PlayStation 5, PC (Steam)


