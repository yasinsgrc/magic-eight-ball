import React from "react";
import { Col, Card, CardTitle, CardText } from "reactstrap";

const Asked = ({ question, answer, getImage }) => {
  return (
    <Col xs="6" sm="4">
      <Card>
        <hr />
        <CardText>{question}</CardText>
        <CardTitle>{answer}</CardTitle>
        <br />
        <img src={`${getImage}`} alt="yes or no" />
      </Card>
    </Col>
  );
};
export default Asked;
