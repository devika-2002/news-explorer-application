import React from "react";
import Header from "./Header";
import Search_bar from "./Search_bar";
import Articles_row from "./Articles_row";
import Footer from "./Footer";
import { articles } from "./data";

function page() {
    return (
        <>
            <Header />
            <Search_bar />
            <div className="container">
                <div className="row">
                    <Articles_row articles={articles.slice(0, 3)} />
                </div>
                <div className="row">
                    <Articles_row articles={articles.slice(3, 6)} />
                </div>
                <div className="row">
                    <Articles_row articles={articles.slice(6, 9)} />
                </div>
            </div>
            <Footer />
        </>
    );
}
export default page;
