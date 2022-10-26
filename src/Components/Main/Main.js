import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import thumbnail from "../../images/istockphoto-1356364268-170667a.jpg";

const Main = () => {
  return (
    <div className="p-5">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <h1>Launch Your Web Development Career With Codecademy</h1>
            <p>
              Go from no-code to an in-demand junior web developer, at a
              fraction of the cost of a bootcamp. Start with the front-end by
              learning HTML, CSS, and JavaScript. Then, master the back-end and
              APIs to round out your full-stack skills
            </p>
          </Col>
          <Col xs={12} md={6}>
            <img src={thumbnail} className="img-thumbnail" alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
