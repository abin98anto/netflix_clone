import "./Footer.css";
import youtube_icon from "../../assets/youtube_icon.png";
import twitter_icon from "../../assets/twitter_icon.png";
import instagram_icon from "../../assets/instagram_icon.png";
import facebook_icon from "../../assets/facebook_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={youtube_icon} />
        <img src={twitter_icon} />
        <img src={instagram_icon} />
        <img src={facebook_icon} />
      </div>
      <ul>
        <li>Audio Descriptions</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Inverstor Relations</li>
        <li>Jobs</li>
        <li>Terms of use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Informations</li>
        <li>Contact Us</li>
      </ul>
      <p className="copyright-text">@ 1997-2003 Netflix, Inc.</p>
    </div>
  );
};

export default Footer;
