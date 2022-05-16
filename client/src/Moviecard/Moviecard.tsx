import React, { useState } from 'react';
import DetailCard from '../DetailCard/DetailCard'
import { IMDBFetcher } from '../fetcher'
import './Moviecard.css'

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
    //console.log('Details requested!')
    const moviedetails = await IMDBFetcher(imdbID)
    //console.log('MOVIEDETAILS', moviedetails)
    //moviedetails.toggle = true;
    setDetails(moviedetails)
    setdetailCardToggle(!detailCardToggle)
    // console.log('DETAILS', moviedetails)
  };

  // console.log('moviedetails before reendering?', moviedetailsState)

    return (
          <li className='Moviecard__wrapper'>
              <div className='Moviecard'>
                  <h3 className='Moviecard__title'>{movie.Title}</h3>
                  <p className='Moviecard__type'>{movie.Type} - {movie.Year}</p>
                  { movie.Poster !== 'N/A' && <img src={movie.Poster} alt={'Poster - ' + movie.Title}></img>}
                  <br></br>
                  <button className='Moviecard__button' onClick={() => loadDetails(movie.imdbID)}>{detailCardToggle ? 'Less Details' : 'More Details Please!' }</button>
                  
                  <DetailCard moviedetailsState={moviedetailsState} detailCardToggle={detailCardToggle}/>
                  
              </div>
          </li>
    )
}

export default Moviecard