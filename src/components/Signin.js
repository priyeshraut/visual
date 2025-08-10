import useSignin from "../hooks/useSignin";
import googleLogo from "../images/google_logo.png";

const Signin = () => {
  const {
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
  } = useSignin();

  return (
    <div className="bg-bgBanner bg-no-repeat bg-cover h-screen flex justify-center items-center">
      <div className="bg-[#010000c5] border-none rounded flex flex-col gap-6 text-white mx-4 p-8 w-full max-w-sm ">
        <h2 className="text-2xl sm:text-3xl font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-4"
        >
          {!isSignInForm && (
            <input
              ref={name}
              onChange={(e) => setNameValue(e.target.value)}
              className="w-full rounded px-2 py-1 sm:py-3 bg-transparent border border-[#5E5F5F] border-solid"
              type="text"
              value={nameValue}
              placeholder="Full Name"
            />
          )}
          <input
            ref={email}
            onChange={(e) => setEmailValue(e.target.value)}
            className="w-full rounded px-2 py-1 sm:py-3 bg-transparent border border-[#5E5F5F] border-solid"
            type="email"
            value={emailValue}
            placeholder="Email"
            autoComplete="email"
          />
          <input
            ref={password}
            onChange={(e) => setPassValue(e.target.value)}
            className="w-full rounded px-2 py-1 sm:py-3 bg-transparent border border-[#5E5F5F] border-solid"
            type="password"
            value={passValue}
            placeholder="Password"
            autoComplete="current-password"
          />
          <p className="text-red-600 font-bold">{errorMessage}</p>
          <button
            onClick={handelBtnClick}
            className="px-2 py-1 sm:py-3 bg-red-500 text-white font-bold rounded text-md sm:text-xl cursor-pointer"
            type="submit"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
        </form>
        <div className="flex gap-2 justify-center items-center">
          <p className="text-xm sm:text-lg">
            {isSignInForm ? "New to Visual?" : "Have An Account?"}
          </p>
          <button
            onClick={() => setIsSignInForm(!isSignInForm)}
            className="font-bold text-md sm:text-xl"
          >
            {isSignInForm ? "Sign up" : "Sign In"}
          </button>
        </div>
        {/* <div className="w-full flex justify-center items-center border border-white rounded-md">
          <button
            type="button"
            className="flex justify-center items-center"
            onClick={handleSignWithGoogle}
          >
            <img className="w-14" src={googleLogo} alt="" />
            <p>Sign in with Google</p>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Signin;
