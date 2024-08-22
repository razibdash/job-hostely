import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Banner from "../components/Banner/Banner";
import Card from "../components/Card/Card";
import Jobs from "./Jobs";
import Sidebar from "../components/sidebar/Sidebar";
import Loading from "../components/loader/Loading";

function Home() {
  const [selectedCatagory, setSelectedCatagory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 6;

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setJobs(data);
      });
  }, []);

  //handle input change
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  //filter jobs by title
  const filterItems = jobs.filter(
    (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
  // console.log(filtterItems);

  //radio base filttering
  const handleChangefilter = (event) => {
    setSelectedCatagory(event.target.value);
  };

  //button base filltering
  const handleClickFilter = (e) => {
    setSelectedCatagory(e.target.value);
  };

  //calculate the index range
  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    return {
      startIndex,
      endIndex,
    };
  };

  //functoin for the next page
  const nextPage = () => {
    if (currentPage < Math.ceil(filterItems.length / itemPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  //function for previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  //main function for filtering

  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;

    //filtering input items
    if (query) {
      filteredJobs = filterItems;
    }
    //category filteing
    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({
          jobLocation,
          maxPrice,
          experienceLevel,
          salaryType,
          employmentType,
          postingDate,
        }) =>
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) <= parseInt(selected) ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase()
      );
    }

    //slice the data based on current page
    const { startIndex, endIndex } = calculatePageRange();

    filteredJobs = filteredJobs.slice(startIndex, endIndex);

    return filteredJobs.map((data, index) => <Card data={data} key={index} />);
  };

  const result = filteredData(jobs, selectedCatagory, query);
  setTimeout(() => {
    setIsLoading(false);
  }, 3000);
  return (
    <div className="">
      <Banner query={query} handleChange={handleChange} />
      {/* main content */}
      <div className=" mt-2 md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        {/* left side */}
        <div className="bg-white p-4 rounded shadow">
          <Sidebar
            handleChangefilter={handleChangefilter}
            handleClickFilter={handleClickFilter}
          />
        </div>

        <div className="col-span-2 bg-white p-4 rounded shadow">
          {isLoading ? (
            <Loading />
          ) : result.length > 0 ? (
            <Jobs result={result} />
          ) : (
            <>
              <div className="flex-wrap justify-center items-center">
                <h3 className=" text-stone-600 text-2xl ">
                  {result.length} Jobs
                </h3>
                <p className="text-stone-500 text-center">No Data Found!</p>
              </div>
            </>
          )}

          {/* pagination here */}
          {result.length >= 0 ? (
            <div className="flex justify-center items-center mt-4">
              <button
                className="border rounded p-1 px-4 text-slate-500 hover:bg-stone-300"
                onClick={prevPage}
                disabled={currentPage === 1}
              >
                <FaArrowLeft />
              </button>
              <span className="mx-2 text-stone-500">
                Page {currentPage} of-
                {Math.ceil(filterItems.length / itemPerPage)}
              </span>
              <button
                className="border rounded p-1 px-4 text-slate-500 hover:bg-stone-300"
                onClick={nextPage}
                disabled={
                  currentPage === Math.ceil(filterItems.length / itemPerPage)
                }
              >
                <FaArrowRight />
              </button>
            </div>
          ) : (
            ""
          )}
        </div>

        {/* right side */}
        <div className="bg-white p-4 rounded shadow">right</div>
      </div>
    </div>
  );
}

export default Home;
