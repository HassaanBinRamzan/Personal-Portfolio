import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/3627483.jpg";
import projImg2 from "../assets/img/meme.jpg";
import projImg3 from "../assets/img/4404.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "COVID-19 Tracker",
      description: "Global and Country Statistics related to Covid-19.",
      imgUrl: projImg1,
      link: "https://covid-19-tracker-by-hbr.netlify.app/",
    },
    {
      title: "Meme Generator",
      description: "Some of the top, editable with text, meme templates.",
      imgUrl: projImg2,
      link: "https://meme-generator-by-hbr.netlify.app/",
    },
    {
      title: "React Facts",
      description: "Some facts related to the React framework.",
      imgUrl: projImg3,
      link: "https://react-facts-by-hbr.netlify.app/",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    These are some projects i have developed using the knowledge
                    i have related to React.js.
                  </p>

                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
