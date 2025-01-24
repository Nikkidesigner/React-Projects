import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import auth from "../../Assets/Projects/auth.png";
import resume from "../../Assets/Projects/resume.png";
import guardian from "../../Assets/Projects/guardian.png";
import skillup from "../../Assets/Projects/skillup.png";
import marksentry from "../../Assets/Projects/marksentry.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={skillup}
              isBlog={false}
              title="Skillupplacement"
              description="Skillup Placement is not just a platform but a comprehensive solution to help students advance their careers with confidence. we're centralizing everything students need in one place, from exams to study resources and placement updates."
              ghLink="https://github.com/Nikkidesigner/SkillupPlacement"
              demoLink="https://skillup-placement.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={marksentry}
              isBlog={false}
              title="Marks-Entry-App"
              description="Developed a web-based application for managing student marks entry and registration using Node.js, Express, EJS, and MySQL. The project demonstrates a full-stack development approach, combining server-side logic with client-side interactivity."
              ghLink="https://github.com/Nikkidesigner/Mega_Pro"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={guardian}
              isBlog={false}
              title="Guardian Soles"
              description="The scope of the project encompasses designing, prototyping, and testing a wearable personal safety device that integrates GPS tracking, GSM/GPRS communication, and alerting functionalities. This includes selecting appropriate hardware components, developing embedded software for real-time location tracking."
              ghLink="https://github.com/Nikkidesigner/Guardiansoles"         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={auth}
              isBlog={false}
              title="Firebase Authentication"
              description="This mini project is a Mobile Authentication System created using React, which allows users to authenticate themselves via OTP sent to their mobile number. It includes form validation, API integration for sending and verifying OTPs, and provides a secure, user-friendly interface for mobile-based login."
              ghLink="https://github.com/Nikkidesigner/React-Projects/tree/main/mobile-auth"
              demoLink="https://authproject-nine.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resume}
              isBlog={false}
              title="Dynamic Resume Builder"
              description="The Dynamic Resume Builder project is a web-based application that allows users to create professional resumes dynamically by filling out forms for sections like personal details, education, skills, and work experience."
              ghLink="https://github.com/Nikkidesigner/React-Projects/tree/main/resume-template-version2"
              demoLink="https://resume-template-version2.vercel.app/"     
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
