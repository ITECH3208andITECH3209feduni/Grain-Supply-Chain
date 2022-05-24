import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import ExportInnerCard from "./ExportInnerCard";
import './ExportStyle.css';

function Export() {
    return (
        <Container fluid className="page-main-section">
            <Container>
                <h1 className="page-heading-text" style={{ marginTop: "80px" }}>Export</h1>
                <Card className="export-outer-card-view">
                    <Card.Header className="export-outer-card-header">Australian grain export related documents</Card.Header>
                    <Card.Body>
                        <Row style={{ justifyContent: "space-evenly" }}>
                            <Col md={4} className="export-inner-col">
                                <ExportInnerCard
                                    header="Export Control Rules"
                                    text='<ul><li><a href="../../assets/export/export-control-rules/Export Control (Fees and Payments) Rules 2021.pdf">Export Control (Fees and Payments) Rules 2021</a>
                                    <br /><li><a href="../../assets/export/export-control-rules/Export Control (Plants and Plant Products).pdf">Export Control (Plants and Plant Products)</a>
                                    <br /><li><a href="../../assets/export/export-control-rules/Export Control Act 2020.pdf">Export Control Act 2020</a>
                                    </ul>'
                                />
                            </Col>
                            <Col md={4} className="export-inner-col">
                                <ExportInnerCard
                                    header="Export Charges"
                                    text='<ul><li><a href="../../assets/export/export-charges/2021-22-grain-cris-final-report.pdf">2021-22-grain-cris-final-report</a>
                                    <br /><li><a href="../../assets/export/export-charges/Export Charges (Imposition—Customs).pdf">Export Charges (Imposition—Customs)</a>
                                    <br /><li><a href="../../assets/export/export-charges/Export Charges (Imposition—General).pdf">Export Charges (Imposition—General)</a>
                                    </ul>'
                                />
                            </Col>
                            <Col md={4} className="export-inner-col">
                                <ExportInnerCard
                                    header="Export Legislation"
                                    text='<ul><li><a href="../../assets/export/export-legislation/factsheet-exporters-new-process-for-re-export-consignments.pdf">Factsheet-exporters-new-process-for-re-export-consignments</a></ul>'
                                />
                            </Col>
                        </Row>
                        <Row style={{ justifyContent: "space-evenly" }}>
                            <Col md={4} className="export-inner-col">
                                <ExportInnerCard
                                    header="Other"
                                    text='<ul><li><a href="../../assets/export/other/2021 WA Crop Sowing Guide_Barley (pgs 42_89).pdf">2021 WA Crop Sowing Guide_Barley (pgs 42_89)</a>
                                    <br /><li><a href="../../assets/export/other/AEGICSupplyChainsReport.pdf">AEGICSupplyChainsReport</a>
                                    <br /><li><a href="../../assets/export/other/FULL-REPORT-Australias-grain-supply-chains-DIGITAL__.pdf">FULL-REPORT-Australias-grain-supply-chains-DIGITAL</a>
                                    <br /><li><a href="../../assets/export/other/Grains NTM summary report V6.pdf">Grains NTM summary report V6</a>
                                    <br /><li><a href="../../assets/export/other/Transportation of the Australian Wheat Harvest.pdf">Transportation of the Australian Wheat Harvest</a>
                                    </ul>'
                                />
                            </Col>
                            <Col md={4} className="export-inner-col">
                                <ExportInnerCard
                                    header="Trading Standards"
                                    text='<ul><li><a href="../../assets/export/trading-standards/IMP-Wheat-Barley-to-China-Update-Nov17-FINAL.pdf">IMP-Wheat-Barley-to-China-Update-Nov17-FINAL</a>
                                    <br /><li><a href="../../assets/export/trading-standards/Section 02 - Barley Trading Standards 202122.pdf">Section 02 - Barley Trading Standards 202122</a>
                                    <br /><li><a href="../../assets/export/trading-standards/Section 02 - Wheat Trading Standards 202122 020821.pdf">Section 02 - Wheat Trading Standards 202122 020821</a>
                                    </ul>'
                                />
                            </Col>
                            <Col md={4} className="export-inner-col">
                                <ExportInnerCard
                                    header="Other Websites"
                                    text='<ul><li><a href="https://www.awe.gov.au/biosecurity-trade/export/controlled-goods/plants-plant-products/plantexportsmanual#documentation">Department of Agriculture, Water and the Environment of the Australian Government</a>
                                    <br /><li><a href="https://www.graintrade.org.au/About_GTA">Grain Trade Australia</a>
                                    <br /><li><a href="https://www.australiangrainexport.com.au/">Australian Grain</a></ul>'
                                />
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <br /><br /><br /><br />
            </Container>
        </Container>
    );
}

export default Export;