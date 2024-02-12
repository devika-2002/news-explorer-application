import React from "react";
import "./searchbar.css";
function Searchbar() {
  return (
    <>
      <div className="container">
        <div className="searchbar_row">
          <form>
            <div className="search_box">
              <img className="img_search" src="Frame.png" alt="Search" />
              <input className="input_box" type="text" placeholder="Search" />
              <button className="button  text-white" type="submit">
                Go
              </button>
            </div>
          </form>
        </div>
        <h4 className="artical_heading">TOP NEWS FROM INDIA</h4>
      </div>
    </>
  );
}

export default Searchbar;
