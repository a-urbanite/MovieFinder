import React from 'react'

interface formProps {
  setData: Function,
}


const Form: React.FC <formProps> = ({setData}) => {

  const fetchData = async (event: React.FormEvent<HTMLFormElement> & { target: HTMLFormElement }) => {
    event.preventDefault()
    const formData = Object.fromEntries(new FormData(event.target));
    console.log(formData)
    // fetch('http://localhost:8080/?' + new URLSearchParams({foo: 'value', bar: 2}))

    let url = new URL('http://localhost:8080');
    let params = {name: formData.name.toString()};
    url.search = new URLSearchParams(params).toString();

    const movies = await fetch(url.toString())
      .then(response => response.json())
      .then(data => JSON.parse(data))
      .then(data => data)
      .catch((error) => {
        console.error(error);
      });


    setData(movies)

    console.log('FETCHRESULT FROM END OF FORM', movies)
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