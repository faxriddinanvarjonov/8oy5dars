import { useRef } from "react";
import * as React from "react";
import { useNavigate } from "react-router-dom";

function Sigup() {
  let navigate = useNavigate();
  let username = React.useRef(null);
  let email = React.useRef(null);
  let password = React.useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    interface user {
      username: string;
      email: string;
      password: string;
    }
    let user = {
      username: username.current.value,
      email: email.current.value,
      password: password.current.value,
    };

    fetch("https://auth-rg69.onrender.com/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem("token", "true");
        data.message == "User registered successfully!" && navigate("/login");
      })
      .catch((err) => console.log(err));
    console.log(user);
  }

  return (
    <section className="h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-400 container w-full max-w-[500px] mx-auto rounded-xl p-6"
      >
        <h1 className="text-black text-center text-3xl font-bold">sigup</h1>
        <label className="text-black text-sm flex py-2" htmlFor="1">
          Username
        </label>
        <input
          id="1"
          type="text"
          className="input w-full"
          placeholder="Username"
          ref={username}
        />
        <label className="text-black text-sm flex py-2" htmlFor="2">
          Email
        </label>
        <input
          type="text"
          id="2"
          className="input w-full"
          placeholder="Email"
          ref={email}
        />
        <label className="text-black text-sm flex py-2" htmlFor="3">
          Password
        </label>
        <input
          id="3"
          type="text"
          className="input w-full"
          placeholder="Password"
          ref={password}
        />
        <button className="btn w-full mt-5 btn-success text-gray-50 tracking-widest font-bold text-lg">
          SUBMIT
        </button>
      </form>
    </section>
  );
}

export default Sigup;
