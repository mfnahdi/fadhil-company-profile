import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faApple,
  faFacebook,
  faGooglePlay,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      style={{
        height: "50px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          listStyle: "none",
          padding: 0,
        }}
      >
        <a
          href="https://www.instagram.com/kfcindonesia"
          target="_blank"
          style={{ margin: "0 10px" }}
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a
          href="https://www.twitter.com/kfcindonesia"
          target="_blank"
          style={{ margin: "0 10px" }}
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a
          href="https://www.facebook.com/kfcindonesia"
          target="_blank"
          style={{ margin: "0 10px" }}
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="https://www.youtube.com/kfcindonesia"
          target="_blank"
          style={{ margin: "0 10px" }}
        >
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
      </div>
      <div style={{ margin: "0 10px", marginLeft: "500px" }}>
        <a
          href="https://play.google.com/store/apps/details?id=com.kfc.mobile"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGooglePlay} size="2x" />
        </a>
        <a
          href="https:/apps.apple.com/id/app/kfcku/id1474915867"
          target="_blank"
          style={{ marginLeft: "10px" }}
        >
          <FontAwesomeIcon icon={faApple} size="2x" />
        </a>
      </div>
      <div style={{ marginLeft: "650px", scrollBehavior: "smooth" }}>
        <Link href="/">
          <Image src="/logo-footer.png" alt="KFC Logo" width={60} height={60} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
