import React, { ReactElement } from "react";
import "./Viewers.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateShowcase } from "../../Store/showcase/showcaseSlice";

const Viewers = (): ReactElement => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="viewers-container">
      <div
        className="viewer-wrapper"
        onClick={() => {
          navigate("/showcase");
          return dispatch(updateShowcase("disney"));
        }}
      >
        <img className="viewer-image" src="images/viewers-disney.png" alt="" />
        <video className="viewer-bg-video" autoPlay loop muted playsInline>
          <source src="videos/disney.mp4" type="video/mp4" />
        </video>
      </div>

      <div
        className="viewer-wrapper"
        onClick={() => {
          navigate("/showcase");
          return dispatch(updateShowcase("pixar"));
        }}
      >
        <img className="viewer-image" src="images/viewers-pixar.png" alt="" />
        <video className="viewer-bg-video" autoPlay loop muted playsInline>
          <source src="videos/pixar.mp4" type="video/mp4" />
        </video>
      </div>

      <div
        className="viewer-wrapper"
        onClick={() => {
          navigate("/showcase");
          return dispatch(updateShowcase("marvel"));
        }}
      >
        <img className="viewer-image" src="images/viewers-marvel.png" alt="" />
        <video className="viewer-bg-video" autoPlay loop muted playsInline>
          <source src="videos/marvel.mp4" type="video/mp4" />
        </video>
      </div>

      <div
        className="viewer-wrapper"
        onClick={() => {
          navigate("/showcase");
          return dispatch(updateShowcase("star-wars"));
        }}
      >
        <img
          className="viewer-image"
          src="images/viewers-starwars.png"
          alt=""
        />
        <video className="viewer-bg-video" autoPlay loop muted playsInline>
          <source src="videos/star-wars.mp4" type="video/mp4" />
        </video>
      </div>

      <div
        className="viewer-wrapper"
        onClick={() => {
          navigate("/showcase");
          return dispatch(updateShowcase("national-geographic"));
        }}
      >
        <img
          className="viewer-image"
          src="images/viewers-national.png"
          alt=""
        />
        <video className="viewer-bg-video" autoPlay loop muted playsInline>
          <source src="videos/national-geographic.mp4" type="video/mp4" />
        </video>
      </div>

      <div
        className="viewer-wrapper star-wrapper"
        onClick={() => {
          navigate("/showcase");
          return dispatch(updateShowcase("star"));
        }}
      >
        <img
          className="viewer-image star"
          src="images/viewers-star.png"
          alt=""
        />
        <video className="viewer-bg-video" autoPlay loop muted playsInline>
          <source src="videos/star.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Viewers;
