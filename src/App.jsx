// 🧩 External Libraries
import React from "react";
import { motion } from "framer-motion";

// 🎨 Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// 🧱 Components
import Background3D from "./components/Background3D";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// 🚀 App Component
function App() {
  return (
    <>
      {/* 🌌 3D Animated Background */}
      <Background3D />

      {/* 🧭 Navigation */}
      <Navbar />

      {/* 🦸‍♂️ Hero Section */}
      <Hero />

      {/* 👤 About Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <About />
      </motion.div>

      {/* 💡 Skills Section */}
      <motion.div
        initial={{ opacity: 0, rotateX: 10 }}
        whileInView={{ opacity: 1, rotateX: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Skills />
      </motion.div>

      {/* 🎓 Education & Experience Section */}
      <motion.div
        initial={{ opacity: 0, rotateX: 10 }}
        whileInView={{ opacity: 1, rotateX: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Timeline />
      </motion.div>

      {/* 🧩 Projects Section */}
      <motion.div
        initial={{ opacity: 0, rotateY: -10 }}
        whileInView={{ opacity: 1, rotateY: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Projects />
      </motion.div>

      {/* 📞 Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Contact />
      </motion.div>

      {/* ⚓ Footer */}
      <Footer />
    </>
  );
}

export default App;
