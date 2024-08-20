import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
  return (
    <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4 bg-slate-50 p-5 sticky top-0 shadow">
      <nav className="flex items-center justify-between ">
        <a className="flex items-center gap-2 text-2xl" href="">
          JobPortal
        </a>
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
        <div className="text-base text-stone-600 font-medium space-x-5 hidden md:block lg:block">
          <Link to="/login" className="py-2 px-5 border rounded">
            Login
          </Link>
          <Link
            className="py-2 px-5 border rounded bg-blue-400 text-stone-50"
            to="/sign-up"
          >
            Sign-up
          </Link>
        </div>
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
