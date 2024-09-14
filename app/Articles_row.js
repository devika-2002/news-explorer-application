
import React from 'react';
import Article from './Article';

function Articles_row({ articles }) {
    return (
        <div className="row">
            {articles.length > 0 ? (
                articles.map((article, index) => (
                    <Article key={index} article={article} />
                ))
            ) : (
                <p>No articles found.</p>
            )}
        </div>
    );
}

export default Articles_row;
