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
                    `text-lg font-medium duration-300 transform transition-all hover:text-neutral-100 ${
                      isActive ? "text-neutral-100" : "text-neutral-400"
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
            <div onClick={handleToggleVisibility} className="flex items-center">
              {user?.photoURL ? (
                <img
                  className="w-9 h-9 object-cover border rounded-full"
                  src={user.photoURL}
                  alt=""
                  onError={(e) => {
                    e.target.onerror = null; // infinite loop avoid
                    e.target.style.display = "none"; // Hide image  
                    e.target.parentNode.insertAdjacentHTML(
                      "afterbegin",
                      `<svg xmlns="http://www.w3.org/2000/svg" class="w-9 h-9 text-white border rounded-full p-2" fill="currentColor" viewBox="0 0 448 512">
                 <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zM313.6 288h-16.7c-22.2 10.3-46.9 16-72.9 16s-50.6-5.7-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"/>
                </svg>`
                    );
                  }}
                />
              ) : (
                <FontAwesomeIcon
                  className="text-lg text-white border rounded-full p-2"
                  icon={faUser}
                />
              )}
              <FontAwesomeIcon
                className="text-lg text-white p-2"
                icon={faAngleDown}
              />
            </div>
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
