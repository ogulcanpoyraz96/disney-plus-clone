import "./Watchlist.scss";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useState, useEffect, ReactElement } from "react";
import { Link } from "react-router-dom";

export interface IWatchlist {
  id: string;
  poster_path: string;
  alt: string;
  title: string;
}

const Watchlist = (): ReactElement => {
  const [data, setData] = useState<IWatchlist[]>([]);
  const [isEmpty, setIsEmpty] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);
  const API_KEY = process.env.REACT_APP_OPEN_MOVIE_DB_API_KEY;

  useEffect(() => {
    const getWatchlist = async () => {
      const watchlistData: IWatchlist[] = [];

      if (watchlistData.length > 0) setIsEmpty(false);

      for (const item of watchlistData) {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${item.id}?api_key=${API_KEY}&language=en-US&page=1`
        );
        const data = await res.json();
        setData(array => [...array, data]);
      }
      setLoading(false);
    };

    getWatchlist();
  }, [API_KEY]);

  return (
    <div className="wrapper">
      {isEmpty ? (
        <div className="watchlistWrapper">
          <AddCircleOutlineIcon />
          <h3>Your watchlist is empty</h3>
          <p>Content you add to your watchlist will appear here.</p>
        </div>
      ) : (
        <div className="page collectionsPage">
          <div className="results collections">
            {loading ? (
              <h3>Loading...</h3>
            ) : (
              data.map(item => {
                return (
                  <div key={item.id} className="result">
                    <Link to={{ pathname: `/movie/${item.id}` }}>
                      <img
                        src={
                          item.poster_path
                            ? `https://image.tmdb.org/t/p/original/${item.poster_path}`
                            : "https://www.genius100visions.com/wp-content/uploads/2017/09/placeholder-vertical.jpg"
                        }
                        alt={item.alt}
                      />
                    </Link>
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Watchlist;
