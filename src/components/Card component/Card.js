import "./style.css";
import Caffe from "./caffe.jpg";

function Card(props) {
  return (
    <div className={"card "+props.colore }>
      <div className="card-body">
        <img src={Caffe} alt="caffe"/>
        <div>
          <h1>Vanilla Latte</h1>
          <p>21K</p>
        </div>
      </div>
      <div className="card-footer">
        <div className="etichette">
          <span>Hot</span>
          <span>Cold</span>
        </div>
        <button>Aggiungi</button>
      </div>
    </div>
  );
}

export default Card;