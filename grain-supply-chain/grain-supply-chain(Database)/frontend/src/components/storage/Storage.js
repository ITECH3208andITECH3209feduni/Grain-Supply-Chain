import React from "react";
import { Container, Card, Tabs, Tab } from "react-bootstrap";
import './StorageStyle.css';

function Storage() {
    return (
        <Container fluid className="page-main-section">
            <Container>
                <h1 className="page-heading-text" style={{ marginTop: "80px" }}>Storage</h1>
                <Card id="link" className="storage-outer-card-view">
                    <Card.Body>
                        <Tabs defaultActiveKey="silos" className="mb-1">
                            <Tab eventKey="silos" title="Silos">
                                <Card.Text className="storage-tab-card-text">
                                    <br /><h4>Standards</h4>
                                    <ul><br /><strong>Fumigation:</strong> A gas-tight sealable silo will ensure phosphine, or other fumigants and controlled atmospheres, are maintained at a sufficient concentration to kill insects through theircomplete life cycle of eggs, larvae, pupae and adult. Gas-tight sealable silos also can be used for alternative methods of insect controlincluding controlled atmospheres of inert gasses, such as Co2 or nitrogen.
                                        <br /><br /><strong>Size and Construction:</strong> Silos are typically limited to 120 tonnes capacity due toroad transport regulation limitations. Larger cone bottom silos are built on site. Cone-bottom silos are easier to clean than flat-bottom silos due to their self-emptyingdesign, but are limited to capacities up.
                                        <br /><br /><strong>Longetivty:</strong> A well-built, aerated, quality gas-tight sealable silo constructed to meet the Australianstandard with a thorough maintenance regime could be expected to provide at least 25 years of serviceable life before major repairs may be required
                                        <br /><br /><strong>Aeration cooling:</strong> Silos enable simple provisions for aeration after harvest to cool grain. Aeration cooling of grain in storage creates uniform moisture conditions and slows orstops insect pest life cycles.
                                        <br /><br /><strong>Capital investement:</strong> As a permanent infrastructure fixture on a farm, silos require a high initial capitalinvestment especially when foundation costs are included. When considering thecost of storage over the expected life of the silo however, silos are comparativelycost effective with other types of storage.</ul>
                                    <br /><h4>Checklist points</h4>
                                    <ul><br />1. Aerated, gas-tight sealable silos should always be the preferred option.
                                        <br />2. Ensure a pressure relief valve is fitted, capable of handling the maximum air-flow in and out of the silo.
                                        <br />3. Seal mechanisms on inlets and outlets should be simple to operate and provide even seal pressure.
                                        <br />4. Seal rubbers should be quality high-density EPDM (ethylene-propylene-dienemonomer) rubber.
                                        <br />5. Always consider access and safety features, including roof rails, ladder lockouts, platforms and ladder cages.
                                        <br />6. Consider grain segregation requirements when determining silo size. Smaller silos allow better segregation. A variation of sizes often works well.</ul>
                                </Card.Text>
                            </Tab>
                            <Tab eventKey="gsc" title="Grain Storage Considerations">
                                <Card.Text className="storage-tab-card-text">
                                    <br /><h4>Standards</h4>
                                    <ul><br /><strong>Capacity:</strong> Typical storage capacity is around 240t, but other sizes including up to 500t bags are also available. Quality of bag materials varies and using bags for grain storage that have been designed for silage storage is not recommended as they are likely to fail.
                                        <br /><br /><strong>Using grain storage bags successfully:</strong> Successful use of grain bags as an on-farm grain storage option requires a carefullyprepared pad. Fill rates are typically 3–4 tonnes per minute. Always fill bags on firm compacted ground and ensure brake settings on the filler are set to ensure the appropriate stretch of the bag is achieved. While typically a 10 per cent stretch, this can be adjusted down for hot weather conditions or up for cool ambient weather.
                                        <br /><br /><strong>Capital investment:</strong> The two pieces of equipment required for loading and unloading grain storage bags cost around $30,000–50,000 each. This quipment can be hired, although owning it can reduce the pressure of aving to get grain in and out of the bags within a specified timeframe as demand for this hire equipment is high at the peak of harvest.
                                        <br /><br /><strong>Longetivity:</strong> While longer-term storage is possible in bags if well managed, they are best suited to short-term storage of three months. Beyond this, there is considerable risk of grain losses and spoilage in many of Australia’s grain production regions.</ul>
                                    <br /><h4>Checklist Points</h4>
                                    <ul><br />1. Test bag quality by pushing your thumb through an edge of the bag — you will be able to make a subjective judgement as to whether it is high or poor quality.
                                        <br />2. Make sure the bag has stretch indicators for accurate filling.
                                        <br />3. Ensure the bag is UV stable for 12 months and complies with the ISO 9001 quality management system.
                                        <br />4. Select a hard, smooth, elevated site with a gentle slope where water can drain away.
                                        <br />5. Allow plenty of room around the grain bags for machinery access and trucks to turn around.
                                        <br />6. Clear, firm ground makes operating the filling and emptying machines easier with less chance of brakes skidding.</ul>
                                </Card.Text>
                            </Tab>
                            <Tab eventKey="sab" title="Sheds and Bunkers">
                                <Card.Text className="storage-tab-card-text">
                                    <br /><h4>Standards</h4>
                                    <ul><br /><strong>Capital investment:</strong> The cost of grain storage in sheds varies widely depending on footing and slab requirements as determined by soil type. Bunkers are arguably one of the lowest capital cost storage options but will require more labour and equipment for outloading.
                                        <br /><br /><strong>Aeration cooling:</strong> Aerating grain stored in a shed is difficult due to the variation in grain depth. Specialised suppliers can setup aeration systems for sheds, which usually involve ducting in sections that can be removed as the shed is emptied to allow loader access.
                                        <br /><br /><strong>Loading and unloading:</strong> One of the biggest drawbacks of sheds used for grain storage is the difficulty getting grain in and out. Using an auger or belt conveyor to fill the shed from the truck is common practice.Grain vacuums can also be used to out-load grain from sheds.</ul>
                                    <br /><h4>Checklist Points</h4>
                                    <ul><br />1. The site needs to be above flood level and have all weather access.
                                        <br />2. Sheds need to be neat and clean.
                                        <br />3. we need to be able to sample it, look after it and think about how it will be marketed.
                                        <br />4. Bunkers are filled with an auger set up with a bunker attachment, while a wheel loader is used to move grain off-site. Determining whether a bunker is part of a long-term storage strategy or a shorter-term plan is a key consideration.</ul>
                                </Card.Text>
                            </Tab>
                            <Tab eventKey="up" title="Undergroung pits">
                                <Card.Text className="storage-tab-card-text">
                                    <br /><h4>Standards</h4>
                                    <ul><br /><strong>Size and construction:</strong> Careful preparation is essential for underground storage to be successful. Keep each storage pit no more than three metres wide to allow the covering soil to be placed and removed by a front-end loader without having to drive over the top of the grain.
                                        <br /><br /><strong>Loading:</strong> Grain moisture content must be less than 12% to keep the risk of spoilage low. An initial layer of sand will prevent rocks or hard clods from damaging the top cover. Shape the soil to facilitate run-off. Mark the location of the pit with a peg at each corner.
                                        <br /><br /><strong>Pest and insect control:</strong> A well-constructed pit storage is air-tight and oxygen levels gradually reduce over time. The low oxygen levels prevent development of damaging numbers of grain insects. If in doubt about the gas-tightness of the pit, grain protectants can be applied to the grain when it is placed in storage to prevent insect pests at least for the first few months of storage.
                                        <br /><br /><strong>Unloading:</strong> To unload the pit, it is necessary to be able to remove all the covering soil without contaminating the grain. This can be difficult and is the reason for using narrow pits. Always unload the entire contents once the pit is open, otherwise losses due to drainage problems are likely.</ul>
                                    <br /><h4>Checklist Points</h4>
                                    <ul><br />1. Pits should not be placed close together because water seepage from an empty pit may spoil the grain in a nearby pit.
                                        <br />2. Clay is the best soil for it.
                                        <br />3. the site should be at the highest point in the local landscape so there is no movement of surface or underground water to the pit.
                                        <br />4. Pits should be as deep as the site and excavator allow
                                        <br />5. It is important to ensure the pit and its contents are as dry as possible at this stage.
                                        <br />6. The grain must hold less than 13% moisture.
                                        <br />7. Sheets should overlap at least 20cm at the edges and full sections should be used without cross joins.</ul>
                                </Card.Text>
                            </Tab>
                        </Tabs>
                    </Card.Body></Card>
                <br /><br /><br /><br />
            </Container>
        </Container >
    );
}

export default Storage;