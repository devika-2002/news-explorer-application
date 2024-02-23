import React from "react";
import "./search_bar.css";

function Search_bar() {
    return (
        <>
            <div className="container">
                <div className="searchbar-row">
                    <form>
                        <div className="search-box">
                            <img className="img-search" src="Frame.png" alt="Search" />
                            <input className="input-box" type="text" placeholder="Search" />
                            <button className="Button  text-white" type="submit">Go</button>
                        </div>
                    </form>
                </div>
                <h4 className="artical-heading">TOP NEWS FROM INDIA</h4>
            </div>
        </>
    )
}

export default Search_bar;

