import React from 'react'

import './Banner.css'




function Banner ({ large_cover_image, title, rating, runtime, genres, summary, recommends }){

                            //포스터 , 제목, 평점,상영시간,장르,줄거리,추천영화들










    if(recommends.length > 0){

        return (

            <div className='banner-container'>

                <div className='banner-info'>

                    <img src={large_cover_image} alt="poster"/>    {/* 랜덤 큰 포스터 */}

                    <div className='banner-details'>

                        <h1>{title}</h1>

                        <span>평점: {rating}점</span>

                        <span>상영시간: {runtime}분</span>

                        <span>장르: {genres.join(" ")}</span>

                        <p>{summary.length > 500 ? `${summary.slice(0, 500)}...` : summary}</p>

                        <div className='banner-recommends'>                              {/* 추천영화 포스터 */}

                            {recommends && recommends.map(recommendedMovie => <img key={recommendedMovie.id} src={recommendedMovie.medium_cover_image} alt="poster"/>)}

                        </div>

                    </div>

                </div>

            </div>

        )

    }else{

        <div>상세정보 로딩중...</div>

    }




}

export default Banner 