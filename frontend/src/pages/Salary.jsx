import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/loader/Loading";

function Salary() {
  const [salary, setSalary] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("salary.json");
        setSalary(data);
        console.log(data);
        setLoader(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [searchText]);

  const handleSearch = () => {
    const filter = salary.filter(
      (sa) => sa.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    );
    setSalary(filter);
    setLoader(false);
  };
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <div className="my-job-container p-2  mt-10 rounded-t-md  bg-[#388697]">
        <h1 className="text-center uppercase text-stone-100 text-2xl font-semibold mt-4 ">
          Salary Estimate
        </h1>
        <p className="text-center text-sm  uppercase text-stone-100">
          <Link className="text-slate-100" to={"/"}>
            home
          </Link>{" "}
          / salary
        </p>
        <div className="text-center mt-4 p-1 mb-10">
          <input
            className="xl:rounded-l-lg  md:rounded-l-lg lg:rounded-l-lg focus:outline-none px-2 py-1 xl:w-3/5 md:w-2/3 lg:w-2/3 w-full mb-2"
            type="text"
            name="search"
            placeholder="search"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="border-1 bg-[#2f6773] md:rounded-r-lg lg:rounded-r-lg xl:rounded-r-lg text-stone-50 py-1 px-3 "
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      {/* this is salary section */}
      <section className="max-w-screen-2xl container bg-white shadow mb-10">
        <div>
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-4 lg:grid-cols-3 ">
            {loader ? (
              <div className="flex justify-center items-center">
                <Loading />
              </div>
            ) : (
              salary.map((sal) => (
                <div key={sal.id} className=" ">
                  <div className="card rounded">
                    <p className="bg-[#388697] h-5 w-5 rounded-full text-slate-100 font-semibold flex justify-center items-center p-4">
                      {sal.id}
                    </p>
                    <h1 className="mt-2 text-lg text-slate-700 font-semibold">
                      {sal.title}
                    </h1>
                    <h1 className="text-sm text-slate-500">{sal.salary}</h1>
                    <div className="flex justify-between items-center mt-2">
                      <p className="text-slate-500">{sal.status}</p>
                      <p className="text-slate-500">{sal.skills}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Salary;
