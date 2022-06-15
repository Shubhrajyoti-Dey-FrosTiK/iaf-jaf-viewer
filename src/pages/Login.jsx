import React, { useState, useContext } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { loggedIn } from "../App";
import axios from "axios";

function Login() {
  const [login, setLogin] = useContext(loggedIn);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogin = async (event) => {
    event.preventDefault();
    const validate = await axios.get(
      import.meta.env.VITE_FETCH_URL + "/login",
      { headers: { username: userName, password: password } }
    );
    if (validate.data.message == "Success") setLogin(true);
    else handleShow();
  };

  return (
    <div>
      <h1 style={{ fontWeight: "800", textAlign: "center", margin: "50px" }}>
        IAF JAF Viewer
      </h1>
      <h3 style={{ textAlign: "center", margin: "20px" }}>Login</h3>
      <div style={{ maxWidth: "300px", margin: "auto" }}>
        <Form onSubmit={handleLogin}>
          <div style={{ margin: "20px" }}>
            <Form.Label>Username</Form.Label>
            <Form.Control
              onChange={(e) => setUserName(e.target.value)}
            ></Form.Control>
          </div>
          <div style={{ margin: "20px" }}>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </div>
          <div style={{ textAlign: "center" }}>
            <Button type="submit">Login</Button>
          </div>
        </Form>
      </div>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Invalid Credentials</Modal.Title>
        </Modal.Header>
        <Modal.Body>The Username or the password is incorrect</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Login;
