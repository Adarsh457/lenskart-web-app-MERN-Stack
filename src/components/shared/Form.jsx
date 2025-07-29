import { React, useState } from "react";
import InputType from "./InputType";
import { Link } from "react-router-dom";
import { handleLogin, handleRegister } from "../../services/authServices";
import { toast } from "react-toastify";

const Form = ({ formTitle, submitBtn, formType }) => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { userName, email, password, phoneNumber } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (formType === "login") {
      if (!email || !password) {
        return toast.error("All fields are required");
      }

      if (!emailRegex.test(email)) {
        return toast.error("Invalid email format");
      }

      return handleLogin(e, email, password);
    }

    if (formType === "register") {
      if (!userName || !email || !password || !phoneNumber) {
        return toast.error("All fields are required");
      }

      if (userName.trim().length < 3) {
        return toast.error("Username must be at least 3 characters long");
      }

      if (!emailRegex.test(email)) {
        return toast.error("Invalid email format");
      }

      if (!email.endsWith("@gmail.com")) {
        return toast.error("Only Gmail addresses are allowed");
      }

      if (password.length < 6) {
        return toast.error("Password must be at least 6 characters long");
      }

      const phone = String(phoneNumber);

      if (!/^\d{10}$/.test(phone)) {
        return toast.error("Phone number must be exactly 10 digits");
      }

      if (/^0/.test(phone)) {
        return toast.error("Phone number should not start with 0");
      }

      if (/^(\d)\1+$/.test(phone)) {
        return toast.error("Phone number cannot have all same digits");
      }

      const commonFakeNumbers = ["1234567890", "9999999999", "0123456789"];
      if (commonFakeNumbers.includes(phone)) {
        return toast.error("Please enter a valid phone number");
      }


      return handleRegister(e, userName, phoneNumber, email, password);
    }
  };
  return (
    <div className=" p-3 md:border-l md:ml-10 md:p-5 ">
      <form onSubmit={handleSubmit}>
        <h1 className="mb-4 text-blue-500 font-bold tracking-wider">
          {formTitle}
        </h1>
        <hr />
        {(() => {
          switch (true) {
            case formType === "login":
              return (
                <>
                  <InputType
                    inputType={"email"}
                    labelFor={"forEmail"}
                    labelText={"userEmail"}
                    name={"email"}
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <InputType
                    inputType={"password"}
                    labelFor={"forPassword"}
                    labelText={"password"}
                    name={"password"}
                    value={formData.password}
                    onChange={handleChange}
                  />
                </>
              );

            case formType === "register":
              return (
                <>
                  <InputType
                    inputType={"text"}
                    labelFor={"forUser"}
                    labelText={"userName"}
                    name={"userName"}
                    value={formData.userName}
                    onChange={handleChange}
                  />
                  <InputType
                    inputType={"email"}
                    labelFor={"forEmail"}
                    labelText={"userEmail"}
                    name={"email"}
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <InputType
                    inputType={"number"}
                    labelFor={"forNumber"}
                    labelText={"phoneNumber"}
                    name={"phoneNumber"}
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                  <InputType
                    inputType={"password"}
                    labelFor={"forPassword"}
                    labelText={"password"}
                    name={"password"}
                    value={formData.password}
                    onChange={handleChange}
                  />
                </>
              );

            default:
              return null;
          }
        })()}

        <div className="mt-5">
          {formType === "login" ? (
            <p className="font-bold">
              Not Registered yet ?
              <Link to="/register" className="text-blue-500">
                {" "}
                Register !
              </Link>
            </p>
          ) : (
            <p className="font-bold">
              Already a User.
              <Link to="/login" className="text-blue-500">
                {" "}
                Login !
              </Link>
            </p>
          )}
        </div>

        <div className="mt-4">
          <button
            className="border w-full tracking-wider text-sm md:text-base rounded-2xl p-2 mt-2 bg-blue-600 font-semibold text-white shadow-lg hover:bg-blue-500"
            type="submit"
          >
            {submitBtn}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
