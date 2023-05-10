import React from "react";
import "./Add.scss";

const Add = () => {
    return(
    <div className="add">
      <div className="container">
        <h1>Add New Bucket</h1>
        <div className="sections">
          <div className="info">
            <label htmlFor="">Name Of the Bucket</label>
            <input
              type="text"
              placeholder="e.g. 5 EV"
            />
            <label htmlFor="">Volatility</label>
            <select name="cats" id="cats">
              <option value="low">Low Volatility</option>
              <option value="med">Medium Volatility</option>
              <option value="high">High Volatility</option>
            </select>
            <label htmlFor="">Cover Image</label>
            <input type="file" />
            <label htmlFor="">Upload Images</label>
            <input type="file" multiple />
            <label htmlFor="">Description</label>
            <textarea name="" id="" placeholder="Brief descriptions to introduce your Bucket" cols="0" rows="16"></textarea>
            <button>Create</button>
          </div>
          <div className="details">
            <label htmlFor="">Service Title</label>
            <input type="text" placeholder="e.g. Gold" />
            <label htmlFor="">Short Description</label>
            <textarea name="" id="" placeholder="Short description of your Bucket" cols="30" rows="10"></textarea>
            <label htmlFor="">Revision Number</label>
            <input type="number" />
            <label htmlFor="">Add Features</label>
            <input type="text" placeholder="e.g. one to one support" />
            <input type="text" placeholder="e.g. Risk Management" />
            <label htmlFor="">Price</label>
            <input type="number" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add;