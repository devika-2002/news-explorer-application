import React from "react";
import "./article.css"

const Article= ({ article }) => {
    return (
        <>
            <div className=" col-md-4  artical-box">
                <img className="artical-img" src={article.image} alt="" />
                <h1 className="artical-title">{article.title}</h1>
                <p className="artical-paragraph">{article.description}</p>
                <a className="anchor-tag" href="/">Read full article <img src="arrows.png" alt=" " /></a>
            </div>
        </>
    )
}
export default Article;

