import React from "react";
import Card from "react-bootstrap/Card";
import parse, { domToReact } from 'html-react-parser';
import { Link } from 'react-router-dom';

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
                return <Link to={attribs.href}>{domToReact(children)}</Link>;
            }
        }
    };

    return parse(text, options);
}