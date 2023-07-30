import React, { useState, useEffect } from "react";
import axios from "./RecommendationsAxios";

const useSingleRow = (fetchUrl: string) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(fetchUrl);
        setMovies(response.data.items);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, [fetchUrl]);

  return { movies };
};

export default useSingleRow;
