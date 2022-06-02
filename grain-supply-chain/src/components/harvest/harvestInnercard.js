import React from "react";
import Card from "react-bootstrap/Card";
import parse, { domToReact } from 'html-react-parser';

function harvestInnercard(props) {
    return (
        <Card className="harvest-inner-card-view">
            <Card.Header className="harvest-inner-card-header">{props.header}</Card.Header>
            <Card.Body>
                <Card.Text className="harvest-inner-card-text"> {parseWithLinks(props.text)} </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default harvestInnercard;

function parseWithLinks(text) {
    const options = {
        replace: ({ name, attribs, children }) => {
            if (name === 'a' && attribs.href) {
                return <a href={attribs.href} target="_blank">{domToReact(children)}</a>;
            }
        }
    };

    return parse(text, options);
}