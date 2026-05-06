# HomeNet - WiFi Service Management Web App

A modern, responsive web application for managing WiFi services in a community. HomeNet enables users to check internet connectivity, monitor data usage, and manage their WiFi subscriptions with an intuitive user interface.

**Live Demo:** [https://home-net-5jg7.vercel.app/](https://home-net-5jg7.vercel.app/)

## About The Project

HomeNet is a WiFi providing web application designed for communities where a WiFi company supplies internet to residents. It provides a seamless interface for users to:

- View real-time internet connection status
- Monitor data usage and speeds
- Manage subscription plans
- Track billing information
- Access customer support features

## Built With

### Frontend Framework & Build Tools
- **React 19.2** - Modern React with latest features
- **Vite 8.0** - Lightning-fast build tool with HMR (Hot Module Replacement)
- **JavaScript (ES Modules)** - Modern JavaScript with module support

### Styling & UI Components
- **Tailwind CSS 4.2** - Utility-first CSS framework for responsive design
- **Tailwind Vite Plugin** - Optimized Tailwind CSS integration

### UI Libraries & Components
- **Lucide React** - Beautiful, consistent icon library
- **React Icons** - Additional icon sets for diverse designs
- **Motion** - Smooth animations and transitions
- **React Hot Toast** - Non-intrusive toast notifications
- **React Toastify** - Rich notification system

### Advanced UI Features
- **React Circular Progressbar** - Visual progress indicators for data usage
- **React Responsive Carousel** - Image carousels and sliders
- **Swiper** - Modern touch slider library
- **React Spinners** - Loading spinners and animations
- **React Loader Spinner** - Advanced loading indicators
- **React Intersection Observer** - Lazy loading and scroll animations

### Utilities
- **React Router DOM 7.13** - Client-side routing for multi-page navigation
- **React CountUp** - Number animation effects for stats
- **React Circular Progressbar** - Animated progress bars

## Project Structure

```
HomeNet/
├── README.md              # This file
├── package.json           # Project dependencies
├── vite.config.js         # Vite configuration
├── eslint.config.js       # ESLint rules for code quality
├── index.html             # Main HTML entry point
├── src/
│   ├── App.jsx            # Root component
│   ├── main.jsx           # React entry point
│   ├── index.css          # Global styles
│   ├── components/        # Reusable React components
│   ├── pages/             # Page components for routing
│   └── assets/            # Images, fonts, and static files
├── public/                # Static files served as-is
└── dist/                  # Production build output
```

## Getting Started

### Prerequisites
- **Node.js** (v18+ recommended)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/wainaina-mwangi/HomeNet.git
   cd HomeNet
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

## Available Scripts

- **`npm run dev`** - Start the development server with HMR
- **`npm run build`** - Create an optimized production build
- **`npm run preview`** - Preview the production build locally
- **`npm run lint`** - Run ESLint to check code quality

## Development Features

### Hot Module Replacement (HMR)
Changes to your code are instantly reflected in the browser without full page reload.

### ESLint Configuration
The project includes ESLint rules to maintain code quality and consistency. Run `npm run lint` to check for issues.

### TypeScript Ready
The project supports TypeScript types for React and React DOM. For full TypeScript support, see the [Vite TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite).

## Deployment

The application is deployed on **Vercel** for automatic deployments from the main branch.

To deploy your own instance:
1. Push to your repository
2. Connect to Vercel via GitHub
3. Vercel will automatically build and deploy

## Key Features

✨ **Real-time Dashboard** - Monitor internet status and data usage  
⚡ **Fast Load Times** - Optimized with Vite and Tailwind CSS  
📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile  
🎨 **Modern UI** - Beautiful animations and transitions  
🔔 **Notifications** - Toast notifications for user feedback  
📊 **Data Visualization** - Progress bars and stats display  

## Performance Optimization

- **Lazy Loading** - Components and images load on-demand
- **Code Splitting** - Automatic chunking for optimal performance
- **CSS Optimization** - Tailwind's PurgeCSS removes unused styles
- **Image Optimization** - Efficient asset serving

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Author

**Wainaina Mwangi**
- GitHub: [@wainaina-mwangi](https://github.com/wainaina-mwangi)

## Support

For issues, questions, or suggestions, please open an issue on the [GitHub repository](https://github.com/wainaina-mwangi/HomeNet/issues).

---

**Last Updated:** May 2026  
**Status:** Active Development
