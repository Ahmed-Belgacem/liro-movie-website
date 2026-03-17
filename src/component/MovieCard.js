import React from 'react'
import ReactStars from 'react-stars'


function MovieCard({el}) {
  return (

       <div className="poster">

        <div className="poster-img">
          <img src={el.posterUrl} alt={el.title} />
          <div className="poster-overlay"></div>
        </div>

        <div className="poster-bottom">
          <h2 className="poster-title">{el.title}</h2>
          <p className="poster-desc">{el.description}</p>
          <div className="poster-footer">
            <span className="poster-rating"><ReactStars
  count={5}
  size={24}
  color2={'#ffd700'} 
  edit={false}
  value={el.rating}
  /></span>
          </div>
        </div>

      </div>

  )
}

export default MovieCard
