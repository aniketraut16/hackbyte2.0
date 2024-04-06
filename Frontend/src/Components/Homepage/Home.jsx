
import { Link } from "react-router-dom";
import home from "../Images/home.png";
import "./Home.css";
import LandingPageCircle from "../Images/Ellipse 1.png";
import feature1 from "../Images/Teamwork PNG Transparent, Teamwork, Teamwork Clipart, 3d Villain, Team PNG Image For Free Download 1.png";
import feature2 from "../Images/Free Photo _ Bell reminder notification alert or alarm icon sign or symbol for application website ui on white background 3d rendering illustration 1.png";
import feature3 from "../Images/Money Clipart Vector, Money, Money Clipart, Fund, Transfer PNG Image For Free Download 1.png";

function Home() {
  return (
    <div>
      <div id="signinup">
        <Link to="/signin">Sign in</Link>
        <Link to="/login">Sign up</Link>
      </div>
      <div id="landing-page">
        <img src={home} alt="Banyan Tree" />
        <img src={LandingPageCircle} id="ellipse1" alt="Landing Page Circle" />
        <p>
        Our initiative revolves around championing cleanliness and implementing effective waste management solutions through a user-friendly system. By encouraging individuals to capture and submit photos of areas they identify as requiring attention, we aim to foster community engagement and responsibility towards maintaining cleanliness. As a token of appreciation for their contribution, participants receive credits on our platform, which they can later redeem for essential household items such as groceries and daily necessities. It is essential to underscore that our primary focus is on reaching out to individuals from socio-economic backgrounds with below-average income levels.
        </p>
      </div>
      <div id="features">
        <div className="feature1">
          <img src={feature1} alt="Feature 1" />
          <p>Networking and collaboration</p>
        </div>
        <div className="feature2">
          <img src={feature2} alt="Feature 2" />
          <p>Get Notification for upcoming events.</p>
        </div>
        <div className="feature3">
          <img src={feature3} alt="Feature 3" />
          <p>Fundraising and resource mobilization:</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
