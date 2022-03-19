import React from 'react'
import { OMDBfetcher } from '../fetcher'
import './Form.css'

interface formProps {
  setData: Function,
  isLoading: boolean,
  setisLoading: Function
}


const Form: React.FC <formProps> = ({setData, isLoading, setisLoading}) => {

  const fetchData = async (event: React.FormEvent<HTMLFormElement> & { target: HTMLFormElement }) => {
    event.preventDefault()
    setisLoading(true)
    const formData = Object.fromEntries(new FormData(event.target));
    const movies = await OMDBfetcher(formData.name.toString(), 1)
    setData(movies)
    event.target.reset();
    // console.log('FETCHRESULT FROM END OF FORM', movies)
  };

  return (
    <>
      <form className='Form' onSubmit={fetchData} >
          <input className='Form__input' type='text' name='name' placeholder='Enter a keyword!' required></input>
          <input className='Form__input' type='submit' value="Search!"></input>
      </form>
    </>

  )
}

export default Form