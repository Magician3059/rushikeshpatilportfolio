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
      "Spring Security",
      "Microservices"
    ],
    github: "https://github.com/your-username/Evently",
    live: "",
    image: "/assets/projects/evently.png" // ✅ updated
  },
  {
    id: 2,
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
    github: "https://github.com/your-username/weather-tracker",
    live: "https://mern-city-weather-tracker.vercel.app/",
    image: "/assets/projects/weather-tracker.png" // ✅ updated
  },
  {
    id: 3,
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
    github: "https://github.com/your-username/react-paste-app",
    live: "https://react-application-rho.vercel.app/",
    image: "/assets/projects/react-paste.png" // ✅ updated
  },
  {
    id: 4,
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
    github: "https://leetcode.com/Rushikesh_code987",
    live: "https://leetcode.com/Rushikesh_code987",
    image: "/assets/projects/leetcode.png" // ✅ updated
  }
];

export default projects;
