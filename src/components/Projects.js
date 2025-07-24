import React from "react";
import { motion } from "framer-motion";
import { FaTools, FaLaptopCode, FaUniversity, FaShoppingCart } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiRedux,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiSpringboot,
  SiPostgresql,
  SiAxios,
  SiFramer,
} from "react-icons/si";

function Projects() {
  const projects = [
    {
      title: "E-commerce Web Application",
      icon: <FaShoppingCart className="text-warning" size={24} />,
      overview:
        "A full-stack e-commerce platform with user authentication, product listing, cart management, and order processing. Built using MERN stack (MongoDB, Express, React, Node.js) and Redux for state management.",
      challenges: [
        "Handling secure user authentication and protected routes.",
        "Synchronizing cart state between client and server.",
        "Ensuring efficient database queries for product and order data.",
      ],
      solutions: [
        "Implemented JWT-based authentication and route guards.",
        "Used Redux to manage global cart state and sync with MongoDB.",
        "Optimized MongoDB queries using indexing and population.",
      ],
      techStack: [
        { name: "React", icon: <SiReact color="#61DAFB" /> },
        { name: "Redux", icon: <SiRedux color="#764abc" /> },
        { name: "Node.js", icon: <SiNodedotjs color="#43853d" /> },
        { name: "Express", icon: <SiExpress color="#000000" /> },
        { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
        { name: "Bootstrap", icon: <SiBootstrap color="#7952B3" /> },
      ],
    },
    {
      title: "Bank Management System",
      icon: <FaUniversity className="text-info" size={24} />,
      overview:
        "A secure full-stack web app for managing bank accounts, transactions, and customer data. Built using React on the frontend and Spring Boot with PostgreSQL on the backend.",
      challenges: [
        "Designing a secure and scalable backend for financial transactions.",
        "Handling complex data relationships like accounts, transactions, and customers.",
        "Implementing user roles and authentication.",
      ],
      solutions: [
        "Used Spring Security with JWT for secure login and authorization.",
        "Applied JPA and PostgreSQL for relational data and transactions.",
        "Used React with Axios for seamless API communication.",
      ],
      techStack: [
        { name: "React", icon: <SiReact color="#61DAFB" /> },
        { name: "Spring Boot", icon: <SiSpringboot color="#6DB33F" /> },
        { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
        { name: "Axios", icon: <SiAxios color="#f5c518" /> },
        { name: "Bootstrap", icon: <SiBootstrap color="#7952B3" /> },
      ],
    },
    {
      title: "Portfolio Website",
      icon: <FaLaptopCode className="text-success" size={24} />,
      overview:
        "A personal portfolio website to showcase projects, skills, and resume. Includes smooth animations, responsive design, and clear navigation.",
      challenges: [
        "Creating fluid animations without hurting performance.",
        "Maintaining mobile responsiveness across devices.",
        "Highlighting technical stack and project experience effectively.",
      ],
      solutions: [
        "Integrated Framer Motion for declarative animations.",
        "Utilized Bootstrap grid system for responsive layout.",
        "Structured content with modular components and reusable sections.",
      ],
      techStack: [
        { name: "React", icon: <SiReact color="#61DAFB" /> },
        { name: "Bootstrap", icon: <SiBootstrap color="#7952B3" /> },
        { name: "Framer Motion", icon: <SiFramer color="#f61067" /> },
        { name: "HTML5", icon: <SiHtml5 color="#e34c26" /> },
        { name: "CSS3", icon: <SiCss3 color="#264de4" /> },
      ],
    },
  ];

  return (
    <section
      className="py-5"
      style={{
        background: "linear-gradient(135deg, #0b0c0cff, #111418, #181f24)",
        color: "#eee",
      }}
    >
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center fw-bold mb-5"
          style={{
            fontSize: "2.5rem",
            color: "#0dcaf0",
            textShadow: "0 0 6px rgba(13, 202, 240, 0.4)",
            letterSpacing: "1px",
          }}
        >
          Projects
        </motion.h2>

        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="mb-5"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div
              className="p-4 rounded-4 shadow-sm"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(10px)",
              }}
            >
              <div className="d-flex align-items-center gap-2 mb-3">
                {project.icon}
                <h5 className="mb-0 text-info fw-semibold">{project.title}</h5>
              </div>

              <p className="text-light mb-3"><strong>Overview:</strong> {project.overview}</p>

              <p className="text-light mb-2 fw-semibold">Challenges:</p>
              <ul className="text-light small ps-3">
                {project.challenges.map((item, i) => (
                  <li key={i} className="mb-1">{item}</li>
                ))}
              </ul>

              <p className="text-light mb-2 fw-semibold">Solutions:</p>
              <ul className="text-light small ps-3">
                {project.solutions.map((item, i) => (
                  <li key={i} className="mb-1">{item}</li>
                ))}
              </ul>

              <div className="d-flex align-items-center gap-2 text-light mt-3 mb-2">
                <FaTools size={16} />
                <strong>Tech Used:</strong>
              </div>
              <div className="d-flex flex-wrap gap-3 ps-4 pt-1">
                {project.techStack.map((tech, i) => (
                  <div key={i} className="d-flex align-items-center gap-2">
                    {tech.icon}
                    <span style={{ fontSize: "0.9rem" }}>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
