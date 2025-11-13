import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="hero"
      className="d-flex justify-content-center align-items-center text-light position-relative overflow-hidden"
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at 20% 30%, rgba(15,20,40,0.95), rgba(5,5,20,1))",
        backgroundAttachment: "fixed",
      }}
    >
      <motion.div
        className="container d-flex align-items-center justify-content-center position-relative"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ maxWidth: "900px" }}
      >
        {/* Image on left */}
        <motion.img
          src="src/assets/profile.png"
          alt="Rushikesh Patil"
          className="me-5"
          style={{
            width: "180px",
            height: "80vh", // full height of container
            objectFit: "cover",
            objectPosition: "center",
            // borderRadius: "12px",
            // boxShadow: "0 0 25px rgba(13, 202, 240, 0.4)",
          }}
          whileHover={{ scale: 1.05, rotateY: 5 }}
          transition={{ duration: 0.4 }}
        />

        {/* Content on right */}
        <motion.div
          style={{
            maxWidth: "600px",
          }}
        >
          <h1
            className="fw-bold display-5 mb-2"
            style={{
              textShadow: "0 0 15px rgba(13,202,240,0.6)",
            }}
          >
            Hi, I'm <span className="text-info">Rushikesh Patil</span>
          </h1>

          <h4 className="fw-semibold mb-3 text-light opacity-75">
            Full-Stack Developer | Java • Spring Boot • React • Node.js
          </h4>

          <p
            className="lead mb-4 text-secondary"
            style={{
              color: "#ddd",
              textShadow: "0 0 6px rgba(255,255,255,0.1)",
            }}
          >
            I design and develop high-performance web apps that merge elegant
            UI with powerful backend architecture. Let’s build something
            extraordinary.
          </p>

          <div className="d-flex gap-3 flex-wrap">
            <a
              href="https://github.com/Magician3059"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-info btn-lg rounded-pill px-4 py-2"
              style={{
                borderWidth: "2px",
                transition: "all 0.3s ease-in-out",
              }}
            >
              <FaGithub className="me-2" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/rushikesh-patil-7a72b11b5/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-info btn-lg rounded-pill px-4 py-2"
            >
              <FaLinkedin className="me-2" /> LinkedIn
            </a>
            <a
              href="https://leetcode.com/Rushikesh_code987"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-info btn-lg rounded-pill px-4 py-2"
            >
              <FaCode className="me-2" /> LeetCode
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
