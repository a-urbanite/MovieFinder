import React from 'react'
import MovieCard from '../Moviecard/Moviecard'

interface GalleryProps {
    data: any,
  }

const Gallery: React.FC <GalleryProps> = ({data}):any => {
    
  console.log('STATE FROM WITHIN GALLERY BEFORE RENDERING', data)

    if (data.Search) {
      return (
        <>
            <h2>There are {data.totalResults} Movies and Series about you!</h2>
            <ul>{data.Search.map((movie:any) => {
                return <MovieCard movie={movie}/>
                })}
            </ul>
            <button>x</button>
            <button>y</button>
        </>
      )
    } else { return null}
  }

export default Gallery