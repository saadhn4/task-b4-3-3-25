import React, { useEffect, useState } from "react";
import axios from "axios";

const Movie = () => {
  const apiUrl =
    "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian";
  const [data, setData] = useState([]);

  const getPosts = async () => {
    try {
      let response = await axios.get(apiUrl);
      setData(response.data.meals);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <h1 className="text-2xl text-center my-4">The Meal API</h1>
      <div className="grid grid-cols-3">
        {data.map((item) => {
          return (
            <div key={item.idMeal}>
              <div className="flex flex-col justify-center items-center w-100 rounded-xl mb-3 p-3">
                <p>Name: {item.strMeal}</p>
                <img
                  src={item.strMealThumb}
                  className="w-48 h-auto rounded-lg mt-2"
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Movie;
