import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Creatable from "react-select/creatable";
function UpdateJob() {
  const { id } = useParams();
  // console.log(id);
  const {
    jobTitle,
    companyName,
    minPrice,
    maxPrice,
    salaryType,
    employmentType,
    postingDate,
    experienceLevel,
    logo,
    jobLocation,
    jobPostBy,
    jobDescriptions,
    skills,
  } = useLoaderData();

  const [selectedOption, setSelectedOption] = useState(null);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (values) => {
    values.skills = selectedOption;
    try {
      const { data } = await axios
        .patch(`http://localhost:5000/api/update-job/${id}`, values)
        .then(() => navigate("/my-job"));
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
                defaultValue={jobTitle}
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
                defaultValue={companyName}
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
                defaultValue={minPrice}
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
                defaultValue={maxPrice}
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
                <option value={salaryType}>{salaryType}</option>
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
                defaultValue={jobLocation}
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
                <option value={experienceLevel}>{experienceLevel}</option>
                <option value="no experience">no experience</option>
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
                defaultValue={postingDate}
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
              defaultValue={skills}
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
                defaultValue={logo}
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
                <option value={employmentType}>{employmentType}</option>
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
                defaultValue={jobDescriptions}
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
                defaultValue={jobPostBy}
                {...register("jobPostBy")}
              />
            </div>
          </div>

          <button
            className="my-5 bg-[#388697] text-white font-bold px-8 py-2 rounded hover:bg-[#3690a4] "
            type="submit"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateJob;
