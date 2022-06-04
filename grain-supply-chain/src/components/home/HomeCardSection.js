import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HomeCard from "./HomeCard";
import farmImg from "../../assets/home/home-farm.jpg";
import storageImg from "../../assets/home/home-storage.jpg";
import transportationImg from "../../assets/home/home-transportation.jpg";
import exportImg from "../../assets/home/home-export.jpg";

function HomeCardSection() {
  return (
    <Container fluid className="page-main-section">
      <Container>
        <h1 className="page-heading-text">
          Grain Supply <strong className="primary-dark">Chain </strong>
        </h1>
        <p style={{ color: "#6c757d" }}>
          The main research Grain Supply Chain includes.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={3} className="home-card">
            <HomeCard
              imgPath={farmImg}
              title="Farm"
              description="In Queensland, harvesting started in September and October, and in Western Australia it ended in January. Most of the harvest is carried out by professional contractors, who start harvesting in Queensland and continue to Victoria as the grain matures."
              link="/farm" />
          </Col>

          <Col md={3} className="home-card">
            <HomeCard
              imgPath={storageImg}
              title="Storage"
              description="As a relatively new on-farm grain storage option, grain bags have been widely used in Australia since the early 2000s, although they have been used overseas for much longer. They can provide useful short-term storage and are a logistics management tool during harvest."
              link="/storage" />
          </Col>

          <Col md={3} className="home-card">
            <HomeCard
              imgPath={transportationImg}
              title="Transportation"
              description="There is no single grain supply chain for Australia. Various supply chain options are available in all states, with grain being exported in bulk or containers through 25 port terminals spread around Australia’s coastline. Grain is delivered to each port via road or rail, or their combination."
              link="/transport" />
          </Col>

          <Col md={3} className="home-card">
            <HomeCard
              imgPath={exportImg}
              title="Export"
              description="Australia is an important food producer and exporter in the world. The main crops include wheat, barley, rapeseed, and sorghum. In the past ten years, Australia’s annual grain output has been around 35 to 45 million tons, of which 11 million tons are used for domestic consumption and the rest is used for exports. Most of the domestic consumption is concentrated in East Australia, mainly because East Australia is a densely populated area in Australia."
              link="/export" />
          </Col>

          <Col md={3} className="home-card">
            <HomeCard
              imgPath={farmImg}
              title="Harvest"
              description="Grain harvesting is an extraordinary process, with many steps. As this takes on process during September to December"
              link="/harvest" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default HomeCardSection;
