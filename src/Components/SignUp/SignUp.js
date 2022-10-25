import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../UserContext/UserContext";

const SignUp = () => {
    const [isPassword, setIsPassword] = useState(true);
    const [passwordError, setPasswordError] = useState("enter password");
    const { register, update, registerGoogle, verification } =
      useContext(DataContext);
  
    const homePage = useNavigate();
    const singUpByGoogle = () => {
      registerGoogle()
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
    //   if (!(password.length > 5 && password.length < 17)) {
    //     setPasswordError(
    //       "your password should not contain less then 6 and more then 16 character"
    //     );
    //     return;
    //   }
    //   if (!/(?=.*[A-Z])/.test(password)) {
    //     setPasswordError("set at list one uppercase letter in password");
    //     return;
    //   }
    //   if (!/(?=.*[0-9])/.test(password)) {
    //     setPasswordError("set at list one number in password");
    //     return;
    //   }
    //   if (!/(?=.*[!@#$%^&*+-])/.test(password)) {
    //     setPasswordError("set at list one special character in password");
    //     return;
    //   }
      register(email, password)
        .then((result) => {
          update(name);
          verification();
          from.reset();
          homePage("/");
        })
        .catch((error) => {
          console.error(error);
        });
    };
  
    const showPassword = () => {
      setIsPassword(!isPassword);
    }
  return (
    <div className="w-50 h-75 mx-auto my-5">
      <Form onSubmit={submit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter your name</Form.Label>
          <Form.Control name='name' type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Enter your photo url</Form.Label>
          <Form.Control name='photo' type="text" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;
