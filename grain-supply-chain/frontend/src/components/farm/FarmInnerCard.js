import React from "react";
import Card from "react-bootstrap/Card";
import parse, { domToReact } from 'html-react-parser';

function FarmInnerCard(props) {
    return (
        <Card className="farm-inner-card-view">
            <Card.Header className="farm-inner-card-header">{props.header}</Card.Header>
            <Card.Body>
                <Card.Text className="farm-inner-card-text"> {parseWithLinks(props.text)} </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default FarmInnerCard;

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