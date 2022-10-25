import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { DataContext } from "../UserContext/UserContext";

const Login = () => {
    const [userEmail, setUserEmail] = useState("");
    const [isPassword, setIsPassword] = useState(true);
    const [error, setError] = useState(true);
    const [passwordError, setPasswordError] = useState("");
    const { login, forget } = useContext(DataContext);
    const location = useLocation();
    const form = location.state?.from.pathname || "/";
    const home = useNavigate();
    const submit = (event) => {
      event.preventDefault();
      const from = event.target;
      const email = from.email.value;
      const password = from.password.value;
      console.log(email, password);
      login(email, password)
        .then((result) => {
          console.log(result.user);
          from.reset();
          home(form, { replace: true });
          setError(false);
        })
        .catch((error) => {
          console.log(error);
          setPasswordError(error.message);
        });
    };
    const showPassword = () => {
      setIsPassword(!isPassword);
    };
    const getEmail = (event) => {
      setUserEmail(event.target.value);
    };
    const forgetPassword = () => {
      forget(userEmail)
        .then((result) => {
          toast.info(
            "go to your email and set a new password.If you do not get the mail in inbox then check spam.",
            { autoClose: 3000 }
          );
        })
        .catch((error) => {
          toast.error("Enter your email to set new password !", {
            autoClose: 3000,
          });
        });
    }
  return (
    <div className="w-50 h-75 mx-auto my-5 shadow-lg px-4 py-5 rounded">
      <Form onSubmit={submit} >
      <h1 className="mx-auto w-50">LOGIN</h1>
        <Form.Group className="mb-3 w-75 mx-auto" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onBlur={getEmail} name="email" type="email" placeholder="Enter email" required/>
        </Form.Group>

        <Form.Group className="mb-3 w-75 mx-auto"  controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" required/>
          <Button variant="primary mt-4 w-50 mx-auto" type="submit">
          Submit
        </Button>
        </Form.Group>
        <div className="my-5 mx-auto w-75">
        <p className="mt-5">
          New to code-academy ?
          <Link to="/signup">
            <span className="text-orange-600">Create an account</span>
          </Link>
        </p>
      </div>
      </Form>
    </div>
  );
};

export default Login;
