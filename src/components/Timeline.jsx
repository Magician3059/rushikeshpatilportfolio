import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Timeline.css";

import cheggLogo from "../assets/logos/chegg.png";
import orbitLogo from "../assets/logos/orbit.png";
import noizeLogo from "../assets/logos/noize.png";
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
      description:
        "Wrote technical articles on textile printing & dyeing techniques.",
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
    <section id="timeline" className="py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-center text-4xl font-bold mb-12 text-yellow-400">
          Timeline
        </h2>

        {/* Experience */}
        <h3 className="text-blue-400 text-2xl font-semibold mb-6">Experience</h3>
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
        <h3 className="text-green-400 text-2xl font-semibold mt-10 mb-6">
          Education
        </h3>
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
      className={`timeline-item ${side} ${type} flex flex-col items-center text-center mb-10`}
    >
      <div className="timeline-content w-full max-w-md bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-xl">

        {/* Header */}
        <div className="timeline-header flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 mb-3">
          {data.logo && (
            <img
              src={data.logo}
              alt={data.title}
              className="w-16 h-16 object-contain"
            />
          )}
          <h4 className="text-xl font-semibold">{data.title}</h4>
        </div>

        {data.role && <h5 className="text-lg text-blue-300">{data.role}</h5>}
        {data.degree && <h5 className="text-lg text-green-300">{data.degree}</h5>}

        <span className="block text-sm text-gray-300 my-2">{data.duration}</span>
        <p className="text-gray-200">{data.description}</p>

        {data.link && (
          <p className="mt-3">
            <a
              href={data.link}
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
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
