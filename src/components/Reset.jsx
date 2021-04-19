import React, { useState } from "react";

const Reset = () => {
  const [mail, setMail] = useState("");
  const forget = () => {
    console.log(mail);
    var data = {
      mail: mail,
    };
    fetch("https://login-logout-app-mern.herokuapp.com/reset", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "sent")
          alert("Check your Mail for reset password");
      });
    setMail("");
  };
  return (
    <div>
      <h1 className="text-center mt-5">Reset Password</h1>

      <div className="reset">
        <input
          type="text"
          placeholder="Enter your mail-id"
          className="rest-input"
          onChange={(e) => setMail(e.target.value)}
          value={mail}
        />
        <button className="btn btn-danger" onClick={forget}>
          Send
        </button>
      </div>
    </div>
  );
};
export default Reset;
