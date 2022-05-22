import React from "react";
import Card from "react-bootstrap/Card";
import parse, { domToReact } from 'html-react-parser';
import { Link } from 'react-router-dom';

function TransportInnerCard(props) {
    return (
        <Card className="transport-card-view">
            <Card.Header className="transport-card-header">{props.header}</Card.Header>
            <Card.Img variant="top" src={props.image} />
            {props.text != null ?
                <Card.Body>
                    <Card.Text className="transport-card-text"> {parseWithLinks(props.text)} </Card.Text>
                </Card.Body> : <></>}
        </Card>
    );
}

export default TransportInnerCard;

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