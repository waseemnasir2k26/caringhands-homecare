# CaringHands Home Care

A professional, responsive landing page for a homecare services company built with React and Tailwind CSS.

## Status

Last reviewed: October 2026 · release v2026.10


## Tech Stack

- **React 19** - Frontend framework
- **Tailwind CSS 3** - Utility-first CSS framework
- **react-scroll** - Smooth scrolling navigation
- **react-slick** - Testimonials carousel
- **react-countup** - Animated statistics counter
- **react-intersection-observer** - Scroll animations
- **react-helmet-async** - SEO management
- **react-icons** - Icon library

## Features

- Fully responsive design (mobile, tablet, desktop)
- Smooth scroll navigation
- Mobile hamburger menu with slide-in drawer
- Animated sections on scroll
- Interactive testimonials carousel
- Animated statistics counter
- FAQ accordion
- Contact form with validation
- SEO optimized with meta tags and JSON-LD structured data
- Accessible with ARIA labels and semantic HTML

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/caringhands-homecare.git
cd caringhands-homecare
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Vercel auto-detects Create React App configuration
4. Build command: `npm run build`
5. Output directory: `build`

### Other Platforms

The production build can be deployed to any static hosting service:
- Netlify
- AWS S3 + CloudFront
- GitHub Pages
- Firebase Hosting

## Project Structure

```
caringhands-homecare/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Stats.jsx
│   │   ├── Contact.jsx
│   │   ├── FAQ.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   ├── services.js
│   │   ├── testimonials.js
│   │   └── faqs.js
│   ├── hooks/
│   │   └── useScrollAnimation.js
│   ├── App.jsx
│   ├── index.js
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

## Customization

### Colors

Update the color palette in `tailwind.config.js`:

```js
colors: {
  navy: '#1B2A4A',
  teal: '#2A9D8F',
  gold: '#E9C46A',
  softWhite: '#F8F9FA',
  darkText: '#264653',
  lightText: '#6B7280',
}
```

### Content

- Services: Edit `src/data/services.js`
- Testimonials: Edit `src/data/testimonials.js`
- FAQs: Edit `src/data/faqs.js`

## License

This project is licensed under the MIT License.

## Work with SkynetLabs

Built by [Waseem Nasir](https://www.skynetjoe.com/?utm_source=github&utm_medium=readme&utm_campaign=caringhands-homecare) at SkynetLabs — n8n + AI automation for small businesses.

- Hire on Fiverr: https://www.fiverr.com/agencies/skynetjoellc
- Hire on Upwork: https://www.upwork.com/freelancers/muhammadwaseemnasir
- Book a free call: https://calendly.com/skynetlabs/schedule-a-free-consultation
