import { Link } from "react-router-dom";
import telephone from "../pictures/telephone.jpg";

function Review() {
  return (
    <div className="container-review">
      <img src={telephone} alt="tel" className="oldphone" />
      <div className="button-ADT">
        <Link to="/phones/1" style={{ color: "white" }} className="linkbut">
          Analyse
        </Link>
      </div>
    </div>
  );
}
export default Review;
