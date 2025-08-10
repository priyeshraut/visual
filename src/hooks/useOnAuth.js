import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const useOnAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
         if (user) {
          const {displayName, photoURL} = user;
          dispatch(addUser({ displayName, photoURL }));
          navigate('/');
        } else {
          dispatch(removeUser());
          navigate('/signin');
        }
    });

    // Unsiubscribe when component unmounts
    return () => unsubscribe();
  }, []);
};

export default useOnAuth;
