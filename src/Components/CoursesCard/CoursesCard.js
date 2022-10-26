import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";

const CoursesCard = ({ data }) => {
  const navigate = useNavigate();
  const goTODetails = (id) => {
    navigate(`/courses/${id}`);
  };
  return (
    <div>
      <Row xs={1} md={2} lg={3} className="g-4">
        {data.map((course, idx) => (
          <Col onClick={()=>goTODetails(course.id)} key={course.id}>
            <Card>
              <Card.Img
                variant="top"
                style={{ height: "200px" }}
                src={course.img}
              />
              <Card.Body>
                <Card.Title>{course.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CoursesCard;
