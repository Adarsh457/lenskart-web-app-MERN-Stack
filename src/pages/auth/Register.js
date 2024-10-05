import React from 'react'
import Form from '../../components/shared/Form'
import Navbar from '../../components/Navbar'

const Register = () => {
  return (
    <>
      <div className="relative h-screen ">
        <Navbar />
        <div className=" w-[100px] h-24 -ml-4 -mt-4 md:w-[200px] md:h-48  bg-blue-600 md:-ml-10 md:-mt-14 rounded-r-full rounded-b-full"></div>

        <div className=" absolute bottom-2 left-10 md:bottom-20 md:left-44 w-5 h-5 md:w-10 md:h-10">
          <span class="relative flex h-5 w-5 md:h-10 md:w-10">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-5 w-5 md:h-10 md:w-10 bg-sky-500"></span>
          </span>
        </div>

        <div className="absolute top-28 right-12 w-5 h-5 md:top-40 md:right-44 md:w-10 md:h-10">
          <span class="relative flex h-5 w-5 md:h-10 md:w-10">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-5 w-5 md:h-10 md:w-10 bg-red-500"></span>
          </span>
        </div>

        <div className=" absolute w-5 h-5 -bottom-24 right-1/2 md:-bottom-8 md:w-10 md:h-10">
          <span class="relative flex w-5 h-5 md:h-10 md:w-10">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full w-5 h-5 md:h-10 md:w-10 bg-yellow-500"></span>
          </span>
        </div>

        <div className="rounded shadow-2xl flex flex-wrap md:flex-row items-center m-auto w-[85%] p-4  md:w-[60%] -mt-10 md:p-8 md:-mt-12">
          <img
            src={process.env.PUBLIC_URL + "/signup.svg"}
            alt=""
            className='m-auto w-[150px]  md:w-[300px]'
          />
          <div className="">
            <Form formTitle="Register" submitBtn="Register" formType="register" />
          </div>
        </div>
        <div className="absolute w-[100px] h-24 -bottom-32 -right-4 md:-bottom-10 md:-right-10 md:w-[200px] md:h-48 bg-blue-600 rounded-l-full rounded-t-full"></div>
      </div>
    </>
  )
}

export default Register