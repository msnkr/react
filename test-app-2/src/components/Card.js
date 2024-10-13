export function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img src={props.image} className="circle-img" />
      </div>
      <div className="bottom">
        <p>{props.number}</p>
        <p>{props.email}</p>
      </div>
    </div>
  );
}
