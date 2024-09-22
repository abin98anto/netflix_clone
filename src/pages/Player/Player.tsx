import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: import.meta.env.VITE_TITLE_CARD_AUTH,
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results[3]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <div className="player">
        <img
          src={back_arrow_icon}
          onClick={() => {
            navigate(-2);
          }}
        />
        <iframe
          src={`https://www.youtube.com/embed/${apiData.key}`}
          width="90%"
          height="90%"
          title="trailer"
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <div className="player-info">
          <p>{apiData.published_at}</p>
          <p>{apiData.name}</p>
          <p>{apiData.typeof}</p>
        </div>
      </div>
    </div>
  );
};

export default Player;
