import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
import { FaFileDownload } from "react-icons/fa";
import { themeContext } from "../../App";
// import "./styles.css";
const ref = React.createRef();
const DetailsCard = ({ course }) => {
  const { theme, setTheme } = useContext(themeContext);
  const { name, details, duration, img, price } = course;
  return (
    <div className='w-75 mx-auto py-5 text-black-50'>
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <p style={{cursor: 'pointer'}}  className= {`ms-auto w-25 fs-2 ${theme ? 'text-black-50':'text-white'}`} onClick={toPdf}>Download PDF <FaFileDownload></FaFileDownload></p>}
      </Pdf>
      <Card ref={ref}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Card.Text>Duration : {duration}</Card.Text>
          <Card.Text>Price : {price}</Card.Text>
          <Link to="/checkout">
            <Button variant="primary">Get premium access.</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DetailsCard;
