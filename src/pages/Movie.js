import React from 'react'
import { useParams, NavLink, useSearchParams, useLocation } from "react-router-dom";
/* import posts from '../postData' */
import './Movie.css'

function Movie({movies}){
    const params = useParams();      //params:url 파라미터를 담고있는 객체
   
    let [searchParams, setSearchParams] = useSearchParams()
    const applyActiveColor = ({ isActive }) => (isActive ? {color: 'orangered'} : {}) //클릭했을때 색상변경

    const changeQueryString = (e) => {
        const filter = e.target.value
        if(filter){
            setSearchParams({ filter }) //?filter=사용자가 검색한
        }else{
            setSearchParams({})    //url 쿼리스트링 초기화
        }
    }
    const QueryNavLink = ({ to, children, ...props }) => {
        const location = useLocation();
        console.log(location)
        return <NavLink to={to + location.search} {...props}>{children}</NavLink>
      }
      //필터링된 목록에서 특정목록
      const moviesFiltered = movies
    .filter( movie => {
        const filter = searchParams.get('filter')
        if(!filter) return true;
        const title = movie.title.toLowerCase()
        return title.includes(filter.toLowerCase())
    })
    const movie = moviesFiltered[params.movieId] // 필터링된 목록에서 특정 포스트 글 선택하기
    return (
        <>
            {/* 쿼리스트링을 이용한 검색 */}
            <br/><input className="filter-movie" value={searchParams.get('filter') || ""} onChange={changeQueryString} placeholder="검색할 영화를 ..."/>

            {/* 영화 api의 데이터값 */}
            {movie ? 
                <div className="movie-container">
                    <h1>{movie.title_long}</h1>
                    {/* 이미지 추가 */}
                    <img src={movie.medium_cover_image}  alt={movie.title}></img>
                    <p>{movie.synopsis}</p>
                    <span>{movie.genres.join(",")}</span>
                </div>   :
                <h1>MOVIE PAGE</h1>}

            {/* 블로그 포스트 전체목록  */}
            {moviesFiltered
            .map( (movie, id) => {
                return (
                    <QueryNavLink key={id} to={`/movies/${id}`} className="movie-item" style={applyActiveColor}>{movie.title}</QueryNavLink>
                )
            })}
        </>
    )
}
export default Movie