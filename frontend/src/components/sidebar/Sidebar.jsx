import Location from "./Location";
import SalaryBar from "./SalaryBar";

function Sidebar({ handleChangefilter, handleClickFilter }) {
  return (
    <div className="space-y-5">
      <h3 className="text-lg font-bold mb-2">Filters</h3>
      <Location handleChangefilter={handleChangefilter} />
      <SalaryBar
        handleChangefilter={handleChangefilter}
        handleClickFilter={handleClickFilter}
      />
    </div>
  );
}

export default Sidebar;
