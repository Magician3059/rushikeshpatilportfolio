import React from "react";
import { motion } from "framer-motion";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import "./Project.css";

function Projects() {
  return (
    <section id="projects" className="py-5" style={{ background: "#0a0a1a" }}>
      <div className="container">
        <h2 className="text-center fw-bold mb-5 text-warning display-6">
          🚀 Featured Projects
        </h2>

        <motion.div
          className="row g-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {projects.map((p) => (
            <div key={p.id} className="col-md-6 col-lg-6">
              <ProjectCard project={p} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
