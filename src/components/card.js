import React from 'react'
import { Route } from 'react-router-dom';
import Detail from '../Pages/DetailPage';
import { useState } from 'react';
import { Link } from "react-router-dom";


function Card({ name, rating, image,summary,id}) {

  return (
    <>
      <div className="flex mx-11 my-5">
        <div className=" relative bg-white shadow-2xl hover:shadow-none cursor-pointer w-92 h-100 rounded-sm flex flex-col pb-4">
          <div>
          <img className=" relative px-4 py-2" src={image} alt="Image is down at this moment" /></div>
          <span className="text-2xl font-bold font-serif mx-4">{name}</span>
          <span className="text-sm text-black-400 mx-4 my-2">IMDB : {rating}</span>
          <Link to={`/detail/${id}`}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Card