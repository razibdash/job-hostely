import { Link } from "react-router-dom";
import { FiCalendar, FiClock, FiDollarSign, FiMapPin } from "react-icons/fi";
function Card({ data }) {
  const {
    companyName,
    jobTitle,
    logo,
    minPrice,
    maxPrice,
    salaryType,
    jobLocation,
    experinceLevel,
    employmentType,
    jobDescriptions,
    postingDate,
  } = data;
  return (
    <section className="card hover:shadow-lg transition-all rounded">
      <Link to={"/"} className="flex gap-4 flex-col sm:flex-row items-start">
        <img src={logo} alt="" />
        <div>
          <h4 className="text-slate-600 mb-1">{companyName}</h4>
          <h3 className="text-lg font-semibold">{jobTitle}</h3>
          <div className="flex flex-wrap items-center gap-2">
            <span className="flex items-center">
              <FiMapPin />
              {jobLocation}
            </span>
            <span className="flex items-center">
              <FiClock />
              {employmentType}
            </span>
            <span className="flex items-center">
              <FiDollarSign />
              {`${minPrice}k- ${maxPrice}k`}
            </span>
            <span className="flex items-center">
              <FiCalendar />
              {postingDate}
            </span>
          </div>
          <p className="text-base text-stone-400">{jobDescriptions}</p>
        </div>
      </Link>
    </section>
  );
}

export default Card;
