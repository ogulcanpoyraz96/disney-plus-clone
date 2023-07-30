import React, { useState, useEffect } from "react";
import RecommendationsMovieCard from "../RecommendationsMovieCard/RecommendationsMovieCard";
import useSingleRow from "../RecommendationsUtils/RecommendationsHook";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Skeleton } from "@mui/material";
import Slider from "react-slick";
import "./RecommendationsSingleRow.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface RecommendationsSingleRowProps {
  title: string;
  fetchUrl: string;
  watching: boolean;
}

const RecommendationsSingleRow: React.FC<RecommendationsSingleRowProps> = ({
  title,
  fetchUrl,
  watching,
}) => {
  const { movies } = useSingleRow(fetchUrl);

  if (!movies || movies.length === 0) {
    return <div>Loading...</div>;
  }

  const settings = {
    arrows: true,
    accessibility: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: (
      <button className="arrow-button">
        <ArrowForwardIosIcon className="slick-arrows" />
      </button>
    ),
    prevArrow: (
      <button className="arrow-button">
        <ArrowBackIosIcon className="slick-arrows" />
      </button>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div>
      {movies.length > 0 ? (
        <div className="singleRow">
          <h2 className="singleRow__title">{title}</h2>
          <Slider className="singleRow__slider" {...settings}>
            {movies.map((movie: any) => (
              <RecommendationsMovieCard
                id={movie.id}
                key={movie.id}
                poster={movie.backdrop_path}
                title={movie.title}
                watching={watching}
              />
            ))}
          </Slider>
        </div>
      ) : (
        <Skeleton
          animation="wave"
          variant="rectangular"
          width="100%"
          height={200}
        />
      )}
    </div>
  );
};

export default RecommendationsSingleRow;
