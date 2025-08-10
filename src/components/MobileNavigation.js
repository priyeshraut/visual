import { mobileNavigation } from "../utils/constants";
import { NavLink } from "react-router-dom";

const MobileNavigation = () => {
  return (
    <section className="sm:hidden bg-[#0F1014] fixed w-full z-10 bottom-0 px-4 py-2 flex justify-around items-center">
      {mobileNavigation.map((nav) => {
        return (
          <NavLink
            key={nav.label}
            to={nav.href}
            className={({ isActive }) =>
              `text-center text-neutral-400 text-sm font-medium hover:text-neutral-50 ${
                isActive ? "text-neutral-50" : ""
              }`
            }
          >
           <div>
            {nav.icon}
          </div>
            <p>{nav.label}</p>
          </NavLink>
        );
      })}
    </section>
  );
};

export default MobileNavigation;
