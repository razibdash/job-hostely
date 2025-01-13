import { useEffect, useState } from "react";
import { FiCalendar, FiClock, FiDollarSign, FiMapPin } from "react-icons/fi";
import { useParams } from "react-router-dom";
import Loading from "./loader/Loading";
function ViewJob() {
  const { id } = useParams();
  const [jobs, setJobs] = useState([]);
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  //   const {
  //     companyName,
  //     jobTitle,
  //     logo,
  //     minPrice,
  //     maxPrice,
  //     salaryType,
  //     jobLocation,
  //     experinceLevel,
  //     employmentType,
  //     jobDescriptions,
  //     postingDate,
  //   } = data;
  useEffect(() => {
    fetch("http://localhost:5000/api/all-jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        const result = data.filter((job) => job._id == id);
        setData(result);
        setTimeout(() => {
          setIsLoading(false);
        }, 4000);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  console.log(data);
  data.map((dt) => {
    console.log(dt._id);
  });

  return (
    <section className="card hover:shadow-lg transition-all rounded">
      {isLoading ? (
        <Loading />
      ) : (
        data.map((dt) => (
          <div
            key={dt._id}
            className="flex gap-4 flex-col sm:flex-row items-start"
          >
            <img src={dt.logo} alt="not found!" />
            <div>
              <h4 className="text-slate-600 mb-1">{dt.companyName}</h4>
              <h3 className="text-lg font-semibold">{dt.jobTitle}</h3>
              <div className="flex flex-wrap items-center gap-2">
                <span className="flex items-center">
                  <FiMapPin />
                  {dt.jobLocation}
                </span>
                <span className="flex items-center">
                  <FiClock />
                  {dt.employmentType}
                </span>
                <span className="flex items-center">
                  <FiDollarSign />
                  {`${dt.minPrice}k- ${dt.maxPrice}k`}
                </span>
                <span className="flex items-center">
                  <FiCalendar />
                  {dt.postingDate}
                </span>
              </div>
              <p className="text-base text-stone-400">{dt.jobDescriptions}</p>
            </div>
          </div>
        ))
      )}
    </section>
  );
}

export default ViewJob;
