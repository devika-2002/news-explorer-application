import React from "react";
import "./news_row.css"

const News_row = ({ Props }) => {

    return (
        <>
            <div className=" col-md-4  artical-box">
                <img className="artical-img" src={Props.image} alt="" />
                <h1 className="artical-title">{Props.title}</h1>
                <p className="artical-paragraph">{Props.description}</p>
                <a className="anchor-tag" href="/">Read full article <img src="arrows.png" alt=" " /></a>
            </div>
        </>
    )
}
export default News_row;




