import React from "react";
import "./Featured.scss";

function Featured() {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Tap into the Brilliance of College Talent, Unleash Your Project's Potential
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="https://raw.githubusercontent.com/safak/youtube23/fiverr-ui/public/img/search.png" alt="" />
              <input type="text" placeholder='Try "Website Design"' />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Website Design</button>
            <button>Logo Design</button>
            <button>AI Services</button>
            <button>Wordpress</button>
          </div>
        </div>
        <div className="right">
          <img src="https://raw.githubusercontent.com/safak/youtube23/fiverr-ui/public/img/man.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Featured;