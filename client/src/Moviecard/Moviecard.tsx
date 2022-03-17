import React, { useState } from 'react';
import DetailCard from '../DetailCard/DetailCard'
import { IMDBFetcher } from '../fetcher'

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

  const [ moviedetailsState, setDetails ] = useState({});

  const [ detailCardToggle, setdetailCardToggle ] = useState(false);

  const loadDetails = async (imdbID:string) => {
    // console.log('Details requested!')
    const moviedetails = await IMDBFetcher(imdbID)
    moviedetails.toggle = true;
    setDetails(moviedetails)
    setdetailCardToggle(!detailCardToggle)
    // console.log('DETAILS', moviedetails)
  };

  // console.log('moviedetails before reendering?', moviedetailsState)

    return (
          <li>
              <div>
                  <h3>{movie.Title}</h3>
                  <p>{movie.Type} - {movie.Year}</p>
                  { movie.Poster !== 'N/A' && <img src={movie.Poster} alt={'Poster - ' + movie.Title} width="200"></img>}
                  <br></br>
                  <button onClick={() => loadDetails(movie.imdbID)}>{detailCardToggle ? 'Less Details' : 'More Details Please!' }</button>
                  
                  <DetailCard moviedetailsState={moviedetailsState} detailCardToggle={detailCardToggle}/>
                  
              </div>
          </li>
    )
}

export default Moviecard