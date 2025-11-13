import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-5 bg-dark text-light position-relative">
      <div className="container">
        <h2 className="text-center fw-bold mb-5 text-warning">About Me</h2>

        <div className="row align-items-center">
          {/* Text Description */}
          <div className="col-md-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="glass-card p-4 rounded-4 shadow-lg"
            >
              <p className="lead mb-3">
                Hello! I’m <strong>Rushikesh Patil</strong>, a passionate{" "}
                <strong>Full-Stack Developer</strong> specializing in{" "}
                <strong>Spring Boot, React, Node.js, MySQL, MongoDB</strong> and
                building performant, scalable applications.
              </p>
              <p>
                I love combining design and technology to craft modern, dynamic,
                and user-focused digital experiences. I’ve worked on full-stack
                apps, microservices, and RESTful APIs — always striving for
                pixel-perfect UI and efficient backend performance.
              </p>

              <ul className="list-unstyled mt-4">
                <li>Email: <a href="mailto:rushikeshpatil23052002@gmail.com" className="text-warning">rushikeshpatil23052002@gmail.com</a></li>
                <li>Phone: <a href="tel:+919960553059" className="text-warning">+91 9960553059</a></li>
                <li>Location: Kolhapur / Ichalkaranji, Maharashtra</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
