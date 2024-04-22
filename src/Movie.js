import React from 'react';

function Movie({title, genres, cover, summary, rating}){ //평점 추가
    const style = {
        width: '230px',
        height: '500px',
        background: "white",
        margin: '10px',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
    }

    return (
        <div style={style}>
            <img src={cover} alt={title}></img>
            <h3>{title}</h3>
            <h4>{genres.join(" ")}</h4>
            <span>평점 : {rating}점</span>
            {/* {<p>{summary}</p>} */}
        </div>
    )
}

export default Movie;