// import { useEffect }from 'react'
import MovieCard from '../Moviecard/Moviecard'
import { OMDBfetcher } from '../fetcher'
import './Gallery.css'

interface GalleryProps {
    data: any,
    setData: Function,
    isLoading: boolean,
    setisLoading: Function
  }

const Gallery: React.FC <GalleryProps> = ({data, setData, isLoading, setisLoading}):any => {

  const fetchPreviousPage = async (keyword:string, page:number) => {
    const previousSet = await OMDBfetcher(keyword, page-1)
    setData(previousSet);
    // console.log(previousSet);
  }

  const fetchNextPage = async (keyword:string, page:number) => {
    const nextSet = await OMDBfetcher(keyword, page+1)
    setData(nextSet);
    // console.log(nextSet);
  }

  // useEffect(() => {
  //   setisLoading(false);
  //   // window.scrollTo(0, 0)
  // }, [])
    
  // console.log('STATE FROM WITHIN GALLERY BEFORE RENDERING', data)

    if (data.Search && isLoading === false) {
      return (
        <div className='Gallery'>
            <h2 className='Gallery__title'>There are {data.totalResults} Movies and Series about "{data.keyword}"!</h2>
            <ul className='Gallery__display'>{data.Search.map((movie:any) => {
                return <MovieCard movie={movie} key={movie.imdbID}/>
                })}
            </ul>
            <div className='Gallery__buttonBar'>
              { data.page !== 1 && <button className='Gallery__button' onClick={() => fetchPreviousPage(data.keyword, data.page)}>prev</button>}
              { data.Search.length === 10 && <button className='Gallery__button' onClick={() => fetchNextPage(data.keyword, data.page)}>next</button>}
            </div>
        </div>
      )
    } else { return null}
  }

export default Gallery