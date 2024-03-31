// https://auth-rg69.onrender.com/api/auth/signup
// https://auth-rg69.onrender.com/api/auth/signin

import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Sigup from "./pages/sigup";
import Home from "./pages/home";
import * as React from "react";

function App() {
  let [token, setToken] = React.useState(localStorage.getItem("token"));
  console.log(token);

  return (
    <Routes>
      {<Route element={<Home />} path="/"></Route>}
      {<Route element={<Sigup />} path="/signup"></Route>}
      {<Route element={<Login />} path="/login"></Route>}
    </Routes>
  );
}

export default App;
