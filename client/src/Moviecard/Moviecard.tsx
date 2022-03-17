import React from 'react'

interface MoviecardProps {
    movie: {
        Poster: string,
        Title: string,
        Type: string,
        Year: string,
        imdbID: string
    }
}

const Moviecard: React.FC <MoviecardProps> = ({movie}) => {
  return (
        <li>
            <div>
                <h3>{movie.Title}</h3>
                <p>{movie.Type} - {movie.Year}</p>
                <img src={movie.Poster} alt={'Poster - ' + movie.Title} width="200"></img>
            </div>
        </li>
  )
}

export default Moviecard