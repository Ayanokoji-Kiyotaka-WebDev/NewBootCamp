import React from 'react'
import React, { useState, useEffect } from 'react';

function Color() {
  const [favoriteColor, setFavoriteColor] = useState("red");

    
    useEffect(() => {
    alert("useEffect reached");

    })


    const changeColor = () => {
    setFavoriteColor("blue");
  };
   
  return (
    <div>
          <h1> my Favorite Color is {favoriteColor}</h1>
                <button onClick={changeColor}>Change Color</button>

    </div>
  )
}

export default Color
