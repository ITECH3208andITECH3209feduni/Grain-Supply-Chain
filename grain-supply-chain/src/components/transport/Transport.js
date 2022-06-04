import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TransportInnerCard from "./TransportInnerCard";
import imgTransportType from "../../assets/transport/transport_type.PNG";
import imgTransportLocation from "../../assets/transport/transport_location.PNG";
import './TransportStyle.css';

function Transport() {
    return (
        <Container fluid className="page-main-section">
            <Container>
                <h1 className="page-heading-text" style={{ marginTop: "80px" }}>Transportation</h1>

                <Row style={{ justifyContent: "space-evenly", marginTop: "50px" }}>
                    <Col md={6} className="transport-col">
                        <TransportInnerCard
                            header="Transport Vehicle Standard"
                            text='<ul><li>Vehicle equipment and hygiene <br /><a href="https://cdn-s3-nrspp-2020.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/sites/4/2017/03/15112744/Grain-Transport-Code-of-Practice-1-July-2014-FINAL.pdf">View More</a>
                            <br /><br /><li>Vehicles must meet the transshipment standards for transshipment grains <br /><a href="https://www.graintrade.org.au/commodity_standards">View More</a>
                            <br /><br /><li>No vehicle that has carried material shown in the Class 1 Exclusion List shall be presented for the cartage of grain <br /><a href="https://cdn-s3-nrspp-2020.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/sites/4/2017/03/15112744/Grain-Transport-Code-of-Practice-1-July-2014-FINAL.pdf">View More</a>
                            <br /><br /><li>All vehicles and drivers must comply with Class 2 and Class 3 Product cleaning requirements and a record must be retained by the carrier of the prior loads and cleaning methods. (Record Required) <br /><a href="https://cdn-s3-nrspp-2020.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/sites/4/2017/03/15112744/Grain-Transport-Code-of-Practice-1-July-2014-FINAL.pdf">View More</a>
                            <br /><br /><li>All bulk tipping vehicles andtrailers must be fitted with a tarpaulin system that can be operated from ground level or from a safe low-level platform <br /><a href="https://cdn-s3-nrspp-2020.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/sites/4/2017/03/15112744/Grain-Transport-Code-of-Practice-1-July-2014-FINAL.pdf">View More</a></ul>'
                        />
                        <br />
                        <TransportInnerCard
                            header="Requirements in the Time of COVID-19"
                            text='<ul><li>The driver shall use personal protective equipment (PPE) in accordance with hygienic conditions throughout the transportation <br /><a href="https://www.graintrade.org.au/sites/default/files/GTA%20Safety%20Guidelines%20COVID-19.pdf">View More</a>
                            <br /><br /><li>During transportation, grains shall not be in contact with the outside unless necessary <br /><a href="https://www.graintrade.org.au/sites/default/files/GTA%20Safety%20Guidelines%20COVID-19.pdf">View More</a></ul>'
                        /><br />
                        <TransportInnerCard
                            header="Type of Suppy Chain"
                            image={imgTransportType}
                            text=''
                        />
                    </Col>
                    <Col md={6} className="transport-col">
                        <TransportInnerCard
                            header="Standard When Loading Cargo"
                            text='<ul><li>Before the vehicle is loaded <br /><a href="https://cdn-s3-nrspp-2020.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/sites/4/2017/03/15112744/Grain-Transport-Code-of-Practice-1-July-2014-FINAL.pdf">View More</a>
                            <br /><br /><li>Grain suppliers need to provide quality certificates <br /><a href="https://cdn-s3-nrspp-2020.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/sites/4/2017/03/15112744/Grain-Transport-Code-of-Practice-1-July-2014-FINAL.pdf">View More</a>
                            <br /><br /><li>Grain needs to be inspected for pests before loading <br /><a href="https://cdn-s3-nrspp-2020.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/sites/4/2017/03/15112744/Grain-Transport-Code-of-Practice-1-July-2014-FINAL.pdf">View More</a>
                            <br /><br /><li>Loading should be carried out in suitable weather before loading <br /><a href="https://cdn-s3-nrspp-2020.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/sites/4/2017/03/15112744/Grain-Transport-Code-of-Practice-1-July-2014-FINAL.pdf">View More</a>
                            <br /><br /><li>Vehicles, equipment and load carrying areas must be inspected before loading and if necessary, cleaned and dried to remove any applicable residue accumulations or foreign material that may lead to contamination of the grain to be loaded (Record Required) <br /><a href="https://cdn-s3-nrspp-2020.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/sites/4/2017/03/15112744/Grain-Transport-Code-of-Practice-1-July-2014-FINAL.pdf">View More</a>
                            <br /><br /><li>The load load shall not exceed the vehicle load standard <br /><a href="https://www.nhvr.gov.au/files/ghms-0012-gta.pdf">View More</a></ul>'
                        /><br />
                        <TransportInnerCard
                            header="Shipping Route Standards"
                            text='<ul><li>In the case of vehicle transportation <br /><a href="https://cdn-s3-nrspp-2020.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/sites/4/2017/03/15112744/Grain-Transport-Code-of-Practice-1-July-2014-FINAL.pdf">View More</a>
                            <br /><br /><li>During transportation, the driver shall not deviate from the planned transportation route <br /><a href="https://cdn-s3-nrspp-2020.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/sites/4/2017/03/15112744/Grain-Transport-Code-of-Practice-1-July-2014-FINAL.pdf">View More</a></ul>'
                        /><br />
                        <TransportInnerCard
                            header="Read More"
                            image={imgTransportLocation}
                            text='<ul><li>WA Crop Sowing Guide Barley <a href="../../assets/transport/2021%20WA%20Crop%20Sowing%20Guide_Barley%20(pgs%2042_89).pdf">View More</a>
                            <br /><br /><li>Australias Grain Supply Chains <a href="../../assets/transport/FULL-REPORT-Australias-grain-supply-chains-DIGITAL.pdf">View More</a>
                            <br /><br /><li>Wheat Barley to China <a href="../../assets/transport/IMP-Wheat-Barley-to-China-Update-Nov17-FINAL.pdf">View More</a>
                            <br /><br /><li>Trade 14 official measures support digitalization <a href="../../assets/transport/Notice_to_Trade_14_official_measures_support_digitalization.pdf">View More</a>
                            <br /><br /><li>Barley Trading Standards <a href="../../assets/transport/Section%2002%20-%20Barley%20Trading%20Standards%20202122.pdf">View More</a>
                            <br /><br /><li>Transportation of the Australian Wheat Harvest <a href="../../assets/transport/Transportation%20of%20the%20Australian%20Wheat%20Harvest.pdf">View More</a></ul>'
                        />
                    </Col>
                </Row>
                <br /><br />
            </Container>
        </Container>
    );
}

export default Transport;