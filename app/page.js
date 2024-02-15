import React from "react";
import Header from "./Header";
import Search_bar from "./Search_bar";
import Row_articles from "./Row_articles";
import Footer from "./Footer";


function page() {
  return (
    <>
      <Header />
      <Search_bar />
      <div className="container">
        <div className="row">
          <Row_articles />
          <Row_articles />
          <Row_articles />
        </div>
      </div>
      <Footer />
    </>
  );
}
export default page;
