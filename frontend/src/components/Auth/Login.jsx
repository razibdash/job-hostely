import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsPersonLock } from "react-icons/bs";

function Login() {
  const loginData = {
    email: "",
    password: "",
  };
  const Navigate = useNavigate();
  const [login, setLogin] = useState(loginData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/login", login, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((result) => {
        localStorage.setItem("token", result.data.token);
        if (result.data.success == true) {
          toast("Login Success!");
          Navigate("/my-job");
        } else {
          toast("You are not registered to this service");
        }
      })
      .catch((err) => console.log(err.message));
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

        <form action="" method="post" onSubmit={handleSubmit}>
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
          <div className="flex flex-col mt-2">
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
              className="bg-[#388697] text-stone-100 mt-1 py-1 uppercase cursor-pointer px-2 rounded text-1xl font-semibold hover:bg-[#2d7080] hover:text-stone-50"
              type="submit"
              value="login"
            />
            <Link to="/sign-up" className="text-[#388697] ">
              create new?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
