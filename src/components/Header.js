import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../images/logo.png";
import {
  faAngleDown,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import useHeader from "../hooks/useHeader";
import { navigation } from "../utils/constants";

const Header = () => {
  const {
    headerRef,
    user,
    showData,
    navigate,
    handleSignOut,
    handleToggleVisibility,
  } = useHeader();

  return (
    <header
      ref={headerRef}
      className="bg-gradient-to-b from-black to-transparent flex justify-between items-center p-4 sm:p-8 w-full h-20 fixed z-10"
    >
      <div className="flex justify-center gap-7 items-center">
        <Link to="/">
          <img className="cursor-pointer w-28 sm:w-40" src={logo} alt="logo" />
        </Link>

        <nav className="hidden sm:flex justify-center items-center gap-5">
          {navigation.map((nav) => {
            return (
              <div key={nav.label}>
                <NavLink
                  to={nav.href}
                  className={({ isActive }) =>
                    `text-neutral-400 text-lg font-medium duration-300 transform transition-all hover:text-neutral-100 ${
                      isActive ? "text-neutral-100" : ""
                    }`
                  }
                >
                  {nav.label}
                </NavLink>
              </div>
            );
          })}
        </nav>
      </div>
      <div className="flex justify-center items-center gap-8">
        <div>
          <FontAwesomeIcon
            onClick={() => navigate("/search")}
            icon={faMagnifyingGlass}
            className="text-white text-xl text-right cursor-pointer hidden sm:block"
          />
        </div>
        <div className="flex flex-col gap-2 justify-center items-center cursor-pointer relative group">
          <div className="flex gap-3">
            {user?.photoURL ? (
              <div onClick={handleToggleVisibility} className="flex justify-center items-center gap-1 w-9">
                <img className="wfull h-full object-cover border rounded-full" src={user.photoURL} alt="profile img"/>
                <FontAwesomeIcon
                  className="text-lg text-white p-2"
                  icon={faAngleDown}
                />
              </div>
            ) : (
              <div onClick={handleToggleVisibility}>
                <FontAwesomeIcon
                  className="text-lg text-white border rounded-full p-2"
                  icon={faUser}
                />
                <FontAwesomeIcon
                  className="text-lg text-white p-2"
                  icon={faAngleDown}
                />
              </div>
            )}
          </div>
          {showData && (
            <div className="borde-none bg-[#0F1014]/75 rounded p-2 absolute top-9 -right-4 -left-[7rem] hidden group-hover:block">
              <p className="text-lg text-white/85 cursor-default">
                {user?.displayName}
              </p>
              <hr></hr>
              <button
                onClick={handleSignOut}
                className="text-lg text-white/85"
                type="button"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
