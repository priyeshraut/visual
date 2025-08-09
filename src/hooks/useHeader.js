import { signOut } from "firebase/auth";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { removeUser } from "../utils/userSlice";

const useHeader = () => {
  const dispatch = useDispatch()
  const headerRef = useRef(null);
  const [showData, setShowData] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const [headerHeight, setHeaderHeight] = useState(0);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/signin");
      })
      .catch(() => {
        navigate("/error");
      });
  };

  const handleToggleVisibility = () => {
    setShowData((prev) => !prev);
  };

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (headerRef.current) {
        if (lastScrollY < window.scrollY) {
          headerRef.current.style.backgroundColor = `#0F1014`;
          headerRef.current.style.opacity = `.8`;
          headerRef.current.style.transition = `all ease-in .5s`;
        } else {
          headerRef.current.style.backgroundColor = "transparent";
          headerRef.current.style.transition = `all ease-in-out .5s`;
        }
        lastScrollY = window.scrollY;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headerHeight]);

  return {headerRef, user, showData, navigate, handleSignOut, handleToggleVisibility};
};

export default useHeader;
