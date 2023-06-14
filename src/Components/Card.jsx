const Card = ({ img, imgUrl }) => {
  return (
    <div className="card">
      <img src={`${imgUrl}${img}`} alt="" />
    </div>
  );
};

export default Card;
