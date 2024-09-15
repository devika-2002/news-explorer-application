"use client";

import React, { useState } from "react";
import Header from "./Header";
import Search_bar from "./Search_bar";
import Articles_row from "./Articles_row";
import Footer from "./Footer";
import { articles } from "./data";

function Page() {
    const [searchResults, setSearch] = useState([]);

    return (
        <>
            <Header />
            <Search_bar setSearch={setSearch} />
            <div className="container">
                <div className="row">
                    {searchResults.length > 0 ? (
                        <Articles_row articles={searchResults} />
                    ) : (
                        <>
                            <Articles_row articles={articles.slice(0, 3)} />
                            <Articles_row articles={articles.slice(3, 6)} />
                            <Articles_row articles={articles.slice(6, 9)} />
                        </>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Page;


