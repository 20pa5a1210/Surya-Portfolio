import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={bitsOfCode}
              isBlog={false}
              title="Online Examination System"
              description="An online examination system is a web-based software application that enables educational institutions to conduct exams and assessments over the internet. This system provides a secure and efficient way for students to take tests remotely, while also providing instructors with tools to create and administer exams, grade them, and analyze results."
              ghLink="https://github.com/20pa5a1210/Online-Exam-Final-Project-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Contact App using React"
              description="This was a project built during 3rd year of Engineering college as a personal project. The Project goal was to use ReactJs technology to create a react app to store a contact details in a Realtime Database"
              ghLink="https://github.com/20pa5a1210/ContactApp-React-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Todo List Project"
              description="To-Do List project is an application specially built to keep track of errands or tasks that need to be done. This application will be like a task keeper where the user would be able to enter the tasks that they need to do. Once they are done with their tasks they can also remove them from the list."
              ghLink="https://github.com/20pa5a1210/Todo-React-Project"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
