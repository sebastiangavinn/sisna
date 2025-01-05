import React, { useState } from "react";
import { Link, useNavigate } from "react-router";

import { USERS } from "../../constants";

import LabelInput from "../../components/LabelInput";
import Button from "../../components/Button";

const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const user = USERS.find(
      (u) =>
        u.username === credentials.username &&
        u.password === credentials.password
    );

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));

      switch (user.role) {
        case "santri":
          window.location.href = "/beranda";
          break;
        case "pengajar":
          window.location.href = "/beranda";
          break;
        case "pengurus":
          window.location.href = "/pengurus/beranda";
          break;
      }
    } else {
      setError("Username atau Password salah");
    }
  };
  return (
    <div className="bg-[#347928] xl:rounded-3xl text-white p-8">
      <h1 className="font-extrabold text-3xl text-center mb-7">LOGIN</h1>
      {error && (
        <div className="bg-red-500 text-white p-2 mb-4 rounded">{error}</div>
      )}
      <form onSubmit={handleLogin}>
        <LabelInput
          label="Username"
          id="username"
          name="username"
          value={credentials.username}
          onChange={handleInputChange}
          required
        />
        <LabelInput
          label="Password"
          id="password"
          name="password"
          type="password"
          value={credentials.password}
          onChange={handleInputChange}
          required
        />
        <Button text="login" className="mt-4" />
      </form>
      <p className="text-base mt-2 text-center">
        Belum memiliki akun?{" "}
        <Link to="/register" className="underline text-[#FCCD2A] font-bold">
          Buat akun
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
