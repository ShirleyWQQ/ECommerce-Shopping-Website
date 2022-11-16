import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../stores/user";
export default function Navigation() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  return (
    <div>
      <Button onClick={() => navigate("/")}>Home</Button>
      <Button onClick={() => navigate("/login")}>Login</Button>
      <Button onClick={() => navigate("/admin")}>Admin</Button>
      <Button onClick={() => navigate("/example")}>Example</Button>
      <Button onClick={() => navigate("/404")}>404</Button>
      <Button onClick={() => dispatch(logout())}>Logout</Button>
    </div>
  )
}
