import React, { ReactElement } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Homepage/Home";
import Search from "./Pages/SearchPage/Search";
import Watchlist from "./Pages/WatchlistPage/Watchlist";
import Origininals from "./Pages/OriginalsPage/Origininals";
import Movies from "./Pages/MoviesPage/Movies";
import Series from "./Pages/SeriesPage/Series";
import Error from "./Pages/ErrorPage/Error";

const App = (): ReactElement => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/originals" element={<Origininals />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />

        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
