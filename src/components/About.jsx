  import React from "react";
  import { motion } from "framer-motion";

  export default function About() {
    return (
      <section
        id="about"
        className="bg-dark text-light position-relative d-flex align-items-center"
        style={{ minHeight: "100vh", padding: "20px 0" }}
      >
        <div className="w-100 px-4 px-md-5 position-relative">

          {/* ---- TITLE ---- */}
          <h2 className="text-center fw-bold mb-5 text-warning">ABOUT ME</h2>

          {/* ---- MAIN ABOUT CARD ---- */}
          <div className="d-flex justify-content-center">
            <div
              className="position-relative"
              style={{ width: "100%", maxWidth: "1100px" }}
            >

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="glass-card p-4 p-md-5 rounded-4 shadow-lg"
                style={{
                  backdropFilter: "blur(14px)",
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  position: "relative",
                  minHeight: "420px"
                }}
              >

                {/* ---- ABOUT TEXT ---- */}
                <div className="about-text" style={{ maxWidth: "70%" }}>
                  <p className="lead mb-3">
                    Hello! I’m <strong>Rushikesh Patil</strong>, a passionate{" "}
                    <strong>Full-Stack Developer</strong> skilled in
                    <strong> Spring Boot, React, Node.js, MySQL, MongoDB</strong>,
                    building scalable and modern applications.
                  </p>

                  <p>
                    I enjoy blending design with powerful backend logic to deliver
                    smooth, user-focused digital experiences. I’ve built full-stack
                    apps, microservices, and optimized REST APIs with clean UI and
                    maintainable architecture.
                  </p>

                  <ul className="list-unstyled mt-4">
                    <li className="mb-2">
                      <strong>Email:</strong>{" "}
                      <a
                        href="mailto:rushikeshpatil23052002@gmail.com"
                        className="text-warning"
                      >
                        rushikeshpatil23052002@gmail.com
                      </a>
                    </li>

                    <li className="mb-2">
                      <strong>Phone:</strong>{" "}
                      <a href="tel:+919960553059" className="text-warning">
                        +91 9960553059
                      </a>
                    </li>

                    <li>
                      <strong>Location:</strong> Kolhapur / Ichalkaranji, Maharashtra
                    </li>
                  </ul>
                </div>

                {/* ---- PREMIUM FLOATING RESUME CARD ---- */}
                <motion.div
                  initial={{ opacity: 0, x: 40, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="resume-card glass-card p-4 rounded-4 shadow-lg text-center position-absolute"
                  style={{
                    maxWidth: "260px",
                    backdropFilter: "blur(16px)",
                    background: "rgba(255,255,255,0.12)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    boxShadow:
                      "0 10px 30px rgba(0,0,0,0.5), inset 0 0 25px rgba(255,200,50,0.1)",

                    /* DESKTOP POSITION */
                    top: "50%",
                    right: "40px",
                    transform: "translateY(-50%)"
                  }}
                >
                  <h5 className="text-warning mb-3 fw-bold">Download Resume</h5>
                  <a
                    href="/resume.pdf"
                    download
                    className="btn btn-warning fw-bold rounded-pill px-4 py-2 shadow-lg"
                    style={{ boxShadow: "0 4px 12px rgba(255,200,0,0.6)" }}
                  >
                    ⬇ Download
                  </a>
                </motion.div>

              </motion.div>

            </div>
          </div>
        </div>

        {/* ---- RESPONSIVE CSS ---- */}
        <style>
          {`
            /* MEDIUM SCREENS (TABLETS) */
            @media (max-width: 992px) {
              .about-text {
                max-width: 100% !important;
              }

              .resume-card {
                right: 10px !important;
                top: 55% !important;
              }
            }

            /* SMALL SCREENS (MOBILE) */
            @media (max-width: 768px) {
              .resume-card {
                position: relative !important;
                top: 0 !important;
                right: 0 !important;
                transform: none !important;
                margin: 25px auto 0 auto;
                width: 100%;
                max-width: 320px;
              }

              .about-text {
                max-width: 100% !important;
              }
            }
          `}
        </style>
      </section>
    );
  }
