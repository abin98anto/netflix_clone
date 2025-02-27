import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} className="caption-img" />
          <p>
            Discovering his ties to a secret ancient order, a young man living
            in mordern Istanbul embarks on a quest to save the city from an
            immortal enemy.
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} />
              More Info
            </button>
          </div>
          <TitleCards title={undefined} category={undefined} />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Top Rated"} category={"top_rated"} />
        <TitleCards title={"Only on Netflix"} category={"popular"} />
        <TitleCards title={"Top picks for you"} category={"upcoming"} />
        <TitleCards title={"Upcoming"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
