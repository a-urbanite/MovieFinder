import React from 'react'
import './DetailCard.css'

interface DetailCardProps {
  moviedetailsState: any
  detailCardToggle: boolean
}

const DetailCard: React.FC <DetailCardProps>= ({moviedetailsState, detailCardToggle}) => {

  if (Object.keys(moviedetailsState).length !== 0 && detailCardToggle === true ) {
    return (
      <div className='Detailcard'>
          <p className='Detailcard__paragraph'><strong>Genres</strong>: {moviedetailsState.genres}</p>
          <p className='Detailcard__paragraph'><strong>IMDB Rating</strong>: {moviedetailsState.imDbRating}</p>
          <p className='Detailcard__paragraph'><strong>Metacritics</strong>: {moviedetailsState.metacriticRating}</p>
          <p className='Detailcard__paragraph'><strong>Countries</strong>: {moviedetailsState.countries}</p>
          <p className='Detailcard__paragraph'><strong>Starring</strong>: {moviedetailsState.stars}</p>
          <p className='Detailcard__paragraph'><strong>Runtime</strong>: {moviedetailsState.runtimeMins} min</p>
          { moviedetailsState.trailer && <p className='Detailcard__paragraph'>Trailer: {moviedetailsState.trailer}</p> }
          { moviedetailsState.wikipedia && <p className='Detailcard__paragraph'>Wikipedia: {moviedetailsState.wikipedia}</p> }
          <p className='Detailcard__plot'><strong>Summary</strong>: {moviedetailsState.plot}</p>
          <div className='Detailcard__link-wrapper'>
            <a className='Detailcard__link' href={'https://www.imdb.com/title/' + moviedetailsState.id} target="_blank" rel="noreferrer">Check it out on IMDB</a> <br></br>
          </div>
          <div className='Detailcard__link-wrapper'>
            <a className='Detailcard__link' href={'https://www.youtube.com/results?search_query=official+trailer+' + moviedetailsState.title} target="_blank" rel="noreferrer">Search for a trailer</a>
          </div>
      </div>
    )
  } else { return null}
}

export default DetailCard