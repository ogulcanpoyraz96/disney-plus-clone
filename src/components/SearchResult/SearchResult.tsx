import "./SearchResult.scss";
import { Link } from "react-router-dom";

interface SearchResultProps {
  poster_path: string;
  alt: string;
  id: string;
  title: string;
  overview: string;
  release_date: string;
  genre_ids: string;
}

export default function SearchResult(props: SearchResultProps) {
  const { poster_path: poster, alt, id } = props;

  return (
    <div className="result">
      <Link to={{ pathname: `/movie/${id}` }}>
        <img
          src={
            poster
              ? `https://image.tmdb.org/t/p/original/${poster}`
              : "https://www.genius100visions.com/wp-content/uploads/2017/09/placeholder-vertical.jpg"
          }
          alt={alt}
        />
      </Link>
    </div>
  );
}
