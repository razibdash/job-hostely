import { useForm } from "react-hook-form";

function PostJob() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (values) => console.log(values);
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      {/* form  */}
      <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg ">Job title</label>
              <input
                type="text"
                defaultValue={"web developer"}
                {...register("jobTitle")}
              />
            </div>
          </div>
          <button className="my-5" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostJob;
