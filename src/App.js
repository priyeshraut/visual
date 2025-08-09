import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import useOnAuth from "./hooks/useOnAuth";
import MobileNavigation from "./components/MobileNavigation";
import useScrollReset from "./hooks/useScrollReset";

const App = () => {
  useScrollReset();
  const location = useLocation();
  useOnAuth();

  return (
    <>
      {location.pathname !== "/signin" && <Header />}
      <div className="min-h-[80vh]">
        <Outlet />
      </div>
      {location.pathname !== "/signin" && <Footer />}
      {location.pathname !== "/signin" && <MobileNavigation />}
    </>
  );
};

export default App;
