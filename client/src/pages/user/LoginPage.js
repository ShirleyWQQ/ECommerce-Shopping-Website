import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login as StoreLogin } from "../../stores/user";
import { selectUser } from "../../stores/user";

const loginUrl = "http://localhost:3001/api/user/login";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const login = () => {
    const body = {
      username,
      password
    }
    Axios.post(loginUrl, body)
      .then(res => {
        dispatch(StoreLogin(res.data));
        navigate("/");
      })
      .catch(err => {
        if (err.response) {
          alert("Login Failed");
        } else
          alert("Failed to retrieve products");
      });
  };
  useEffect(() => {
    if (user !== null) {
      navigate("/");
    }
  }, [user, navigate]);
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email address" value={username} onChange={e => setUsername(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember Me for 30 Days" />
        </Form.Group>
        <Button onClick={() => login()}>
          Submit
        </Button>
        <Button onClick={() => navigate("/")}>
          Back to Home Page
        </Button>
      </Form>
    </div>
  );
};

export default LoginPage;
