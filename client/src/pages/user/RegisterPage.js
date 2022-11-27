import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login as StoreLogin } from "../../stores/user";
import { selectUser } from "../../stores/user";
import Api from "../../lib/api";

const registerUrl = "http://localhost:3001/api/user/register";

function RegisterPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [profile, setProfile] = useState("profile")
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  const handleCheckboxChange = () => {
    setIsAdmin(!isAdmin);
  }
  const register = () => {
    Api.register(userName, password, profile, isAdmin)
      .then(res => {
        const user = res.data;
        console.log(user);
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
          <Form.Label>Set Username</Form.Label>
          <Form.Control type="email" placeholder="Enter Username" value={userName} onChange={e => setUserName(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Set Password</Form.Label>
          <Form.Control type="password" placeholder="New Password" value={password} onChange={e => setPassword(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="This account will be an admin account" onChange={handleCheckboxChange} />
        </Form.Group>
        <Button onClick={() => register()}>
          Register
        </Button>
        <Button onClick={() => navigate("/")}>
          Back to Home Page
        </Button>
      </Form>
    </div>
  );
};

export default RegisterPage;
