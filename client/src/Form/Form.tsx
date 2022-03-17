import React from 'react'

const Form: React.FC = () => {

  const fetchData = (event: React.FormEvent<HTMLFormElement> & { target: HTMLFormElement }) => {
    event.preventDefault()
    const formData = Object.fromEntries(new FormData(event.target));
    console.log(formData)
    // fetch('http://localhost:8080/?' + new URLSearchParams({foo: 'value', bar: 2}))

    let url = new URL('http://localhost:8080');
    let params = {name: formData.name.toString()};
    url.search = new URLSearchParams(params).toString();

    fetch(url.toString())
      .then(response => response.json())
      .then(data => console.log(data))
      .catch((error) => {
        console.error(error);
      });
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