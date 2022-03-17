import React from 'react'

interface DetailCardProps {
  moviedetailsState: any
  detailCardToggle: boolean
  // moviedetailsState: {
  //       actorList: any[]
  //       awards: string
  //       boxOffice: any
  //       companies: string
  //       companyList: any[]
  //       contentRating: string
  //       countries: string
  //       countryList: any[]
  //       directorList: any[]
  //       directors: string
  //       errorMessage: any
  //       fullCast: any
  //       fullTitle: string
  //       genreList: any[]
  //       genres: string
  //       id: string
  //       imDbRating: string
  //       imDbRatingVotes: string
  //       image: string
  //       images: any
  //       keywordList: any[]
  //       keywords: string
  //       languageList: any[]
  //       languages: string
  //       metacriticRating: string
  //       originalTitle: string
  //       plot: string
  //       plotLocal: string
  //       plotLocalIsRtl: boolean
  //       posters: any
  //       ratings: any
  //       releaseDate: string
  //       runtimeMins: string
  //       runtimeStr: string
  //       similars: any[]
  //       starList: any[]
  //       stars: string
  //       tagline: string
  //       title: string
  //       trailer: any
  //       tvEpisodeInfo: any
  //       tvSeriesInfo: any
  //       type: string
  //       wikipedia: any
  //       writerList: any[]
  //       writers: string
  //       year: string
  //   } | {}
}

const DetailCard: React.FC <DetailCardProps>= ({moviedetailsState, detailCardToggle}) => {

  if (Object.keys(moviedetailsState).length !== 0 && detailCardToggle === true ) {
    return (
      <>
          <p>Genres: {moviedetailsState.genres}</p>
          <p>IMDB Rating: {moviedetailsState.imDbRating}</p>
          <p>Metacritics: {moviedetailsState.metacriticRating}</p>
          <p>Countries: {moviedetailsState.countries}</p>
          <p>Starring: {moviedetailsState.stars}</p>
          <p>Runtime: {moviedetailsState.runtimeMins} min</p>
          { moviedetailsState.trailer && <p>Trailer: {moviedetailsState.trailer}</p> }
          { moviedetailsState.wikipedia && <p>Wikipedia: {moviedetailsState.wikipedia}</p> }
          <p>Summary: {moviedetailsState.plot}</p>
          <a href={'https://www.imdb.com/title/' + moviedetailsState.id} target="_blank" rel="noreferrer">Check it out on IMDB!</a>
      </>
    )
  } else { return null}
}

export default DetailCard