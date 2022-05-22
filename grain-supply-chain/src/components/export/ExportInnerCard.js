import React from "react";
import Card from "react-bootstrap/Card";
import parse, { domToReact } from 'html-react-parser';
import { Link } from 'react-router-dom';

function ExportInnerCard(props) {
    return (
        <Card className="export-inner-card-view">
            <Card.Header className="export-inner-card-header">{props.header}</Card.Header>
            <Card.Body>
                <Card.Text className="export-inner-card-text"> {parseWithLinks(props.text)} </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ExportInnerCard;

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