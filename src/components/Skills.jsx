import React from "react";
import { motion } from "framer-motion";
import skills from "../data/skills";

function Skills() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, type: "spring" },
    }),
  };

  return (
    <section
      id="skills"
      className="py-5 position-relative"
      style={{
        background:
          "radial-gradient(circle at 20% 30%, rgba(25, 25, 45, 0.9), rgba(10, 10, 20, 1))",
        color: "#fff",
      }}
    >
      {/* floating neon spheres for depth */}
      <div className="floating-sphere sphere1"></div>
      <div className="floating-sphere sphere2"></div>

      <div className="container position-relative">
        <motion.h2
          className="text-center fw-bold mb-5 text-warning"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Skills & Technologies
        </motion.h2>

        <div className="row g-4">
          {Object.entries(skills).map(([category, list], index) => (
            <motion.div
              key={category}
              className="col-md-4 col-sm-6"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={index}
              viewport={{ once: true }}
            >
              <div
                className="p-4 rounded-4 shadow-lg text-center skill-card"
                style={{
                  background:
                    "linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(12px)",
                  transition: "all 0.4s ease-in-out",
                  transformStyle: "preserve-3d",
                }}
              >
                <motion.h5
                  className="fw-bold mb-3 text-uppercase"
                  style={{
                    color: "#0dcaf0",
                    textShadow: "0 0 8px rgba(13, 202, 240, 0.7)",
                  }}
                  whileHover={{ scale: 1.05, rotateX: 5 }}
                >
                  {category}
                </motion.h5>

                <motion.div
                  className="d-flex flex-wrap justify-content-center"
                  whileHover={{ scale: 1.02 }}
                >
                  {list.map((skill, i) => (
                    <motion.span
                      key={i}
                      className="badge bg-light text-dark m-2 px-3 py-2"
                      whileHover={{
                        scale: 1.1,
                        rotateY: 10,
                        boxShadow: "0 0 10px rgba(255,255,255,0.4)",
                      }}
                      transition={{ duration: 0.3 }}
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: 500,
                        borderRadius: "25px",
                        background: "linear-gradient(145deg, #fff, #e8e8e8)",
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
