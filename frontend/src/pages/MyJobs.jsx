import { useEffect, useState } from "react";

function MyJobs() {
  const email = "rajib@gmail.com";
  const [jobs, setJobs] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
    fetch("http://localhost:5000/api/myJobs/rajib")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  //handle search function
  const handleSearch = () => {
    const filter = jobs.filter(
      (job) =>
        job.jobTitle.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    );
    // console.log(filter);
    setJobs(filter);
    setIsLoading(false);
  };
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <div className="my-job-container p-2  mt-10 rounded-t-md  bg-[#388697]">
        <h1 className="text-center uppercase text-stone-100 text-2xl p-4">
          All My Jobs
        </h1>
        <div className="text-center p-1">
          <input
            className="xl:rounded-l-lg  md:rounded-l-lg lg:rounded-l-lg focus:outline-none px-2 py-1 xl:w-3/5 md:w-2/3 lg:w-2/3 w-full mb-2"
            type="text"
            name="search"
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

      {/* this is table section */}
      <section className="py-1 container bg-stone-50">
        <div className="w-full"></div>
        <h1>table</h1>
      </section>
    </div>
  );
}

export default MyJobs;
