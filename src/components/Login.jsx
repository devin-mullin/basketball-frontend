import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Login({ user, setUser, loggedIn, setLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  function userLogIn(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("https://nameless-ravine-11360.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((data) => {
          localStorage.setItem("token", data.jwt);
          setUser({
            username: data.user.username,
            id: data.user.id,
          });
        });
        alert(
          "welcome to the GREATEST FANTASY BASKETBALL APP EVER CREATED by me"
        );
        setLoggedIn(true);
        setUsername("");
        setPassword("");
        navigate("/");
      } else {
        alert("invalid credentials, try again or sign up!");
      }
    });
  }

  function doLogOut() {
    localStorage.removeItem("token");
    setLoggedIn(false);
    setUser([]);
  }

  return (
    <>
      {loggedIn ? (
        <div align="center">
          <p className="headers">
            <strong>
              glad to see basketball is your favorite sport, too,{" "}
              {user.username}
            </strong>
          </p>
          <Button variant="outline-danger" align="center" onClick={doLogOut}>
            Log Out
          </Button>
        </div>
      ) : (
        <Form className="login" onSubmit={(e) => userLogIn(e)}>
          <h4>
            <strong>who are you?</strong>
          </h4>
          <label>
            username:<span> </span>
            <br />
            <input
              className="label"
              type="text"
              id="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <span> </span>
          <br />
          <label>
            password:<span> </span>
            <br />
            <input
              className="label"
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <span> </span>
          <br />
          <Button
            align="center"
            variant="outline-info"
            className="text-white m-2 2 2 2"
            type="submit"
          >
            Log In
          </Button>
        </Form>
      )}
    </>
  );
}

export default Login;
