import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
function Footer() {
  return (
    <div className="bg-slate-700 ">
      <div className="flex justify-center items-center m-auto text-white gap-8 p-4 py-10 text-2xl ">
        <FaFacebook />
        <FaLinkedin />
        <FaYoutube />
        <FaTwitter />
      </div>
      <div>
        <p className="text-stone-200 p-4 flex justify-center items-center">
          Copyright 2024 by avronil rajib
        </p>
      </div>
    </div>
  );
}

export default Footer;
