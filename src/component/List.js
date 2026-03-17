import React, { useRef } from 'react';
import MovieCard from './MovieCard';

function List({ movies, text, rate, setMovies }) {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    carouselRef.current.scrollBy({
      left: direction === 'right' ? 360 : -360,
      behavior: 'smooth'
    });
  };

  const displayed =
    rate === 1
      ? [...movies.filter((el) => el.title.toLowerCase().includes(text.toLowerCase()))].reverse()
      : [...movies.filter((el) => el.title.toLowerCase().includes(text.toLowerCase()) && el.rating === rate)].reverse();

  return (
    <div style={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
      <button className="carousel-btn left" onClick={() => scroll('left')}>‹</button>

      <div className="parent" ref={carouselRef}>
        {displayed.map((el) => (
          <MovieCard key={el.title} el={el} />
        ))}
      </div>

      <button className="carousel-btn right" onClick={() => scroll('right')}>›</button>
    </div>
  );
}

export default List;