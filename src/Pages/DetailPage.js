import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams(); // extract the id from the URL
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, [id]);


    const [showForm, setShowForm] = useState(false);
    
    const handleBookTicket = () => {
      setShowForm(true);
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // your form submission logic here
    }

  return (
    <div>
      <img src={data.image && data.image.medium} alt="" />
      <h1>{data.name}</h1>
      <p>{data.summary}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleBookTicket}>
        Book Ticket
      </button>
      {showForm && (
        <form onSubmit={handleSubmit}>

          <label className="block">Name : {data.name}</label>
          <label htmlFor="table">Select table:</label>
          <select id="table" name="table">
            <option value="table1">Table 1</option>
            <option value="table2">Table 2</option>
            <option value="table3">Table 3</option>
          </select>
          <br />
          <label htmlFor="quantity">Number of tickets:</label>
          <input type="number" id="quantity" name="quantity" min="1" max="10" />
          <br />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default DetailPage;
