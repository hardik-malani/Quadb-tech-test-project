import { keyboard } from "@testing-library/user-event/dist/keyboard";
import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Card from "./card";
import Detail from "../Pages/DetailPage";
import { Link } from 'react-router-dom';

function Collection() {

    const [movie, setMovie] = useState([])

    useEffect(() => {

        const fetchmovieData = async() => {
            try{
                const res = await fetch("https://api.tvmaze.com/search/shows?q=all")
                const data = await res.json()
                setMovie(data)
                console.log(data[0].show.id)
            } catch (error){
                console.error(error)
            }
        }

        fetchmovieData()
    },[])

  return (
    <div className="flex flex-wrap">
        {movie.map((item,index) => (
            <Link key={index} to={`/detail/${item.show.id}`}>
        <Card key={index} 
            name={item.show.name}
            image={item.show.image && item.show.image.medium}
            rating={item.show.rating.average}
            summary={item.show.summary}
            id={item.show.id}
        />
        </Link>
        ))}
    </div>
  )
}

export default Collection