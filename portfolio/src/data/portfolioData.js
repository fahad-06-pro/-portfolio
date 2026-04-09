export const personalInfo = {
  name: "Fahad Ali",
  title: "Full Stack MERN Developer",
  subtitle: "I build complete web applications that help businesses grow online",
  location: "Sukkur, Sindh, Pakistan",
  email: "ujanfahad@gmail.com",
  phone: "+92 371 3608007",
  about: "Hi, I'm Fahad — a self-taught Full-Stack MERN Developer from Sukkur, Pakistan. I build complete web applications from the ground up — from clean REST APIs and database architecture on the backend, to responsive and user-friendly interfaces on the frontend. I care about writing code that actually works in production, not just on localhost. My stack: MongoDB, Express.js, React, Node.js, Tailwind CSS, JWT Authentication, Cloudinary, and Stripe I've built and deployed real-world projects including a full e-commerce platform with payment integration, admin dashboard, and cloud image uploads — all live and production-ready. I'm currently open to freelance projects and full-time opportunities. If you have an idea you want to build, or a problem that needs a developer who takes ownership — let's talk.",
  experience: "1.5 Years",
  availability: "Available for freelance & remote job",
}

export const socialLinks = {
  github: "https://github.com/fahad-06-pro",
  linkedin: "https://www.linkedin.com/in/fahad-ali-ujjan-418986336/",
  instagram: "https://www.instagram.com/mern_builds_with_fahad?igsh=MWVxeTZ6a2Uxcnli",
  email: "mailto:ujanfahad@gmail.com",
}

export const projects = [
  {
    id: 1,
    title: "Haul E-Commerce",
    description: "A full-stack e-commerce platform with product listings, shopping cart, user authentication, and admin dashboard. Built for seamless shopping experience.",
    longDescription: "Complete e-commerce solution with product management, cart system, user authentication, order management, and a powerful admin panel.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
    liveLink: "https://haul-ecommerce.vercel.app/",
    githubLink: "https://github.com/fahad-06-pro/haul-ecommerce",
    category: "Full Stack",
    featured: true,
    status: "Live",
    image: "/assets/images/haul.png",
  },
  {
    id: 2,
    title: "Todo App",
    description: "A full-stack task management application with user authentication, CRUD operations, and real-time updates. Clean and intuitive UI.",
    longDescription: "Complete task management app with user authentication, create/read/update/delete tasks, and persistent data storage.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "CSS3"],
    liveLink: "#",
    githubLink: "https://github.com/fahad-06-pro",
    category: "Full Stack",
    featured: true,
    status: "Live",
    image: "/assets/images/todo.png",
  },
  {
    id: 3,
    title: "Wanderlust",
    description: "A travel and booking application where users can explore destinations and make bookings. Clean UI with smooth user experience.",
    longDescription: "Travel booking platform with destination browsing, booking management, and user-friendly interface.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "https://github.com/fahad-06-pro",
    category: "Full Stack",
    featured: false,
    status: "In Progress",
    image: "/assets/images/wanderlust.png",
  },
]

export const skills = [
  {
    category: "Frontend",
    icon: "🎨",
    items: [
      { name: "React.js", level: 90 },
      { name: "JavaScript (ES6+)", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML5 & CSS3", level: 95 },
      { name: "Vite", level: 85 },
      { name: "React Router DOM", level: 88 },
      { name: "Context API", level: 82 },
    ]
  },
  {
    category: "Backend",
    icon: "⚙️",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "REST API", level: 88 },
      { name: "JWT Authentication", level: 85 },
      { name: "Bcryptjs", level: 80 },
      { name: "Nodemailer", level: 78 },
      { name: "Multer", level: 80 },
    ]
  },
  {
    category: "Database & Cloud",
    icon: "🗄️",
    items: [
      { name: "MongoDB Atlas", level: 85 },
      { name: "Cloudinary", level: 80 },
      { name: "Vercel", level: 88 },
      { name: "Render", level: 82 },
      { name: "Railway", level: 78 },
    ]
  },
  {
    category: "Tools",
    icon: "🛠️",
    items: [
      { name: "Git & GitHub", level: 88 },
      { name: "VS Code", level: 95 },
      { name: "Thunder Client", level: 85 },
      { name: "Responsive Design", level: 90 },
      { name: "Admin Panel Dev", level: 82 },
      { name: "Java (Basic)", level: 50 },
    ]
  },
]

export const services = [
  {
    icon: "🛒",
    title: "E-Commerce Development",
    description: "Full-stack e-commerce platforms with payments, cart, and admin dashboard."
  },
  {
    icon: "🔐",
    title: "Authentication Systems",
    description: "Secure login systems with JWT, bcrypt, and role-based access control."
  },
  {
    icon: "📱",
    title: "Responsive Web Apps",
    description: "Clean and fast web apps that work perfectly on all devices."
  },
  {
    icon: "⚙️",
    title: "REST API Development",
    description: "Scalable and secure REST APIs for any web application."
  },
  {
    icon: "🚀",
    title: "Deployment & DevOps",
    description: "Full deployment on Vercel, Render, Railway with MongoDB Atlas."
  },
  {
    icon: "🎛️",
    title: "Admin Panel Development",
    description: "Custom admin dashboards to manage your business operations."
  },
]

export const stats = [
  { number: "3+", label: "Projects Completed" },
  { number: "1.5+", label: "Years Experience" },
  { number: "10+", label: "Technologies" },
  { number: "100%", label: "Client Satisfaction" },
]

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]