import { React, useState } from "react";
import InputType from "./InputType";
import { Link } from "react-router-dom";
import { handleLogin, handleRegister } from "../../services/authServices";

const Form = ({ formTitle, submitBtn, formType }) => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    phoneNumber:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div className=" p-3 md:border-l md:ml-10 md:p-5 ">
      <form onSubmit={(e) => {
        if(formType==='login') return handleLogin(e,formData.email,formData.password)
        else if(formType === 'register') return handleRegister(e,formData.userName,formData.phoneNumber,formData.email,formData.password)
      }}>
        <h1 className="mb-4 text-blue-500 font-bold tracking-wider">{formTitle}</h1>
        <hr />
        {(() => {
          //eslint-disable-next-line
          switch (true) {
            case formType === "login":
              // eslint-disable-next-line no-lone-blocks
              {
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
              }

              break;

            case formType === "register": {
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
            }

            default:
              break;
          }
        })()}

        <div className="mt-5">
        {
          formType === 'login' ? (
            <p className="font-bold">Not Registered yet ?
              <Link to='/register' className="text-blue-500" > Register !</Link>
            </p>
          ) : (
            <p className="font-bold">Already a User.
              <Link to='/login' className="text-blue-500"> Login !</Link>
            </p>
          )
        }
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