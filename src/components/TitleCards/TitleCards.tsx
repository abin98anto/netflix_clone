import { Link } from "react-router-dom";
import "./TitleCards.css";
import { useRef, useEffect, useState } from "react";

interface Movie {
  id: number;
  backdrop_path: string;
  original_title: string;
}

interface TitleCardsProps {
  title?: string;
  category?: string;
}

const TitleCards = ({ title, category }: TitleCardsProps) => {
  const [apiData, setApiData] = useState<Movie[]>([]);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  const handleWheel = (e: WheelEvent) => {
    e.preventDefault();
    if (cardsRef.current) {
      cardsRef.current.scrollLeft += e.deltaY;
    }
  };

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: import.meta.env.VITE_TITLE_CARD_AUTH,
      },
    };

    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results))
      .catch((err) => console.error(err));

    if (cardsRef.current) {
      cardsRef.current.addEventListener("wheel", handleWheel);
    }
  }, []);

  return (
    <div className="titlecards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img
                src={
                  import.meta.env.VITE_TMDB_BACKGROUND_URL + card.backdrop_path
                }
              />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
