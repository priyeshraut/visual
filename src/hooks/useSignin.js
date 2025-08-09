import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";

const useSignin = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passValue, setPassValue] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispath = useDispatch();
  const navigate = useNavigate();

  const handelBtnClick = () => {
    const message = checkValidData(name.current?.value, email.current?.value, password.current?.value);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              dispath(addUser({ displayName: auth.currentUser.displayName }));
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          navigate("/");
        })
        .catch(() => {
          setErrorMessage("Please, fill the Sign Up form");
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(() => {
          navigate("/");
        })
        .catch(() => {
          setErrorMessage("incorrect email/password");
        });
    }
  };

  const handleSignWithGoogle = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const { displayName, photoURL } = user;
        dispath(addUser({ displayName, photoURL }));
        navigate("/");
      })
      .catch(() => {
        setErrorMessage("Something went wrong please try again after some time");
      });
  };

  return {
    isSignInForm,
    setIsSignInForm,
    name,
    nameValue,
    setNameValue,
    email,
    emailValue,
    setEmailValue,
    password,
    passValue,
    setPassValue,
    errorMessage,
    handelBtnClick,
    handleSignWithGoogle,
  };
};

export default useSignin;
