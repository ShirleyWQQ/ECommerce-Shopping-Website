import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';

function LoginPage() {
  const navigate = useNavigate();
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email address" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember Me for 30 Days" />
      </Form.Group>
      <Button onClick={() => navigate("/")}>
        Submit
      </Button>
      <Button onClick={() => navigate("/")}>
        Back to Home Page
      </Button>
      
    </Form>
    )
}

export default LoginPage;
