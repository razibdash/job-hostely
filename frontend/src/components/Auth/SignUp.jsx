import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsPersonLock } from "react-icons/bs";
function SignUp() {
  const regiData = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
  };
  const [registration, setRagistration] = useState(regiData);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRagistration({ ...registration, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = "http://localhost:5000/api/signup";

    const sendData = async () => {
      await axios
        .post(url, registration)
        .then(() => {
          navigate("/login");
        })
        .catch((err) => {
          toast(err.message);
        });
    };
    sendData();
  };

  return (
    <div className="flex justify-center items-center ">
      <div className="fromBox bg-white w-96 p-4 mt-20 border-l-indigo-50  rounded-lg shadow-lg">
        <ToastContainer />
        <div className="flex justify-center items-center ">
          <BsPersonLock fontSize="50px" color="#388697" />
        </div>
        <h1 className=" text-center p-2 text-2xl font-bold">
          Job
          <span className="text-[#388697] font-serif  font-bold">Hostely</span>
        </h1>
        <form
          method="post"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col m-1">
            <label className="text-stone-500" htmlFor="firstName">
              First Name
            </label>
            <input
              className="border mt-1 px-2 rounded outline-none py-2"
              type="text"
              name="firstName"
              placeholder="first name"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-stone-500" htmlFor="lastName">
              Last Name
            </label>
            <input
              className="border mt-1 px-2 rounded outline-none py-2"
              type="text"
              name="lastName"
              placeholder="first name"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-stone-500" htmlFor="phone">
              Phone
            </label>
            <input
              className="border mt-1 px-2 rounded outline-none py-2"
              type="text"
              name="phone"
              placeholder="enter phone"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-stone-500" htmlFor="email">
              Email
            </label>
            <input
              className="border mt-1 px-2 rounded outline-none py-2"
              type="email"
              name="email"
              placeholder="enter email"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-stone-500" htmlFor="password">
              password
            </label>
            <input
              className="border mt-1 px-2 rounded outline-none py-2"
              type="password"
              name="password"
              placeholder="enter password"
              onChange={handleChange}
            />
          </div>
          <div className=" mt-4 flex justify-between items-center">
            <input
              className="bg-[#388697] text-stone-100 mt-1 py-1 uppercase cursor-pointer px-2 rounded text-1xl font-semibold hover:bg-lime-600 hover:text-stone-50"
              type="submit"
              value="sign up"
            />
            <Link to="/login" className="text-stone-400">
              already have an account?
              <p className="text-[#388697] inline-block ml-1">Login</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
