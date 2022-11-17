import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../stores/user";
import { logout } from "../../stores/user";
export default function Navigation() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const user = useSelector(selectUser);
  return (
    <div>
      <Button onClick={() => navigate("/")}>Home</Button>
      <Button onClick={() => navigate("/admin")}>Admin</Button>
      <Button onClick={() => navigate("/example")}>Example</Button>
      <Button onClick={() => navigate("/404")}>404</Button>
      {user
        ? <Button onClick={() => dispatch(logout())}>Logout</Button>
        : <Button onClick={() => navigate("/login")}>Login</Button>
      }
    </div>
  )
}
