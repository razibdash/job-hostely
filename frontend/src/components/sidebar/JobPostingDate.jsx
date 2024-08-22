import InputField from "../InputField";

function JobPostingDate({ handleChangefilter }) {
  const date = new Date();
  console.log(date.toLocaleDateString());
  return (
    <div>
      <h1 className="text-lg text-slate-700 mb-4">Date of posting</h1>
      <div>
        <InputField
          type="radio"
          name="test"
          title=""
          handleChangefilter={handleChangefilter}
        />
        <InputField
          type="radio"
          name="test"
          title="test2"
          handleChangefilter={handleChangefilter}
        />
        <InputField
          type="radio"
          name="test"
          title="test3"
          handleChangefilter={handleChangefilter}
        />
        <InputField
          type="radio"
          name="test"
          title="test4"
          handleChangefilter={handleChangefilter}
        />
      </div>
    </div>
  );
}

export default JobPostingDate;
