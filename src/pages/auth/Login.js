import React from "react";
import Form from "../../components/shared/Form";
import Navbar from "../../components/Navbar";

const Login = () => {
  return (
    <>
      <div className="relative h-screen overflow-hidden md:overflow-y-auto ">
        <Navbar />
        <div className=" w-[100px] h-24 -ml-4 -mt-4 md:w-[200px] md:h-48  bg-blue-600 md:-ml-10 md:-mt-14 rounded-r-full rounded-b-full"></div>

        <div className="rounded shadow-2xl flex flex-wrap md:flex-row items-center m-auto w-[85%] p-4 md:w-[60%] md:p-8  md:-mt-24">
          <img
            src={process.env.PUBLIC_URL + "/login.svg"}
            alt=""
            className='m-auto w-[150px]  md:w-[300px]'
          />
          <div className="">
            <Form formTitle="Login" submitBtn="Login" formType="login" />
          </div>
        </div>
        <div className="absolute w-[100px] h-24 -bottom-2 -right-4 md:-bottom-10 md:-right-10 md:w-[200px] md:h-48 bg-blue-600 rounded-l-full rounded-t-full"></div>
      </div>
    </>
  );
};

export default Login;
