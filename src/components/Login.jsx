import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");

  const [hide, setHide] = useState("true");
  const history = useHistory();

  useEffect(() => {
    if (mail.length > 0 && pass.length > 0) setHide(false);
    else setHide(true);
  }, [mail, pass]);

  const submit = (e) => {
    e.preventDefault();
    var data = {
      mail: mail,
      password: pass,
    };
    fetch("https://login-logout-app-mern.herokuapp.com/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message == "allow") {
          //   console.log(data.userToken);
          localStorage.setItem("auth", JSON.stringify(data.userToken));
          window.location = "/home";
        } else {
          alert(data.message);
        }
      });
    setMail("");
    setPass("");

    // console.log(message);
  };
  return (
    <form>
      <div className="title text-center mb-5">
        <h1>LOGIN</h1>
      </div>
      <div className="form-reg">
        <div class="form-group col-md-4 col-lg-6 col-sm-12">
          <label for="inputEmail4">Email</label>
          <input
            type="email"
            class="form-control"
            id="inputEmail4"
            placeholder="Email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
        </div>
        <div class="form-group col-md-4 col-lg-6 col-sm-12">
          <label for="inputPassword4">Password</label>
          <input
            type="password"
            class="form-control"
            id="inputPassword4"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>

        <div className="btn mt-5">
          <button
            type="submit"
            disabled={hide}
            class="btn btn-primary btn-center"
            onClick={submit}
          >
            Login
          </button>
          <button
            class="btn btn-warning ml-5"
            onClick={() => history.push("/register")}
          >
            Register
          </button>
        </div>
      </div>

      {/* </div> */}
    </form>
  );
};
export default Login;
