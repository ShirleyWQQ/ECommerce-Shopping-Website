import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
export default function Navigation() {
  const navigate = useNavigate();
  return (
    <div>
      <Button onClick={() => navigate("/")}>Go Home</Button>
      <Button onClick={() => navigate("/example")}>Go to Example</Button>
      <Button onClick={() => navigate("/404")}>Go to 404</Button>
      <Button onClick={() => navigate("/login")}>Login</Button>
    </div>
  )
}
