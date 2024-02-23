import React from "react";
import Header from "./Header";
import Search_bar from "./Search_bar";
import Row_articles from "./Row_articles";
import Footer from "./Footer";
import { data } from "./articles";

function page() {
    return (
        <>
            <Header />
            <Search_bar />
            <div className="container">
                <div className="row">
                    <Row_articles Props={data.slice(0, 3)} />
                    <Row_articles Props={data.slice(3, 6)} />
                    <Row_articles Props={data.slice(6, 9)} />
                </div>
            </div>
            <Footer />
        </>
    );
}
export default page;
