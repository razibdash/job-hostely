import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from "../components/loader/Loading";
function MyJobs() {
  const email = "rajib@gmail.com";
  const [jobs, setJobs] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  //set current page
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    setIsLoading(false);
    fetch("http://localhost:5000/api/myJobs/rajib")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [searchText]);
  //pagination
  const indexOfLastItems = currentPage * itemsPerPage;
  const indexOfFristItems = indexOfLastItems - itemsPerPage;
  const currentJobs = jobs.slice(indexOfFristItems, indexOfLastItems);

  //Next page And previous page Bottons

  const nextPage = () => {
    if (indexOfLastItems < jobs.length) {
      setCurrentPage(currentPage + 1);
    }
  };
  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
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
  const handleDelete = async (id) => {
    const { data } = await axios
      .delete(`http://localhost:5000/api/job/${id}`)
      .then((response) => {
        setJobs((prevJob) => prevJob.filter((job) => job._id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <div className="my-job-container p-2  mt-10 rounded-t-md  bg-[#388697]">
        <h1 className="text-center uppercase font-semibold text-stone-100 text-2xl p-4">
          All My Jobs
        </h1>
        <div className="text-center p-1 mb-10">
          <input
            className="xl:rounded-l-lg  md:rounded-l-lg lg:rounded-l-lg focus:outline-none px-2 py-1 xl:w-3/5 md:w-2/3 lg:w-2/3 w-full mb-2"
            type="text"
            name="search"
            placeholder="search your job"
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
      <section className=" container bg-white shadow mb-10">
        <div className="w-full flex justify-between items-center p-2">
          <h1 className="text-stone-700 uppercase font-semibold">All jobs</h1>
          <Link to={"/post-job"}>
            <button className="bg-[#388697] text-stone-100 px-2 py-1 font-semibold rounded">
              Post a Job
            </button>
          </Link>
        </div>
        {/* this is table section */}
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  No.
                </th>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Company Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Salary
                </th>
                <th scope="col" className="px-6 py-3">
                  Edit
                </th>
                <th scope="col" className="px-6 py-3">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <div className="flex justify-center items-center">
                  <Loading />
                </div>
              ) : (
                currentJobs.map((job, index) => (
                  <tr key={index} className="bg-white border-b ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium  whitespace-nowrap "
                    >
                      {index + 1}
                    </th>
                    <td className="px-6 py-4">{job.jobTitle}</td>
                    <td className="px-6 py-4">{job.companyName}</td>
                    <td className="px-6 py-4">{`${job.minPrice}k - ${job.maxPrice}k `}</td>
                    <td className="px-6 py-4">
                      <Link to={`/edit-job/${job._id}`}>
                        <button className="bg-[#388697] text-stone-100 py-1 px-3 rounded">
                          Edit
                        </button>
                      </Link>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleDelete(job._id)}
                        className="bg-red-400 text-stone-100 py-1 px-2 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="text-red-400 font-semibold mb-4 flex justify-center items-center gap-4">
          {currentPage > 1 && (
            <button className="m-2" onClick={previousPage}>
              Previous
            </button>
          )}
          {indexOfLastItems < jobs.length && (
            <button className="text-[#388697] m-4" onClick={nextPage}>
              Next
            </button>
          )}
        </div>
      </section>
    </div>
  );
}

export default MyJobs;
