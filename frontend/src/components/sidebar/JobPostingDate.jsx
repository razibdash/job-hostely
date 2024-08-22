import InputField from "../InputField";

// eslint-disable-next-line react/prop-types
function JobPostingDate({ handleChangefilter }) {
  const now = new Date();

  const twentyFoutYearAge = new Date(now - 24 * 60 * 60 * 1000);
  const savenDayAge = new Date(now - 7 * 24 * 60 * 60 * 1000);
  const thirtyDaysAgo = new Date(now - 30 * 24 * 60 * 60 * 1000);

  //convert date to string
  const twentyFoutYearAgeDate = twentyFoutYearAge.toISOString().slice(0, 10);

  const savenDayAgeDate = savenDayAge.toISOString().slice(0, 10);

  const thirtyDaysAgoDate = thirtyDaysAgo.toISOString().slice(0, 10);

  return (
    <div>
      <h1 className="text-lg text-slate-700 mb-4">Date of posting</h1>
      <div className="text-stone-500">
        <InputField
          type="radio"
          name="test"
          title="All"
          handleChangefilter={handleChangefilter}
        />
        <InputField
          type="radio"
          name="test"
          title="Last 24 Hours"
          value={twentyFoutYearAgeDate}
          handleChangefilter={handleChangefilter}
        />
        <InputField
          type="radio"
          name="test"
          title="Last 7 Days"
          value={savenDayAgeDate}
          handleChangefilter={handleChangefilter}
        />
        <InputField
          type="radio"
          name="test"
          title="Last month"
          value={thirtyDaysAgoDate}
          handleChangefilter={handleChangefilter}
        />
      </div>
    </div>
  );
}

export default JobPostingDate;
