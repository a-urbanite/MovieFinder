const fetcher = async (name:string, page:number) => {
    let url = new URL('http://localhost:8080');
    let params = {name: name, page: `${page}`};
    url.search = new URLSearchParams(params).toString();
    
    const movies = await fetch(url.toString())
      .then(response => response.json())
      .then(data => JSON.parse(data))
      .then(data => data)
      .catch((error) => {
        console.error(error);
      });
    
    movies.page = page
    movies.keyword = name

    return movies
}


export default fetcher;