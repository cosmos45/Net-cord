import React, {useState, useEffect} from 'react'
import axios from "./axios";
import "./Banner.css"
import requests from "./request"

function Banner() {
    const [movie, setMovie] =useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTrending);
            setMovie(
                request.data.results[
                    Math.floor(Math.random()* request.data.results.length-1)
                ]
            );
            return request;
            

        }
        fetchData();
    }, []);

    function truncate(str, n){
        return str?.length > n ? str.substr(0, n-1)+"...":str;
    }
    return (
        <header 
        className="banner"
        style={{
            backgroudSize: "cover",
            backgroundPosition: "center center",
            // eslint-disable-next-line no-template-curly-in-string
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
            
        }}
        >
    
        <div className="banner_contents">
        <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>

        <div className="banner_button">

        <button className="play"> Play Now </button>
        
        </div>

        <h1 className="banner_desp">{truncate(movie?.overview)}</h1>
        
        


            
        </div>
        <div className="fade"></div>
        </header>
        
    )
}

export default Banner
