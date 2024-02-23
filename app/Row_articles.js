import React from 'react'
import News_row from './News_row'

function Row_articles({Props}) {
    return (
        <>
            <News_row Props={Props[0]} />
            <News_row Props={Props[1]} />
            <News_row Props={Props[2]} />
        </>
    )
}
export default Row_articles;
