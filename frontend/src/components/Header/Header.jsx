import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import useAuth from "../../hooks/useAuth";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const auth = useAuth();
  const navigate = useNavigate();
  const navItems = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/my-job",
      title: "My jobs",
    },
    {
      path: "/salary",
      title: "Salary Estimate",
    },
    {
      path: "/post-job",
      title: "Post a Job",
    },
  ];
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <header className="max-w-screen-2xl container text-stone-200 mx-auto xl:px-24 px-4 z-50 bg-white p-5 sticky top-0 shadow-sm">
      <nav className="flex items-center justify-between ">
        <Link
          to={"/"}
          className="flex items-center font-mono  font-bold  text-2xl"
        >
          Job
          <span className="text-[#388697] font-serif  font-bold">Hostely</span>
        </Link>
        {/* {nav item for large device} */}
        <ul className="hidden md:flex gap-12">
          {navItems.map(({ path, title }) => (
            <li key={path} className="text-base ">
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
        {/* singup and login button */}
        {auth ? (
          <div className="text-stone-900 flex justify-center items-center gap-3">
            <div className="profile flex justify-center items-center gap-1">
              <div className="proIcon text-[#388697] font-extrabold text-3xl">
                <CgProfile />
              </div>
              <h2 className="text-stone-600">Razib Dash</h2>
            </div>
            <button
              onClick={handleLogout}
              className="bg-[#388697] border-1 text-slate-100 py-2 px-5 rounded"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="text-base text-stone-600 font-medium space-x-5 hidden md:block lg:block">
            <Link to="/login" className="py-2 px-5 border rounded">
              Login
            </Link>
            <Link
              className="py-2 px-5 border rounded bg-[#388697] text-stone-50"
              to="/sign-up"
            >
              Sign Up
            </Link>
          </div>
        )}

        {/* mobile menu */}
        <div className="md:hidden block">
          <button onClick={handleMenuToggler}>
            {isMenuOpen ? (
              <FaXmark className="w-5 h-5 text-stone-600" />
            ) : (
              <FaBarsStaggered className="w-5 h-5 text-stone-600" />
            )}
          </button>
        </div>
      </nav>
      {/* nav item for mobile */}
      {isMenuOpen && (
        <div className="mt-2">
          <ul>
            {navItems.map(({ path, title }) => (
              <li key={path} className="text-base  p-3">
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {title}
                </NavLink>
              </li>
            ))}
            <li className="p-3 inline-block">
              <Link to="/login">Login</Link>
            </li>
            <li className="p-3 inline-block">
              <Link
                className="p-2 border rounded bg-blue-400 text-stone-50"
                to="/sign-up"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
