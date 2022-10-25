import React, { useContext } from "react";
import logo from "../../images/logo_codecademy-removebg-preview.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaSun, FaMoon } from "react-icons/fa";
import { themeContext } from "../../App";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { theme, setTheme } = useContext(themeContext);
  const createTheme = ()=>{
    setTheme(!theme)
  }
  return (
    <div>
      <Navbar bg={theme ? "primary": 'dark'} variant={theme ? "dark":"dark"} expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} className="w-25 h-50 " alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" d-flex justify-content-around align-items-center">
              <Link className="btn btn-outline-light mx-2" to="signup">Courses</Link>
              <Link className="btn btn-outline-light mx-2" to="FAQ">FAQ</Link>
              <Link className="btn btn-outline-light  mx-2" to="Blog">Blog</Link>
              <p className=" mx-3 mt-2" onClick={createTheme} >
                {theme ? <FaMoon className="fs-4 text-white"></FaMoon> : <FaSun className="fs-4 "></FaSun> }
              </p>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
