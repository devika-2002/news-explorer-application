"use client"

import React, { useState } from "react";
import "./search_bar.css";
import { articles } from "./data";

function Search_bar() {
    const [input, setInput] = useState("");
    
    const handleSearch = () => {
        const new_articles = [];

        const apiKey = '69c7f892cd89443f8cd4e75d3aa7e2b4';
        fetch(`https://newsapi.org/v2/everything?q=${input}&apiKey=${apiKey}`)
            .then(response => response.json())
            .then((data) => {
               if (!data.ok) {
                    const search_articles = data.articles;
                    for (let i=0; i<search_articles.length; i++) {
                        const search_article = search_articles[i];
                        const new_article = {
                            image: search_article.urlToImage,
                            title: search_article.title,
                            description: search_article.description,
                            articleUrl: search_article.url
                        }
                        new_articles.push(new_article);
                    }
                    console.log(new_articles);
                }
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
                        onChange={(e)=>setInput(e.target.value)}
                    />
                    <button onClick={handleSearch} className="Button text-white" type="submit">Go</button>
                </div>
            </div>
            <h4 className="article-heading">TOP NEWS FROM INDIA</h4>
        </div>
    );
}
export default Search_bar;

