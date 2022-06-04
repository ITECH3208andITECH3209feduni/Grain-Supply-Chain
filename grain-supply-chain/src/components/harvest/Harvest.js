import React from "react";
import { Container, Row, Card, Tab } from "react-bootstrap";
import './HarvestStyle.css';

function Harvest() {
    return (
        <Container fluid className="page-main-section">
            <Container>
                <h1 className="page-heading-text" style={{ marginTop: "80px" }}>Harvest</h1>
                <Card className="harvest-outer-card-view">
                    <Card.Header className="harvest-outer-card-header">For harvesting</Card.Header>
                    <Card.Body>
                        <Card.Text className="harvest-outer-card-text">
                            Ensure grain growers are well represented and set a progressive agenda to
                            influence government and industry decision-making. GrainGrowers policy solutions are grower-focussed and grower-supported.
                        </Card.Text>
                        <Row style={{ justifyContent: "space-evenly" }}>
                        </Row>
                    </Card.Body>
                </Card>
                <Card className="harvest-outer-card-view">
                    <Card.Header className="harvest-outer-card-header">For Grains</Card.Header>
                    <Card.Body>
                        <Card.Text className="harvest-tab-card-text">
                            <br /><h4>What is the process of Harvesting</h4>
                            <ul><br /><strong>Barley:</strong> Large crops of barely are usually harvested with large machinery such as tractors, but for small amounts of barley manuel labour is best. Tractor driven combines used a shaker for grain separation, and a straw-walker would remove the straw. They were deveoped to have independant engines to power the grain separation parts and gradually evolved into the combines as we see today.
                                <br /><br /><strong>Wheat:</strong>  When the wheat is ready, dry and fully ripended, the farmer uses a combineharvesting machine to collect the ripe grain. The harvester pours the grain into the trucks, the combine Harvester is driven through the paddocks where it cuts the wheat, cleans and separates the seeds or kernals from the rest of the plant.</ul>

                        </Card.Text>
                    </Card.Body>
                </Card>
                <br /><br /><br /><br />
            </Container>
        </Container>
    );
}

export default Harvest;
