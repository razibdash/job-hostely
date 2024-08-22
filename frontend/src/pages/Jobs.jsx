// eslint-disable-next-line react/prop-types
function Jobs({ result }) {
  return (
    <>
      <div>
        <h3 className=" text-stone-600 text-2xl ">{result.length} Jobs</h3>
      </div>
      <section> {result}</section>
    </>
  );
}

export default Jobs;
