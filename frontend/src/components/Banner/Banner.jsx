import { FiMapPin, FiSearch } from "react-icons/fi";
// eslint-disable-next-line react/prop-types
function Banner({ handleChange, query }) {
  return (
    <div className=" max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-14">
      <h1 className="text-5xl font-bold text-slate-600 mb-3">
        Find your <span className="text-[#388697]">new job</span> today
      </h1>
      <p className="text-stone-400 text-lg mb-8 ">
        Thoursand of jobs in the computer,engineering and technology sectors are
        waiting for you.
      </p>

      <form>
        <div className="flex justify-start md:flex-row flex-col md:gap-0 gap-4 ">
          <div className="flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-300 md:w-1/2 w-full">
            <input
              type="text"
              name="title"
              placeholder="what positon looking for?"
              className="focus:outline-none block flex-1 border-0 bg-transparent py-1.5 pl-8 text-stone-500 placeholder:text-stone-500 focus:right-0 sm:text-sm sm:leading-6"
              value={query}
              onChange={handleChange}
            />
            <FiSearch className="absolute mt-2.5 ml-2 text-slate-500" />
          </div>
          <div className="flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-300 md:w-1/3 w-full">
            <input
              type="text"
              name="title"
              placeholder="Location?"
              className="focus:outline-none block flex-1 border-0 bg-transparent py-1.5 pl-8 text-stone-500 placeholder:text-stone-500 focus:right-0 sm:text-sm sm:leading-6"
              value={query}
              onChange={handleChange}
            />
            <FiMapPin className="absolute mt-2.5 ml-2 text-slate-500" />
          </div>
          <button
            type="submit"
            className="bg-[#388697] text-slate-100 py-2 px-8 md:rounded-s-none rounded"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default Banner;
