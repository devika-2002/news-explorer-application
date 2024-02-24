import React from 'react'
import Article from './Article';

function Articles_row ({articles}) {
    return (
        <>
            <Article article={articles[0]} />
            <Article article={articles[1]} />
            <Article article={articles[2]} />
        </>
    )
}
export default Articles_row;
