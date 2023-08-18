import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { ProjectCard1 } from "./ProjectCard1";
import { ProjectCard2 } from "./ProjectCard2";
import projImg1 from "../assets/img/1670299623878.jpg";
import projImg2 from "../assets/img/1670300973202.jpg";
import projImg3 from "../assets/img/1672679305531.jpg";
import projImg4 from "../assets/img/1670300973215.png";
import projImg5 from "../assets/img/1670300115607.jpg";
import projImg6 from "../assets/img/1670300973193.jpg";
import projImg7 from "../assets/img/1670300973182.jpg";
import projImg8 from "../assets/img/1672060020634.jpg";
import projImg9 from "../assets/img/comingsoon.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Events = () => {

  const projects = [
    {
      title: "Webinar",           // you can change the naming of events hover
      description: "Social Interaction",
      imgUrl: projImg1,
      link:"#",
    },
    {
      title: "Inugration",
      description: "Ignite the FEST",
      imgUrl: projImg2,
      link:"https://www.google.com/maps/place/Shree+L.+R.+Tiwari+Degree+College+of+Arts,+Commerce+%26+Science/@19.2995238,72.8752793,18.75z/data=!4m5!3m4!1s0x3be7b1a2ef7f16e7:0xea90d07ea25ca598!8m2!3d19.2999374!4d72.8758619",
    },
    {
      title: "Technical Events",
      description: "Be Creative",
      imgUrl: projImg3,
      link:"/Day1",
    },
    
  ];
  const proj = [
    {
      title: "Programer Events",           // you can change the naming of events hover
      description: "Think Bold",
      imgUrl: projImg4,
      link:"/Day2"
    },
    {
      title: "Internet Site",
      description: "Be Creative",
      imgUrl: projImg5,
      link:"/Day2"
    },
    {
      title: "Fun/Games",
      description: "Fun/Console Games",
      imgUrl: projImg6,
      link:"/Day2"
    },
  ];
  const projec = [
    {
      title: "PC Gaming",           // you can change the naming of events hover
      description: "Challenge & Brace Youself",
      imgUrl: projImg7,
      link:"/Day3"
    },
    {
      title: " Mobile V Game",
      description: "Find your true Opponent",
      imgUrl: projImg8,
      link:"/Day3"
    },
    {
      title: "Coming Soon",
      description: "See You Next Year",
      imgUrl: projImg9,
      link:"/Day3"
    },
  ];
  

  return (
    <section className="project" id="event">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__zoomIn": ""}> {/*zoomIn */}
                <h2>Events</h2>
                <p>Technova fest is an initiative by departments of BSc. (IT) & BSc.(CS) of Shree LR. Tiwari Degree College of Arts, Commerce and Science, Mira Road. Technova includes some mesmerizing events.

                  All the previous events of Technova fest was a grand success with amazing events, students experience awesomeness, joy in every moment.

                  This is a fest where you get to show off your spectacular skills in gaming, coding and

                  other fun-loving events.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Day 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Day 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Day 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          proj.map((project, index) => {
                            return (
                              <ProjectCard1
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projec.map((project, index) => {
                            return (
                              <ProjectCard2
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="images"></img>
    </section>
  )
}
