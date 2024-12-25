import React from "react";
import { Link } from "react-router";

import LabelInput from "../../components/LabelInput";
import Button from "../../components/Button";

const RegisterPage = () => {
  return (
    <div className="bg-[#347928] xl:rounded-3xl text-white p-8">
      <h1 className="font-extrabold text-3xl text-center mb-7">REGISTRASI</h1>
      <LabelInput id="fullname" label="Nama Lengkap" name="fullname" required />
      <LabelInput id="email" label="Email" name="email" type="email" required />
      <LabelInput id="phoneNumber" label="No. Hp" name="phoneNumber" required />
      <LabelInput
        id="password"
        label="Password"
        name="password"
        required
        type="password"
      />
      <Button text="daftar" className="mt-4" />
      <p className="text-base mt-2 text-center">
        Sudah memiliki akun?{" "}
        <Link to="/login" className="underline text-[#FCCD2A] font-bold">
          Buat akun
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;
