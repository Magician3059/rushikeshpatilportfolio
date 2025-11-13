import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Timeline.css";

// Logos (put these images in /public/logos or /src/assets/logos)
import cheggLogo from "../assets/logos/chegg.png";
import orbitLogo from "../assets/logos/orbit.png";
import noizeLogo from "../assets/logos/noize.png"; // optional
import textileLearnerLogo from "../assets/logos/textilelearner.png";
import dkteLogo from "../assets/logos/dkte.png";
import sunbeamLogo from "../assets/logos/sunbeam.png";

export default function Timeline() {
  const experiences = [
    {
      title: "Chegg Inc.",
      role: "Subject Matter Expert (Mathematics)",
      duration: "Mar 2023 – Sep 2025",
      description:
        "Wrote step-by-step solutions for math problems, strengthening problem-solving, explanation and debugging skills.",
      logo: cheggLogo,
      link: "https://www.chegg.com",
    },
    {
      title: "Orbit Exports Ltd",
      role: "Graduate Engineering Trainee / Finishing Supervisor",
      duration: "Jul 2023 – Jun 2024",
      description:
        "Supervised finishing operations, quality control, and production workflows in textile manufacturing.",
      logo: orbitLogo,
      link: "https://orbitexports.com/",
    },
    {
      title: "Noize Jeans",
      role: "Intern (Dhaka, Bangladesh)",
      duration: "Jan 2023 – Feb 2023",
      description:
        "R&D & process improvements (Six Sigma for zipper issues, wash effects sampling, industrial engineering tasks).",
      logo: noizeLogo,
      link: "https://noizejeans.com/",
    },
    {
      title: "Textile Learner",
      role: "Content Writer",
      duration: "May 2023 – Jul 2023",
      description: "Wrote technical articles on textile printing & dyeing techniques.",
      logo: textileLearnerLogo,
      link: "https://textilelearner.net/internship-in-textile-learner/",
    },
  ];

  const education = [
    {
      title: "SunBeam Institute of Information Technology, Pune-Karad",
      degree: "PG-DAC, Computer Science",
      duration: "Feb 2025 – Aug 2025",
      description: "Grade: A. Participated in hackathons and full-stack projects.",
      logo: sunbeamLogo,
      link: "https://www.sunbeaminfo.com/index",
    },
    {
      title: "DKTE's Textile and Engineering Institute",
      degree: "B.Tech, Textile Chemistry",
      duration: "2019 – 2023",
      description: "76.75%",
      logo: dkteLogo,
      link: "https://www.dkte.ac.in/",
    },
  ];

  return (
    <section id="timeline" className="py-5 bg-dark text-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-5 text-warning">Timeline</h2>

        {/* Experience */}
        <h3 className="text-info mb-4">Experience</h3>
        <div className="timeline">
          {experiences.map((exp, idx) => (
            <TimelineItem
              key={idx}
              data={exp}
              side={idx % 2 === 0 ? "left" : "right"}
              type="experience"
            />
          ))}
        </div>

        {/* Education */}
        <h3 className="text-success mt-5 mb-4">Education</h3>
        <div className="timeline">
          {education.map((edu, idx) => (
            <TimelineItem
              key={idx}
              data={edu}
              side={idx % 2 === 0 ? "left" : "right"}
              type="education"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// -----------------------------
// TimelineItem Component
// -----------------------------
export function TimelineItem({ data, side, type }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  React.useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0 });
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.8 }}
      className={`timeline-item ${side} ${type}`}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        marginBottom: "2.5rem",
      }}
    >
      <div
        className="timeline-content"
        style={{
          width: "100%",
          maxWidth: "500px",
        }}
      >
        <div
          className="timeline-header d-flex flex-column flex-sm-row align-items-center justify-content-center justify-content-sm-start gap-3 mb-2"
        >
          {data.logo && (
            <img
              src={data.logo}
              alt={data.title}
              className="timeline-logo"
              style={{
                width: "60px",
                height: "60px",
                objectFit: "contain",
              }}
            />
          )}
          <h4 style={{ margin: 0 }}>{data.title}</h4>
        </div>

        {data.role && <h5 className="role">{data.role}</h5>}
        {data.degree && <h5 className="degree">{data.degree}</h5>}
        <span className="timeline-duration d-block mb-2">{data.duration}</span>
        <p>{data.description}</p>

        {data.link && (
          <p className="timeline-link">
            <a
              href={data.link}
              target="_blank"
              rel="noreferrer"
              className="text-info"
            >
              {data.title === "Textile Learner"
                ? "View my work here"
                : "Visit website"}
            </a>
          </p>
        )}
      </div>
    </motion.div>
  );
}
