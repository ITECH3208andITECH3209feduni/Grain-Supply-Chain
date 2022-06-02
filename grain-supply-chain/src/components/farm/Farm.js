import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import FarmInnerCard from "./FarmInnerCard";
import './FarmStyle.css';

function Farm() {
    return (
        <Container fluid className="page-main-section">
            <Container>
                <h1 className="page-heading-text" style={{ marginTop: "80px" }}>Farm</h1>
                <Card className="farm-outer-card-view">
                    <Card.Header className="farm-outer-card-header">For Farming</Card.Header>
                    <Card.Body>
                        <Card.Text className="farm-outer-card-text">
                            Ensure grain growers are well represented and set a progressive agenda to influence government and industry decision-making. GrainGrowers policy solutions are grower-focussed and grower-supported. Harvest
                         
                        </Card.Text>
                        <Row style={{ justifyContent: "space-evenly" }}>
                            <Col md={4} className="farm-inner-col">
                                <FarmInnerCard
                                    header="Approach to developing policy"
                                    text='<ul><li>Direct Member Input
                                    <br /><li>Graingrower Member Engagement
                                    <br /><li>National Policay Group
                                    <br /><li><a href="https://www.graingrowers.com.au/policy">GrainGrowers: Policy & Industry Issues</a></ul>'
                                />
                            </Col>
                            <Col md={4} className="farm-inner-col">
                                <FarmInnerCard
                                    header="Policy supporting documents"
                                    text='<ul><li><a href="https://greens.org.au/vic/policies/agriculture-policy">Agriculture Policy</a>
                                    <br /><li><a href="https://www.grainproducers.com.au/_files/ugd/f4375f_01152986940846fba83609b961e53378.pdf">Policy Development Framework</a>
                                    <br /><li><a href="https://www.awe.gov.au/sites/default/files/sitecollectiondocuments/ag-food/biotech/biotech-aus-policy-snapshot.pdf">Biotechnology and Agriculture in Australia</a>
                                    <br /><li><a href="https://www.pir.sa.gov.au/__data/assets/pdf_file/0018/314334/McColl_-_speech_Agricultural_Policy_in_Australia_Aug_85.pdf">Agricultural Policy in Australia</a></ul>'
                                />
                            </Col>
                            <Col md={4} className="farm-inner-col">
                                <FarmInnerCard
                                    header="Relevant legal supporting documents"
                                    text='<ul><li><a href="https://uk.practicallaw.thomsonreuters.com/1-608-5865?transitionType=Default&contextData=(sc.Default)&firstPage=true">Agricultural law in Australia</a></ul>'
                                />
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card className="farm-outer-card-view">
                    <Card.Header className="farm-outer-card-header">For Grains</Card.Header>
                    <Card.Body>
                        <Card.Text className="farm-outer-card-text">
                            GrainCorp’s strict adherence to quality and classification for varieties of grain helps to ensure high demand and a premium price point for Australian grain.
                            <br /><br /><strong>Quality Policy:</strong>
                            <br /><br />1. The responsibility to provide safe and suitable food is crucial.
                            <br />2. Meet various quality needs and expectations of stakeholders.
                            <br />3. Manage resources, including personnel, infrastructure and work environment.
                            <br />4. The process of continuous improvement is applied to quality management and pursues excellent performance.
                            <br /><br />For details: <a href="https://grains.graincorp.com.au/wp-content/uploads/2021/02/Quality-Policy-Statement.pdf">GrainCrop: Quality Policy Statement</a>
                        </Card.Text>

                        <Row style={{ justifyContent: "space-evenly" }}>
                            <Col md={4} className="farm-inner-col">
                                <FarmInnerCard
                                    header="Commodity Receival Standards"
                                    text='<ul><li><a href="https://grains.graincorp.com.au/wp-content/uploads/2021/08/Barley-Standards-2021-2022.pdf">Barley Standards 2021-2022</a>
                                    <br /><li><a href="https://grains.graincorp.com.au/wp-content/uploads/2021/08/Wheat-Standards-2021-2022.pdf">Wheat Standards 2021-2022</a>
                                    <br /><li><a href="https://grains.graincorp.com.au/wp-content/uploads/2021/08/Oats-Standards-2021-2022.pdf">Oats Standards 2021-2022</a>
                                    <br /><li><a href="https://grains.graincorp.com.au/wp-content/uploads/2021/08/Feed-Maize-Standards-2021-2022.pdf">Feed Maize Standards 2021-2022</a></ul>'
                                />
                            </Col>
                            <Col md={4} className="farm-inner-col">
                                <FarmInnerCard
                                    header="Grain Standards"
                                    text='<ul><li><a href="https://www.giwa.org.au/industry-hub/grain-standards/">Grain Standards in Western Australia</a>
                                    <br /><li><a href="https://www.agracom.com.au/forms/grain-standards">Grain Standards</a></ul>'
                                />
                            </Col>
                            <Col md={4} className="farm-inner-col">
                                <FarmInnerCard
                                    header="Relevant supporting and learning documents"
                                    text='<ul><li><a href="https://www.farmbiosecurity.com.au/wp-content/uploads/2019/07/Biosecurity-Manual-for-Grain-Producers.pdf">Biosecurity Manual for Grain Producers</a></ul>'
                                />
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <br /><br />
            </Container>
        </Container>
    );

}

export default Farm;
