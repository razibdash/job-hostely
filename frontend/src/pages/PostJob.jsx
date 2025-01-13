import { useState } from "react";
import { useForm } from "react-hook-form";
import Creatable from "react-select/creatable";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function PostJob() {
  const [selectedOption, setSelectedOption] = useState(null);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (values) => {
    const token = localStorage.getItem("token");
    values.skills = selectedOption;
    try {
      axios
        .post("http://localhost:5000/api/job-post", values, {
          headers: {
            Authorization: token,
          },
        })
        .then(() => {
          toast("post is successfull");
          navigate("/my-job");
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  const options = [
    { value: "HTML", label: "HTML" },
    { value: "C", label: "C" },
    { value: "C++", label: "C++" },
    { value: "JAVA", label: "JAVA" },
    { value: "javascript", label: "javascript" },
    { value: "JAVA", label: "JAVA" },
  ];
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      {/* form  */}
      <div className=" py-10 px-4 lg:px-16">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* this is 1st row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg text-slate-800 font-semibold">
                Job Title
              </label>
              <input
                className="w-full  px-2 py-3 rounded focus:outline-none border text-stone-600"
                type="text"
                required
                placeholder="Web developer"
                {...register("jobTitle")}
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg text-slate-800 font-semibold">
                Company name
              </label>
              <input
                required
                className="w-full  px-2 py-3 rounded focus:outline-none border text-stone-600"
                type="text"
                placeholder="Collab"
                {...register("companyName")}
              />
            </div>
          </div>
          {/* this is 2nd row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 my-5">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg text-slate-800 font-semibold">
                Minimum Salary
              </label>
              <input
                className="w-full  px-2 py-3 rounded focus:outline-none border text-stone-600"
                type="text"
                placeholder="$20k"
                {...register("minPrice")}
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg text-slate-800 font-semibold">
                Maximum salary
              </label>
              <input
                type="text"
                className="w-full  px-2 py-3 rounded focus:outline-none border text-stone-600"
                placeholder="$50K"
                {...register("maxPrice")}
              />
            </div>
          </div>
          {/* this is 3rd row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 my-5">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg text-slate-800 font-semibold">
                Salary type
              </label>
              <select
                className="w-full  px-2 py-3 rounded focus:outline-none border text-stone-400 bg-white "
                {...register("salaryType")}
              >
                <option value="">Choose your salary</option>
                <option value="Hourly">Hourly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg text-slate-800 font-semibold">
                Job Location
              </label>
              <input
                className="w-full  px-2 py-3 rounded focus:outline-none border text-stone-600"
                type="text"
                placeholder="bangladesh"
                {...register("jobLocation")}
              />
            </div>
          </div>

          {/* this is 4th row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mt-5">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg text-slate-800 font-semibold">
                Experience level
              </label>
              <select
                className="w-full px-2 py-3 rounded focus:outline-none border text-stone-400 bg-white"
                {...register("experienceLevel")}
              >
                <option value="">Choose your experience</option>
                <option value="no">no experience</option>
                <option value="Internship">Internship</option>
                <option value="Work Remotely">Work Remotely</option>
              </select>
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg text-slate-800 font-semibold">
                Job posting date
              </label>
              <input
                className="w-full  px-2 py-3 rounded focus:outline-none border text-stone-400"
                type="date"
                placeholder="2024-08-10"
                {...register("postingDate")}
              />
            </div>
          </div>

          {/* this is 5th row */}
          <div>
            <label className="block mb-2 text-lg text-slate-800 font-semibold mt-5">
              Required skills set
            </label>
            <Creatable
              className="w-full rounded focus:outline-none  text-stone-400"
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              isMulti
              onFocus={true}
            />
          </div>

          {/* this is 6th row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mt-5">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg text-slate-800 font-semibold">
                Company logo
              </label>
              <input
                type="text"
                className="w-full  px-2 py-3 rounded focus:outline-none border text-stone-400"
                placeholder="company logo url"
                {...register("logo")}
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg text-slate-800 font-semibold">
                Employment type
              </label>
              <select
                className="w-full  px-2 py-3 rounded focus:outline-none border text-stone-400 bg-white"
                {...register("employmentType")}
              >
                <option value="">Choose your salary</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Temporary">Temporary</option>
              </select>
            </div>
          </div>

          {/* this is 7th row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mt-5">
            <div className="w-full">
              <label className="block mb-2 text-lg text-slate-800 font-semibold">
                Job Descriptions
              </label>
              <textarea
                type="text"
                rows={5}
                cols={2}
                className="w-full   px-2 py-3 rounded focus:outline-none border text-stone-400"
                placeholder="job description"
                {...register("jobDescriptions")}
              />
            </div>
          </div>

          {/* this rows 8th */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mt-5">
            <div className="w-full">
              <label className="block mb-2 text-lg text-slate-800 font-semibold">
                Job post by
              </label>
              <input
                type="text"
                className="w-full   px-2 py-3 rounded focus:outline-none border text-stone-400"
                placeholder="post by"
                {...register("jobPostBy")}
              />
            </div>
          </div>

          <button
            className="my-5 bg-[#388697] text-white font-bold px-8 py-2 rounded hover:bg-[#3690a4] "
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostJob;
