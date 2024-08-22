import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa6";
function Newslatter() {
  return (
    <div>
      <div>
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaEnvelopeOpenText /> Email me for jobs
        </h3>
        <p className="text-slate-500 text-base mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          recusandae!
        </p>
        <div className="w-full space-y-4">
          <input
            className="w-full block py-2 pl-3 border focus:outline-none"
            type="email"
            name="email"
            placeholder="name@gamil.com"
          />
          <input
            className="bg-[#388697] px-2 text-stone-50 w-full text-lg cursor-pointer font-semibold rounded py-2"
            type="submit"
            value="Subscribe"
          />
        </div>
      </div>

      {/* second part */}
      <div className="mt-10">
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaRocket /> Get notice faster
        </h3>
        <p className="text-slate-500 text-base mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          recusandae!
        </p>
        <div className="w-full space-y-4">
          <input
            className="bg-[#388697] px-2 text-stone-50 w-full text-lg cursor-pointer font-semibold rounded py-2"
            type="submit"
            value="Upload your resume"
          />
        </div>
      </div>
    </div>
  );
}

export default Newslatter;
