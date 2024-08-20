import { useEffect, useState } from "react";
import Banner from "../components/Banner/Banner";
import Card from "../components/Card/Card";
import Jobs from "./Jobs";
import Sidebar from "../components/sidebar/Sidebar";

function Home() {
  const [selectedCatagory, setSelectedCatagory] = useState(null);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);

  const [query, setQuery] = useState("");

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
      console.log(filteredJobs);
    }

    return filteredJobs.map((data, index) => <Card data={data} key={index} />);
  };

  const result = filteredData(jobs, selectedCatagory, query);

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
          <Jobs result={result} />
        </div>

        {/* right side */}
        <div className="bg-white p-4 rounded shadow">right</div>
      </div>
    </div>
  );
}

export default Home;
