import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Surya Undapalli </span>
            from <span className="purple"> Bhimavaram, India.</span>
            <br />I am a senior pursuing B.Tech in Information Technology From
            VIT Bhimavaram.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Sleeping
            </li>
            <li className="about-activity">
              <ImPointRight /> Wacthing Anime
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Surya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
