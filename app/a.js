

import React, { useState } from "react";
import "./search_bar.css";

function SearchBar() {
    const [input, setInput] = useState("");
    const [articles, setArticles] = useState([]);

    const handleSearch = () => {
        const apiKey = '69c7f892cd89443f8cd4e75d3aa7e2b4';
        fetch(`https://newsapi.org/v2/everything?q=${input}&apiKey=${apiKey}`)
            .then(response => response.json())
            .then((data) => {
                setArticles(data.articles);
            })
            .catch(error => {
                console.error('There was a problem with your fetch operation:', error);
            });
    };

    return (
        <div className="container">
            <div className="searchbar-row">
                <div className="search-box">
                    <img className="img-search" src="Frame.png" alt="Search" />
                    <input
                        className="input-box"
                        type="text"
                        placeholder="Search"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button onClick={handleSearch} className="Button text-white" type="submit">Go</button>
                </div>
            </div>
            <h4 className="article-heading">TOP NEWS FROM INDIA</h4>
        </div>
    );
}
export default SearchBar;

