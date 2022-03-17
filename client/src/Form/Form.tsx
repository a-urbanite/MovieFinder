import React from 'react'
import { OMDBfetcher } from '../fetcher'

interface formProps {
  setData: Function,
}


const Form: React.FC <formProps> = ({setData}) => {

  const fetchData = async (event: React.FormEvent<HTMLFormElement> & { target: HTMLFormElement }) => {
    event.preventDefault()
    const formData = Object.fromEntries(new FormData(event.target));
    const movies = await OMDBfetcher(formData.name.toString(), 1)
    setData(movies)
    event.target.reset();
    // console.log('FETCHRESULT FROM END OF FORM', movies)
  };

  return (
    <>
      <form className='Form' onSubmit={fetchData} >
          <input type='text' name='name' placeholder='Enter a keyword!' required></input>
          <input type='submit'></input>
      </form>
    </>

  )
}

export default Form