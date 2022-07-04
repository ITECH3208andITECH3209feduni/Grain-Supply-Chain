import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../assets/home/home-grain-main.svg";
import Type from "./Type";
import HomeCardSection from "./HomeCardSection";
import './HomeStyle.css';

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 12 }} className="heading">In {<strong className="main-name"> Australia</strong>}</h1>
              <h1 className="heading-name">Grain Supply Chain</h1>
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid" style={{ maxHeight: "450px" }} />
            </Col>
          </Row>
        </Container>
      </Container>
      <HomeCardSection />
    </section>
  );
}

export default Home;