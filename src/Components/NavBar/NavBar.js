import React, { useContext } from "react";
import logo from "../../images/logo_codecademy-removebg-preview.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaSun, FaMoon, FaUserAlt } from "react-icons/fa";
import { themeContext } from "../../App";
import { Link, NavLink } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { DataContext } from "../UserContext/UserContext";

const NavBar = () => {
  const { logOut, userData } = useContext(DataContext);
  const { theme, setTheme } = useContext(themeContext);
  const createTheme = () => {
    setTheme(!theme);
  };
  return (
    <div>
      <Navbar
        bg={theme ? "primary" : "dark"}
        variant={theme ? "dark" : "dark"}
        expand="lg"
      >
        <Container>
          <Navbar.Brand className="w-25 h-25 ">
            <Link to='/'><img src={logo} className="w-75 h-75 " alt="" /></Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" d-flex justify-content-around align-items-center ms-auto">
              <NavLink className={({ isActive }) =>
                isActive ? 'btn btn-outline-light text-decoration-underline' : 'btn btn-outline-light m-3'} to="courses">
                Courses
              </NavLink>
              <NavLink className={({ isActive }) =>
                isActive ? 'btn btn-outline-light text-decoration-underline' : 'btn btn-outline-light m-3'} to="FAQ">
                FAQ
              </NavLink>
              <NavLink className={({ isActive }) =>
                isActive ? 'btn btn-outline-light text-decoration-underline' : 'btn btn-outline-light m-3'} to="login">
                Blog
              </NavLink>
              
              {userData?.photoURL ? (
                <p style={{cursor: 'pointer'}}  className="m-3"
                data-bs-toggle="tooltip" data-bs-placement="top"
                data-bs-custom-class="custom-tooltip"
                data-bs-title="This top tooltip is themed via CSS variables.">
          <Image style={{height:'50px',width:'50px'}} title={userData.displayName} roundedCircle   src={userData?.photoURL}></Image>
        </p>
                
              ) : (
                <FaUserAlt className="m-3"></FaUserAlt>
              )}
              {userData?.uid ? (
                <Link
                  onClick={logOut}
                  className="btn btn-outline-light  mx-4"
                  to="/"
                >
                  Log out
                </Link>
              ) : (
                <NavLink className={({ isActive }) =>
                isActive ? 'btn btn-outline-light text-decoration-underline' : 'btn btn-outline-light mx-3'} to="login">
                  Login
                </NavLink>
              )}
              <p style={{cursor: 'pointer'}} className=" mx-3 mt-2" onClick={createTheme}>
                {theme ? (
                  <FaMoon className="fs-4 text-white"></FaMoon>
                ) : (
                  <FaSun className="fs-4 "></FaSun>
                )}
              </p>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
