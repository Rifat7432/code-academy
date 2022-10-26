import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../UserContext/UserContext";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { themeContext } from "../../App";
import { toast } from "react-toastify";

const SignUp = () => {
  const { register, update, registerGoogle, verification, registerGitHub } =
    useContext(DataContext);
  const { theme, setTheme } = useContext(themeContext);

  const homePage = useNavigate();
  const singUpByGoogle = () => {
    registerGoogle()
      .then((result) => {
        homePage("/");
      })
      .catch((error) => {});
  };
  const singUpByGithub = () => {
    registerGitHub()
      .then((result) => {
        homePage("/");
      })
      .catch((error) => {});
  };
  const submit = (event) => {
    event.preventDefault();
    const from = event.target;
    const name = from.name.value;
    const email = from.email.value;
    const password = from.password.value;
    const photo = from.photo.value;
    // if (!(password.length > 5 && password.length < 17)) {
    //   toast.error(
    //     "your password should not contain less then 6 and more then 16 character",
    //     {
    //       autoClose: 3000,
    //     }
    //   );
    //   return;
    // }
    // if (!/(?=.*[A-Z])/.test(password)) {
    //   toast.error("set at list one uppercase letter in password", {
    //     autoClose: 3000,
    //   });
    //   return;
    // }
    // if (!/(?=.*[0-9])/.test(password)) {
    //   toast.error("set at list one number in password", {
    //     autoClose: 3000,
    //   });
    //   return;
    // }
    // if (!/(?=.*[!@#$%^&*+-])/.test(password)) {
    //   toast.error("set at list one special character in password", {
    //     autoClose: 3000,
    //   });
    //   return;
    // }
    register(email, password)
      .then((result) => {
        update(name, photo);
        verification();
        homePage("/");
        from.reset();
      })
      .catch((error) => {
        toast.error(`${error.massage}`, {
          autoClose: 3000,
        });
      });
  };
  return (
    <div className="py-5 container">
      <div className="row">
        <div className=" h-75 col-12 col-md-10 col-lg-8 mx-auto my-5  shadow-lg px-4 py-5 rounded">
          <Form onSubmit={submit}>
            <h1 className="mx-auto w-50">SIGN UP</h1>
            <Form.Group
              className="mb-3 w-75 mx-auto"
              controlId="formBasicEmail"
            >
              <Form.Label>Enter your name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Enter name"
                required
              />
            </Form.Group>
            <Form.Group
              className="mb-3 w-75 mx-auto"
              controlId="formBasicEmail"
            >
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group
              className="mb-3 w-75 mx-auto"
              controlId="formBasicPassword"
            >
              <Form.Label>Enter your photo url</Form.Label>
              <Form.Control
                name="photo"
                type="text"
                placeholder="Enter your photo url"
                required
              />
            </Form.Group>
            <Form.Group
              className="mb-3 w-75 mx-auto"
              controlId="formBasicPassword"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
                required
              />
            </Form.Group>
            <Form.Group
              className="mb-3 w-75 mx-auto"
              controlId="formBasicCheckbox"
            >
              <Button variant="primary mt-4 w-50 mx-auto" type="submit">
                Register
              </Button>
            </Form.Group>
            <div className="my-5 mx-auto w-75">
              <p className="mt-5">
                Already have an account ?
                <Link to="/login">
                  <span className="text-orange-600"> Login</span>
                </Link>
              </p>
            </div>
            <div className="mx-auto w-75">
              <button
                className="btn btn-outline-primary mx-3 mb-3"
                onClick={singUpByGoogle}
              >
                <FaGoogle></FaGoogle>
                <span> Register by Google</span>
              </button>
              <button
                className={`btn btn-outline-${
                  theme ? "dark" : "light"
                } mx-3 mb-3`}
                onClick={singUpByGithub}
              >
                <FaGithub></FaGithub> <span> Register by GitHub</span>
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
