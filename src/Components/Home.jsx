import { useState, useEffect } from "react";

import Row from "./Row";

const apiKey = "fd96fa70b7fbe773286f14d6543ddd62";
const url = "https://api.themoviedb.org/3/movie";

const upcomingMovie = "upcoming";
const nowPlaying = "now_playing";
const popular = "popular";
const topRated = "top_rated";

const Home = () => {
  const imgUrl = "https://image.tmdb.org/t/p/original";
  //states
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  const getUpcomingMovies = async () => {
    try {
      const response = await fetch(`${url}/${upcomingMovie}?api_key=${apiKey}`);

      const result = await response.json();
      setUpcomingMovies(result.results);
    } catch (err) {
      console.error(err);
    }
  };

  const getNowPlaying = async () => {
    try {
      const response = await fetch(`${url}/${nowPlaying}?api_key=${apiKey}`);

      const result = await response.json();
      setNowPlayingMovies(result.results);
      console.log(nowPlayingMovies);
    } catch (err) {
      console.error(err);
    }
  };

  const getPopularMovies = async () => {
    try {
      const response = await fetch(`${url}/${popular}?api_key=${apiKey}`);

      const result = await response.json();
      setPopularMovies(result.results);
      console.log(nowPlayingMovies);
    } catch (err) {
      console.error(err);
    }
  };
  const getTopRatedMovies = async () => {
    try {
      const response = await fetch(`${url}/${topRated}?api_key=${apiKey}`);

      const result = await response.json();
      setTopRatedMovies(result.results);
      console.log(nowPlayingMovies);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getUpcomingMovies();
    getNowPlaying();
    getPopularMovies();
    getTopRatedMovies();
  }, []);

  console.log(upcomingMovies);

  return (
    <div>
      <section className="section">
        <div
          className="banner"
          style={{
            backgroundImage: popularMovies[0]
              ? `url(${imgUrl}${popularMovies[0].poster_path})`
              : "rgb(16, 16, 16)"
          }}
        >
          {/* <img src={`${imgUrl}${popularMovies[0].poster_path}`} /> */}
        </div>
      </section>
      <Row title={"Upcoming"} moviesArray={upcomingMovies} imgUrl={imgUrl} />
      <Row
        title={"Now Playing"}
        moviesArray={nowPlayingMovies}
        imgUrl={imgUrl}
      />
      <Row title={"Popular"} moviesArray={popularMovies} imgUrl={imgUrl} />
      <Row title={"Top Rated"} moviesArray={topRatedMovies} imgUrl={imgUrl} />
    </div>
  );
};

export default Home;
