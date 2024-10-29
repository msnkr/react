import dataFile from "../data.json";

function Card({ img, category, title, price }) {
  return (
    <div>
      <div className="card">
        <div className="card-image">
          <img src={require(`${dataFile[0].image.mobile}`)} />
        </div>
        <div className="card-wording">
          <div className="card-description">
            <p>{dataFile[0].category}</p>
          </div>
          <div className="card-title">
            <p>{dataFile[0].name}</p>
          </div>
          <div className="card-price">
            <p>{dataFile[0].price}0</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
