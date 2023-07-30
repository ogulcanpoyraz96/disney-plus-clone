import React, { ReactElement } from "react";
import "./Home.scss";
import ImageSlider from "../../components/Slider/ImageSlider/ImageSlider";

import Viewers from "../../components/Viewers/Viewers";

import RecommendationsMovieRow from "../../components/Recommendations/RecommendationsMovieRow/RecommendationsMovieRow";

const Home = (): ReactElement => {
  return (
    <main className="home">
      <div className="home__container movieRows__container">
        <ImageSlider />
        <Viewers />
        <RecommendationsMovieRow />
      </div>
    </main>
  );
};

export default Home;
