const projects = [
  {
    id: 1,
    title: "Evently — Event Management System",
    date: "Jun 2025 – Aug 2025",
    description:
      "A hybrid full-stack Event Management platform developed during PG-DAC at SunBeam. The system uses React.js and Bootstrap for the frontend, and a backend powered by Spring Boot microservices along with Node.js and Express for modular components. It combines MySQL (structured) and MongoDB (unstructured) data for flexibility.",
    highlights: [
      "Organisers can create, update, and manage events with analytics (sales, attendees, revenue).",
      "Customers can browse, filter, book tickets, and make secure payments.",
      "Implemented Spring Security for authentication and Feign clients for inter-service communication."
    ],
    tech: [
      "React.js",
      "Spring Boot",
      "Node.js",
      "Express.js",
      "MySQL",
      "MongoDB",
      "Spring Security(Using JWT)",
      "Microservices"
    ],
    github: "https://github.com/Event-Management-Project",
    live: "",
    image: "/assets/projects/evently.png"
  },
 {
  id: 2,
  title: "DocSys — Doctor–Patient Friendly Application",
  date: "Sep 2025 – Nov 2025",
  description:
    "A full-stack healthcare management system designed for doctors to maintain patient records, medical history, treatments, reports, and progress tracking. The platform features an intuitive React-based UI for doctors and a robust Spring Boot backend with secure APIs. It includes file uploads via Cloudinary, JWT authentication, and a clean dashboard experience.",
  highlights: [
    "Doctors can add, update, and manage patients along with their medical history, complaints, observations, and case records.",
    "Built extensive modules: Treatment Records, Follow-up History, Prescription Details, and Medical Reports (with file uploads).",
    "Integrated Cloudinary for secure report/file storage with preview support.",
    "Implemented JWT-based login, protected routes, and role-based access.",
    "Modern and responsive UI using React, Bootstrap 5, and dynamic components for better user experience.",
    "Backend built with layered architecture (Controller → Service → Repository) using Spring Boot + JPA/Hibernate."
  ],
  tech: [
    "React.js",
    "Bootstrap 5",
    "Spring Boot",
    "Spring Security (JWT)",
    "MySQL",
    "Hibernate/JPA",
    "Cloudinary",
    "Axios",
    "Vite"
  ],
      github:"https://github.com/DoctorPatientFriendlyApp",
      live: "https://docsysfrontend.vercel.app/",
      image: "/assets/projects/doctor-patient.png"
}
    ,
  {
    id: 3,
    title: "Weather & City Tracker",
    date: "Oct 2025",
    description:
      "A full-stack web app to check real-time weather for any city and manage a list of favorite cities. Built using React for the frontend and Node.js, Express, and MongoDB for the backend. The app consumes the OpenWeatherMap API for live weather data.",
    highlights: [
      "Users can search any city, view live weather, and save/delete favorite cities (CRUD).",
      "Frontend deployed on Vercel, backend deployed on Render.",
      "Responsive UI built with Bootstrap 5 and clean state management."
    ],
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Bootstrap",
      "OpenWeatherMap API"
    ],
    github: "https://github.com/Magician3059/MERN_City_Weather_Tracker",
    live: "https://mern-city-weather-tracker.vercel.app/",
    image: "/assets/projects/weather-tracker.png"
  },
  {
    id: 4,
    title: "React Paste App",
    date: "Apr 2025",
    description:
      "A frontend-only paste manager built with React, Vite, and Redux Toolkit. Users can create, view, update, and delete pastes, copy content to clipboard, and search by title. Deep linking implemented using React Router.",
    highlights: [
      "CRUD functionality with Redux state management.",
      "Integrated clipboard and real-time search filter.",
      "Clean and fast UI built with Vite + Bootstrap."
    ],
    tech: ["React", "Redux Toolkit", "Vite", "Bootstrap"],
    github: "https://github.com/Magician3059/ReactApplication-",
    live: "https://react-application-rho.vercel.app/",
    image: "/assets/projects/react-paste.png"
  },
  {
    id: 5,
    title: "LeetCode Problem Solving",
    date: "Ongoing",
    description:
      "Solved over 150 coding problems across Java, C++, and MySQL, focusing on advanced algorithmic concepts. Improved coding speed and logical thinking through consistent practice.",
    highlights: [
      "Covered key topics: Dynamic Programming, Backtracking, Divide & Conquer.",
      "Practiced arrays, strings, hash maps, and two-pointer patterns.",
      "Profile: Rushikesh_code987"
    ],
    tech: ["Java", "C++", "MySQL", "DSA"],
    live: "https://leetcode.com/Rushikesh_code987",
    image: "/assets/projects/leetcode.png"
  },
   {
    id: 2,
    title: "Portfolio Website",
    date: "Nov 2025",
    description:
      "Designed and developed a responsive full-stack portfolio site showcasing projects, skills, certifications, and contact features using React.js and Tailwind CSS.",
    highlights: [
      "Interactive UI with smooth transitions and modern layout",
      "Detailed project pages with tech stacks and demos",
      "Integrated contact section for collaboration opportunities",
      "Mobile-first responsive design",
      "Deployed on Vercel for optimal performance"
    ],
    tech: ["React.js", "Tailwind CSS", "Full-Stack", "Responsive Design"],
    github: "",
    live: "https://rushikeshpatilportfolio.vercel.app/",
    image: "/assets/projects/portfolio.png"
  },
];

export default projects;
