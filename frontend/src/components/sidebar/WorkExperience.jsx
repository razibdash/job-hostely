import InputField from "../InputField";

// eslint-disable-next-line react/prop-types
function WorkExperience({ handleChangefilter }) {
  return (
    <div>
      <h1 className="text-lg text-slate-700 mb-4">Work Experience</h1>

      <div className="text-stone-500">
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChangefilter}
          />
          <span className="checkmark"></span>Any experience
        </label>
        <InputField
          type="radio"
          name="test"
          title="Internship"
          value="Internship"
          handleChangefilter={handleChangefilter}
        />
        <InputField
          type="radio"
          name="test"
          title="Work remotely"
          value="Work remotely"
          handleChangefilter={handleChangefilter}
        />
      </div>
    </div>
  );
}

export default WorkExperience;
