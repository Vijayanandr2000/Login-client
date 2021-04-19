import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Forget = () => {
  const history = useHistory();
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const reset = () => {
    var data = {
      mail: mail,
      pass: password,
    };
    fetch("https://login-logout-app-mern.herokuapp.com/forget-pass", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message == "password update") history.push("/login");

        alert(data.message);
      });
  };
  return (
    <div>
      <h1 className="text-center mt-5">RESET YOUR PASSWORD</h1>
      <div className="reset-forget">
        <input
          type="text"
          placeholder="Mail-Id"
          onChange={(e) => setMail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your new Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="reset-btn">
        <button className="btn btn-primary" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};
export default Forget;
