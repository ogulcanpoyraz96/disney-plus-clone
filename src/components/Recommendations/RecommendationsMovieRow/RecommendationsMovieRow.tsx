import React from "react";
import "./RecommendationsMovieRow.scss";
import RecommendationsSingleRow from "../RecommendationsSingleRow/RecommendationsSingleRow";
import requests from "../RecommendationsUtils/RecommendationsRequest";

const RecommendationsMovieRow = () => {
  return (
    <div className="moviesRows">
      <RecommendationsSingleRow
        title={"Continue Watching"}
        fetchUrl={requests.fetchContinueWatching}
        watching={true}
      />

      <RecommendationsSingleRow
        title={"New to Disney"}
        fetchUrl={requests.fetchNewToDisney}
        watching={false}
      />

      <RecommendationsSingleRow
        title={"Trending"}
        fetchUrl={requests.fetchTrending}
        watching={false}
      />

      <RecommendationsSingleRow
        title={"Originals"}
        fetchUrl={requests.fetchOriginals}
        watching={false}
      />

      <RecommendationsSingleRow
        title={"Popular"}
        fetchUrl={requests.fetchPopular}
        watching={false}
      />

      <RecommendationsSingleRow
        title={"Marvel Universe"}
        fetchUrl={requests.fetchMarvelUniverse}
        watching={false}
      />
    </div>
  );
};

export default RecommendationsMovieRow;
