export default(({data}) =>{

    const{
        poster_path,
        title,
        overview
    } = data
return(
    <div className="movie-card">
            <figure>
              <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt=""
              />
            </figure>
            <div className="title">{title}</div>
            <p>{overview}</p>
          </div>
)
})