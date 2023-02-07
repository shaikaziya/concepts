import { useLocation, useNavigate } from "react-router-dom";
import { GetDetailsUser } from "./GetDetailsUser";
export function LoginForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const submitForm = (e) => {
    e.preventDefault();
    const firstName = document.getElementById("firstN").value;
    const LastName = document.getElementById("secondN").value;
    navigate("/getdetailsuser", { state: { firstName, LastName } });
  };
  return (
    <div>
      <h1>React</h1>
      <form action="" onSubmit={submitForm}>
        <input
          placeholder="Firstname"
          id="firstN"
          onChange={(e) => e.target.value}
          required
        />
        <br />
        <input
          placeholder="Lastname"
          id="secondN"
          onChange={(e) => e.target.value}
          required
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
