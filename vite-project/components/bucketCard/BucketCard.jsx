import React from "react";
import {Link} from "react-router-dom"
import "./BucketCard.scss";

function BucketCard({ BucketCard }) {
  return (
    <Link to = "/" className="link">
      <div className="BucketCard">
        <img src={BucketCard.img} alt="" />
        <div className="info">
          <img src = {BucketCard.pp}/>
          <div className="text">
            <h3>{BucketCard.cat}</h3>
            <span>{BucketCard.username}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
export default BucketCard;