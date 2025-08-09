import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";

const useOnAuth = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
         if (user) {
          const {displayName, photoURL} = user;
          dispatch(addUser({ displayName, photoURL }));
        } else {
          dispatch(removeUser());
        }
    });

    // Unsiubscribe when component unmounts
    return () => unsubscribe();
  }, []);
};

export default useOnAuth;
