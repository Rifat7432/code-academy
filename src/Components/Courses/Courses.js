import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sidbar from "../Sidbar/Sidbar";
import CoursesCard from "../CoursesCard/CoursesCard";
import { useLoaderData } from "react-router-dom";

const Courses = () => {
    const data = useLoaderData()
  return (
    <div>
      <h1 className="mx-auto w-25">All our courses</h1>
      <Container>
        <Row>
          <Col xs={12} md={3}>
            <Sidbar></Sidbar>
          </Col>
          <Col xs={12} md={9}>
            <CoursesCard data={data}></CoursesCard>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
