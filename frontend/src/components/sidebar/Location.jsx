import InputField from "../InputField";

function Location({ handleChangefilter }) {
  return (
    <div>
      <h4 className="text-stone-700 text-lg mb-2">Location</h4>
      <div className="text-stone-500">
        {/* <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChangefilter}
          />
          <span className="checkmark"></span>All
        </label> */}
        <InputField
          handleChangefilter={handleChangefilter}
          value=""
          title="all"
          name="text"
        />
        <InputField
          handleChangefilter={handleChangefilter}
          value="bangladesh"
          title="Bangladesh"
          name="text"
        />
        <InputField
          handleChangefilter={handleChangefilter}
          value="london"
          title="London"
          name="text"
        />
        <InputField
          handleChangefilter={handleChangefilter}
          value="boston"
          title="Boston"
          name="text"
        />
      </div>
    </div>
  );
}

export default Location;
