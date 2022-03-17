import React from 'react'
import MovieCard from '../Moviecard/Moviecard'
import fetcher from '../fetcher'

interface GalleryProps {
    data: any,
    setData: Function
  }

const Gallery: React.FC <GalleryProps> = ({data, setData}):any => {

  const fetchPreviousPage = async (keyword:string, page:number) => {
    const previousSet = await fetcher(keyword, page-1)
    setData(previousSet);
    console.log(previousSet);
  }

  const fetchNextPage = async (keyword:string, page:number) => {
    const nextSet = await fetcher(keyword, page+1)
    setData(nextSet);
    console.log(nextSet);
  }
    
  // console.log('STATE FROM WITHIN GALLERY BEFORE RENDERING', data)

    if (data.Search) {
      return (
        <>
            <h2>There are {data.totalResults} Movies and Series about you!</h2>
            <ul>{data.Search.map((movie:any) => {
                return <MovieCard movie={movie} key={movie.imdbID}/>
                })}
            </ul>
            <div>
              { data.page !== 1 && <button onClick={() => fetchPreviousPage(data.keyword, data.page)}>prev</button>}
              <button onClick={() => fetchNextPage(data.keyword, data.page)}>next</button>
            </div>
        </>
      )
    } else { return null}
  }

export default Gallery