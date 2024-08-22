import InputField from "../InputField";

// eslint-disable-next-line react/prop-types
function SalaryBar({ handleChangefilter, handleClickFilter }) {
  return (
    <>
      <div>
        <h4 className="text-slate-600 text-lg">Salary</h4>
        <div className="flex flex-wrap justify-between items-center mt-2">
          <button
            onClick={handleClickFilter}
            value="Hourly"
            className={`hover:bg-[#388697] hover:text-slate-100 px-4 py-1 rounded text-lg text-slate-600 border ${({
              isActive,
            }) => (isActive ? "active" : "")} `}
          >
            Hourly
          </button>
          <button
            onClick={handleClickFilter}
            value="Monthly"
            className="hover:bg-[#388697] px-4 py-1 rounded text-lg text-slate-600 border hover:text-slate-50"
          >
            Monthly
          </button>
          <button
            onClick={handleClickFilter}
            className="hover:bg-[#388697] px-4 py-1 rounded text-lg hover:text-slate-50 border text-slate-600"
            value="Yearly"
          >
            Yearly
          </button>
        </div>
        <div className="mt-4 text-stone-500">
          <InputField
            handleChangefilter={handleChangefilter}
            value=""
            title="All"
            name="text"
          />
          <InputField
            handleChangefilter={handleChangefilter}
            value={30}
            title="< 3000k"
            name="text"
          />
          <InputField
            handleChangefilter={handleChangefilter}
            value={50}
            title="< 50000k"
            name="text"
          />
          <InputField
            handleChangefilter={handleChangefilter}
            value={80}
            title="< 80000k"
            name="text"
          />
          <InputField
            handleChangefilter={handleChangefilter}
            value={100}
            title="< 100000k"
            name="text"
          />
        </div>
      </div>
    </>
  );
}

export default SalaryBar;
