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
  const [loginFailed, setLoginFailed] = useState(false);
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
        setLoginFailed(true);
        if (err.response) {
          console.log("Login Failed");
        } else {
          console.log("Failed to perform calls");
          console.error(err);
        }
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
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter email address" value={username} onChange={e => setUsername(e.target.value)} />
          <Form.Text id="usernameHelpBlock" muted>
            Username must be within 20 characters.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember Me for 30 Days" />
        </Form.Group>
        {loginFailed ?
          <Form.Text id="failed" className="text-danger">
            Failed to Login
          </Form.Text> : null}
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Button onClick={() => login()}>Submit</Button>
          <Button onClick={() => navigate("/")}>Back to Home Page</Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default LoginPage;
