import React, { useState } from "react";
import styles from "./Movies.module.css";
import Movie from "../Movie/Movie";
import DataMovie from '../../utils/constans/DataMovie'

const Movies = () => {
  const [item, setItem] = useState(DataMovie)

const handleClick = () => {
  const movie = {
        id: 7,
        title: "A Haunting in Venice",
        date: "13 September 2023",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jM5bJxSdJqYDjX9AYCc8LRwLkil.jpg"
  }
  const movie2 = {
    id: 7,
    title: "Five Nights at Freddy's",
    date: "25 Oktober 2023",
    image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/A4j8S6moJS2zNtRR8oWF08gRnL5.jpg"
}
  setItem([...item, movie, movie2])
}
  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>Latest Movies</h2>
        <div className={styles.movie__container}>
          {
          item.map(function(data)  {
            return(
               <Movie key={data.id} title={data.title} date={data.date} image={data.image} />
            )
          })
          }
        </div>
        <button onClick={handleClick}>Add Movie</button>
      </section>
    </div>
  );
};

export default Movies;