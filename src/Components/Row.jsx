import Card from "./Card";

const Row = ({ title, moviesArray, imgUrl }) => {
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="movies--list">
        {moviesArray?.map((movie) => (
          <Card img={movie?.backdrop_path} key={movie?.id} imgUrl={imgUrl} />
        ))}
      </div>
    </div>
  );
};

export default Row;
