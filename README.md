# Fahad Ali | Full Stack MERN Developer

A modern, fully responsive portfolio website built with React.js, Tailwind CSS, and Framer Motion. Features a stunning Galaxy theme with smooth animations and particle effects.

## Live Demo

Visit: https://fahad-portfolio.vercel.app

## About Me

I'm Fahad Ali, a Full Stack MERN Developer from Sukkur, Sindh, Pakistan with 1.5 years of experience. I build complete web applications that help businesses grow online — from product listings and shopping carts to user dashboards and admin panels.

If you need a website where customers can browse, buy, and checkout smoothly, I can build that. If you need a custom web app to manage your business operations, I can build that too.

## Features

- Modern Galaxy theme with Dark and Light mode toggle
- Smooth animations powered by Framer Motion and GSAP
- Interactive particle background effect
- Custom cursor for desktop users
- Typewriter effect in hero section
- Fully responsive on Mobile, Tablet, Laptop and TV
- Animated loading screen
- Contact form with EmailJS integration (no backend needed)
- Scroll animations on all sections
- Fast performance with Vite

## Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- JavaScript ES6+

### Animations
- Framer Motion
- GSAP
- Three.js

### Tools and Services
- EmailJS (Contact Form)
- Git and GitHub
- Vercel (Deployment)
- VS Code

## Project Structure
portfolio/
├── public/
│ └── assets/
│ └── images/
├── src/
│ ├── components/
│ │ ├── ui/
│ │ │ ├── CustomCursor.jsx
│ │ │ ├── Loader.jsx
│ │ │ ├── Navbar.jsx
│ │ │ └── ThemeToggle.jsx
│ │ ├── sections/
│ │ │ ├── Hero.jsx
│ │ │ ├── About.jsx
│ │ │ ├── Skills.jsx
│ │ │ ├── Projects.jsx
│ │ │ └── Contact.jsx
│ │ └── layout/
│ │ └── Footer.jsx
│ ├── context/
│ │ └── ThemeContext.jsx
│ ├── data/
│ │ └── portfolioData.js
│ ├── hooks/
│ │ └── useScrollAnimation.js
│ └── styles/
│ └── globals.css
├── .env
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js

## Getting Started

### Requirements

- Node.js version 18 or higher
- npm

### Installation


# Clone the repository
git clone https://github.com/fahad-06-pro/portfolio.git

# Go to project folder
cd portfolio

# Install all dependencies
npm install --legacy-peer-deps

# Create environment file
touch .env
Environment Variables
Create a .env file in root folder and add these variables:


VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
You can get these values by creating a free account at emailjs.com

Run the Project


# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
Projects in Portfolio

Haul E-Commerce
A full stack e-commerce platform with product listings, shopping cart, user authentication, order management and admin dashboard.
Live: https://haul-ecommerce.vercel.app
GitHub: https://github.com/fahad-06-pro/haul-ecommerce
Tech: React, Node.js, Express, MongoDB, JWT, Tailwind CSS

Todo App
A full stack task management application with user authentication and complete CRUD operations.
Tech: React, Node.js, Express, MongoDB, JWT

Wanderlust
A travel and booking application where users can explore destinations and make bookings.
Tech: Node.js, Express, MongoDB, BootstrapCSS, Passport

How to Add New Projects
Open the file src/data/portfolioData.js and add a new object to the projects array:


{
  id: 4,
  title: "Your Project Name",
  description: "Short description of your project in 2 to 3 lines",
  longDescription: "Detailed description of your project",
  tech: ["React", "Node.js", "MongoDB"],
  liveLink: "https://your-live-link.com",
  githubLink: "https://github.com/fahad-06-pro/your-repo",
  category: "Full Stack",
  featured: true,
  status: "Live",
  image: "/assets/images/your-project.png",
},



Also update the stats in the same file:

export const stats = [
  { number: "4+", label: "Projects Completed" },
  { number: "1.5+", label: "Years Experience" },
  { number: "10+", label: "Technologies" },
  { number: "100%", label: "Client Satisfaction" },
]


And update the count in Hero.jsx:

{ number: '4+', label: 'Projects' },


Contact
Email: ujanfahad@gmail.com
Phone: +92 371 3608007
Location: Sukkur, Sindh, Pakistan
LinkedIn: https://www.linkedin.com/in/fahad-ali-ujjan-418986336
GitHub: https://github.com/fahad-06-pro
Instagram: https://www.instagram.com/mern_builds_with_fahad

License
This project is open source and available under the MIT License.

Made with ❤️ by Fahad Ali from Pakistan
