import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const User = () => {
  const [data, setData] = useState([]);
  const history = useHistory();
  useEffect(() => {
    fetch("https://login-logout-app-mern.herokuapp.com/home", {
      headers: {
        auth: `${JSON.parse(localStorage.getItem("auth"))}`,
      },
    })
      .then((res) => res.json())
      .then((ele) => setData(ele))
      .catch((e) => alert(e.message));
  }, []);
  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    history.push("/login");
  };
  return (
    <div>
      <h5>{JSON.stringify(data)}</h5>
      <button className="btn btn-danger mt-5" onClick={logout}>
        Logout
      </button>
    </div>
  );
};
export default User;
