import React from 'react'
import fetcher from '../fetcher'

interface formProps {
  setData: Function,
}


const Form: React.FC <formProps> = ({setData}) => {

  const fetchData = async (event: React.FormEvent<HTMLFormElement> & { target: HTMLFormElement }) => {
    event.preventDefault()
    const formData = Object.fromEntries(new FormData(event.target));
    const movies = await fetcher(formData.name.toString(), 1)
    setData(movies)

    // console.log('FETCHRESULT FROM END OF FORM', movies)
  };

  return (
    <>
      <form className='Form' onSubmit={fetchData} >
          <input type='text' name='name' placeholder='Enter your name!' required></input>
          <input type='submit'></input>
      </form>
    </>

  )
}

export default Form