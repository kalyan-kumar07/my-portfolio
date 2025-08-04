import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { ReactComponent as ApiIcon } from '../assets/api.svg';
import { ReactComponent as VScodeIcon } from '../assets/vs-code.svg';
import { ReactComponent as IntellijIcon } from '../assets/intellij-idea.svg';
import { ReactComponent as PostmanIcon } from '../assets/postman.svg';

import {
    FaJava, FaCuttlefish, FaReact, FaBootstrap, FaGitAlt, FaGithub,
    FaNodeJs, FaDatabase
} from "react-icons/fa";
import {
    SiHtml5, SiCss3, SiJavascript, SiRedux, SiFormik,
    SiSpringboot, SiPostgresql
} from "react-icons/si";

const skillSections = {
    "Programming Languages": [
        { icon: FaJava, label: "Java", color: "#f89820" },
        { icon: SiJavascript, label: "JavaScript", color: "#f7df1e" },
        { icon: FaCuttlefish, label: "C", color: "#288de0ff" },
    ],
    "UI Development": [
        { icon: SiHtml5, label: "HTML5", color: "#e34c26" },
        { icon: SiCss3, label: "CSS3", color: "#1572B6" },
        { icon: FaReact, label: "React.js", color: "#61DAFB" },
        { icon: SiRedux, label: "Redux", color: "#764abc" },
        { icon: SiFormik, label: "Formik", color: "#2196f3" },
        { icon: FaBootstrap, label: "Bootstrap", color: "#7952B3" },
    ],
    "Backend & APIs": [
        { icon: SiSpringboot, label: "Spring Boot", color: "#6DB33F" },
        { icon: FaNodeJs, label: "Node.js", color: "#339933" },
        { icon: ApiIcon, label: "REST APIs", color: "#00FFEF" },
    ],
    "Databases": [
        { icon: SiPostgresql, label: "PostgreSQL", color: "#336791" },
        { icon: FaDatabase, label: "MySQL", color: "#00758F" },
    ], 
    "Development Tools": [
        { icon: VScodeIcon, label: "VS Code", color: "#0078D7" },
        { icon: IntellijIcon, label: "IntelliJ IDEA", color: "#ccc" },
        { icon: FaGitAlt, label: "Git", color: "#F05032" },
        { icon: FaGithub, label: "GitHub", color: "#fff" },
        { icon: PostmanIcon, label: "Postman", color: "#e34c26" }
    ],
};


const csConceptsAdvanced = [
    {
        title: "Data Structures & Algorithms",
        topics: [
            "Arrays", "Linked Lists", "Stacks & Queues", "Trees",
            "Searching & Sorting", "Recursion"
        ]
    },
    {
        title: "Object-Oriented Programming (OOP)",
        topics: [
            "Abstraction", "Encapsulation", "Inheritance", "Polymorphism"
        ]
    },
    {
        title: "Database Management Systems (DBMS)",
        topics: [
            "Normalization", "ER Diagrams", "Transactions & ACID", "Joins", "Indexes"
        ]
    }
];


function Skills() {
    return (
        <section
            style={{
                background: "linear-gradient(135deg, #0a0f12, #11191d)",
                color: "#e0e0e0",
                padding: "2rem 0",
                fontFamily: "'Segoe UI', sans-serif"
            }}
        >
            <Container>
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center fw-bold mb-5"
                    style={{
                        fontSize: "3rem",
                        color: "#0dcaf0",
                        letterSpacing: "1px",
                        textShadow: "0 0 20px rgba(13, 202, 240, 0.4)"
                    }}
                >
                    Tech Stack
                </motion.h2>

                {Object.entries(skillSections).map(([section, skills], i) => (
                    <motion.div
                        key={section}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        className="mb-5 pb-3 border-bottom border-secondary"
                    >
                        <h4
                            className="mb-4"
                            style={{
                                fontWeight: "600",
                                color: "#93e2d5",
                                fontSize: "1.4rem",
                                borderLeft: "4px solid #0dcaf0",
                                paddingLeft: "1rem"
                            }}
                        >
                            {section}
                        </h4>

                        <Row className="gx-4 gy-4">
                            {skills.map((tech, idx) => {
                                const Icon = tech.icon;
                                return (
                                    <Col key={idx} xs={6} sm={4} md={3} lg={2} className="text-center">
                                        <motion.div
                                            whileHover={{ scale: 1.12 }}
                                            transition={{ duration: 0.3 }}
                                            style={{
                                                background: "#1b2225",
                                                padding: "1rem",
                                                borderRadius: "1rem",
                                                boxShadow: "0 2px 12px rgba(0,0,0,0.2)",
                                                height: "100%"
                                            }}
                                        >
                                            {
                                                Icon.render ? (
                                                    <Icon
                                                        width={42}
                                                        height={42}
                                                        style={{
                                                            fill: tech.color,
                                                            filter: `drop-shadow(0 0 5px ${tech.color}88)`
                                                        }}
                                                    />
                                                ) : (
                                                    <Icon
                                                        size={42}
                                                        color={tech.color}
                                                        style={{
                                                            filter: `drop-shadow(0 0 5px ${tech.color}88)`
                                                        }}
                                                    />
                                                )
                                            }
                                            <div className="mt-2" style={{ fontSize: "0.9rem", fontWeight: 500 }}>
                                                {tech.label}
                                            </div>
                                        </motion.div>
                                    </Col>
                                );
                            })}
                        </Row>
                    </motion.div>
                ))}

                {/* CS Fundamentals Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="pt-2"
                >

                    <Row >
                        <Col>
                            <h4
                                className="mb-4"
                                style={{
                                    fontWeight: "600",
                                    color: "#20c997",
                                    letterSpacing: "1px"
                                }}
                            >
                                Computer Science Fundamentals
                            </h4>

                            <Row className="g-4">
                                {csConceptsAdvanced.map((concept, index) => (
                                    <Col md={6} key={index}>
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.3 }}
                                            style={{
                                                background: "#1b2225",
                                                borderRadius: "1rem",
                                                padding: "1.5rem",
                                                boxShadow: "0 2px 14px rgba(0,0,0,0.25)"
                                            }}
                                        >
                                            <h5 className="mb-3" style={{ color: "#0dcaf0" }}>
                                                {concept.title}
                                            </h5>
                                            <div className="d-flex flex-wrap gap-2">
                                                {concept.topics.map((topic, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-3 py-1 rounded-pill"
                                                        style={{
                                                            backgroundColor: "#0dcaf022",
                                                            color: "#e0e0e0",
                                                            fontSize: "0.85rem",
                                                            border: "1px solid #0dcaf0"
                                                        }}
                                                    >
                                                        {topic}
                                                    </span>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row>

                </motion.div>

            </Container>
        </section>
    );
}

export default Skills;
