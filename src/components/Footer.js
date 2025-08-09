import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="bg-black text-center p-1 mb-16 exact426:mb-0">
      <div className="text-white text-2xl my-4">
        <FontAwesomeIcon className="mx-3 cursor-pointer" icon={faInstagram} />
        <FontAwesomeIcon className="mx-3 cursor-pointer" icon={faFacebook} />
        <FontAwesomeIcon className="mx-3 cursor-pointer" icon={faTwitter} />
      </div>
      <div className="my-4">
        <p className="text-white text-md">
          All rights reserved by Visual @{new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
