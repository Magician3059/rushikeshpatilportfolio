import React from "react";
import { motion } from "framer-motion";

function ProjectCard({ project }) {
  return (
    <motion.div
      className="project-card card border-0 h-100 rounded-4 shadow-lg"
      whileHover={{ y: -10, scale: 1.03 }}
      transition={{ duration: 0.4 }}
      style={{
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      {/* Project Image */}
      <div className="position-relative overflow-hidden rounded-top-4">
        <motion.img
          src={project.image}
          alt={project.title}
          className="img-fluid"
          style={{
            height: "230px",
            width: "100%",
            objectFit: "cover",
            filter: "brightness(90%)",
            transition: "all 0.3s ease",
          }}
          whileHover={{ scale: 1.05 }}
        />
        <motion.div
          className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          style={{
            background: "rgba(0,0,0,0.5)",
            color: "#fff",
            fontSize: "1.1rem",
            letterSpacing: "1px",
          }}
        >
          {project.title}
        </motion.div>
      </div>

      {/* Card Body */}
      <div className="card-body text-light">
        <h5 className="fw-bold mb-1 text-info">{project.title}</h5>
        <p className="text-secondary small mb-2">{project.date}</p>
        <p className="mb-3 text-light" style={{ minHeight: "80px" }}>
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-3">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="badge me-2 mb-1"
              style={{
                background:
                  "linear-gradient(135deg, #007bff, #6610f2)",
                color: "#fff",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="d-flex align-items-center gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-light btn-sm"
            >
              <i className="bi bi-github me-1"></i> GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary btn-sm"
              style={{
                background:
                  "linear-gradient(135deg, #ff8c00, #ff2e63)",
                border: "none",
              }}
            >
              <i className="bi bi-box-arrow-up-right me-1"></i> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
