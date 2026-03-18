import React, { useState } from 'react'
import ReactStars from 'react-stars'
import { Modal } from 'react-bootstrap'

function MovieCard({ el }) {
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState('info');

  const handleOpen = () => { setActiveTab('info'); setShow(true); };
  const handleClose = () => { setActiveTab('info'); setShow(false); };

  const typeColors = { movie: '#e8003d', series: '#7c3aed', anime: '#f59e0b' };

  const tabStyle = (tab) => ({
    padding: '11px 28px',
    border: 'none',
    borderBottom: activeTab === tab ? '2px solid #06b6d4' : '2px solid transparent',
    background: 'transparent',
    color: activeTab === tab ? '#06b6d4' : 'rgba(200,200,220,0.45)',
    fontFamily: "'Nunito', sans-serif",
    fontWeight: activeTab === tab ? 800 : 600,
    fontSize: '12px',
    letterSpacing: '0.8px',
    textTransform: 'uppercase',
    cursor: 'pointer',
    transition: 'all 0.2s',
  });

  return (
    <>
      {/* ── Card ── */}
      <div className="poster" onClick={handleOpen} style={{ cursor: 'pointer' }}>
        <div className="poster-img">
          <img src={el.posterUrl} alt={el.title} />
          <div className="poster-overlay" />
        </div>
        <div className="poster-bottom">
          <h2 className="poster-title">{el.title}</h2>
          <p className="poster-desc">{el.description}</p>
          <div className="poster-footer">
            <ReactStars count={5} size={18} color2="#ffd700" edit={false} value={el.rating} />
          </div>
        </div>
      </div>

      {/* ── Modal ── */}
      <Modal show={show} onHide={handleClose} size="xl" centered contentClassName="border-0 bg-transparent shadow-none">
        <div style={{
          display: 'flex',
          background: 'radial-gradient(ellipse at top, #1a1a2e 0%, #0d0d1a 60%, #000 100%)',
          borderRadius: '14px',
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.08)',
          minHeight: '520px',
          boxShadow: '0 40px 80px rgba(0,0,0,0.8)',
        }}>

          {/* ── Left: Poster ── */}
          <div style={{ width: '250px', flexShrink: 0, position: 'relative' }}>
            <img
              src={el.posterUrl}
              alt={el.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            {/* right-side fade */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to right, transparent 60%, #0d0d1a 100%)',
            }} />
            {/* bottom fade */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0, height: '120px',
              background: 'linear-gradient(to top, #0d0d1a, transparent)',
            }} />
          </div>

          {/* ── Right: Content ── */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

            {/* Header */}
            <div style={{
              padding: '22px 24px 16px',
              borderBottom: '1px solid rgba(255,255,255,0.07)',
              display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
            }}>
              <div style={{ flex: 1, paddingRight: '16px' }}>

                {/* Badges */}
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '12px' }}>
                  <span style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: '11px', fontWeight: 800,
                    letterSpacing: '0.6px', padding: '4px 13px',
                    borderRadius: '20px', textTransform: 'uppercase',
                    background: typeColors[el.type] || '#e8003d', color: '#fff',
                  }}>{el.type}</span>

                  {el.genre?.map((g, i) => (
                    <span key={i} style={{
                      fontFamily: "'Nunito', sans-serif",
                      fontSize: '11px', fontWeight: 700,
                      letterSpacing: '0.5px', padding: '4px 13px',
                      borderRadius: '20px', textTransform: 'uppercase',
                      background: 'transparent', color: '#fff',
                      border: '1.5px solid rgba(168,85,247,0.65)',
                    }}>{g}</span>
                  ))}

                  {el.trending && (
                    <span style={{
                      fontFamily: "'Nunito', sans-serif",
                      fontSize: '11px', fontWeight: 800,
                      padding: '4px 13px', borderRadius: '20px',
                      background: 'linear-gradient(90deg, #06b6d4, #3b82f6)',
                      color: '#fff',
                    }}>🔥 Trending</span>
                  )}
                </div>

                {/* Title */}
                <h2 style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: '2rem', fontWeight: 900,
                  color: '#ffffff', margin: '0 0 10px', lineHeight: 1.15,
                }}>{el.title}</h2>

                {/* Rating row — stars + HD tag only */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <ReactStars count={5} size={20} color2="#ffd700" edit={false} value={el.rating} />
                  <span style={{
                    fontFamily: "'Nunito', sans-serif",
                    border: '1px solid rgba(200,200,220,0.4)',
                    borderRadius: '4px', padding: '1px 7px',
                    fontSize: '11px', fontWeight: 700,
                    color: 'rgba(200,200,220,0.75)',
                  }}>HD</span>
                  <span style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: '13px', fontWeight: 700,
                    color: 'rgba(200,200,220,0.55)',
                  }}>{el.rating} / 5</span>
                </div>

              </div>

              {/* Close button */}
              <button onClick={handleClose} style={{
                width: '38px', height: '38px',
                borderRadius: '50%',
                background: 'rgba(40,40,55,0.75)',
                border: '1px solid rgba(255,255,255,0.18)',
                color: '#e0e0f0', cursor: 'pointer',
                fontSize: '15px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
                transition: 'background 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(60,60,80,0.9)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(40,40,55,0.75)'}
              >✕</button>
            </div>

            {/* Tabs */}
            <div style={{
              display: 'flex',
              background: 'rgba(0,0,0,0.25)',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}>
              <button style={tabStyle('info')} onClick={() => setActiveTab('info')}>
                📋 Details
              </button>
              <button style={tabStyle('trailer')} onClick={() => setActiveTab('trailer')}>
                ▶ Trailer
              </button>
            </div>

            {/* Tab Body */}
            <div style={{ flex: 1, padding: '20px 24px', overflowY: 'auto', scrollbarWidth: 'none' }}>

              {activeTab === 'info' && (
                <div>
                  {/* Genre dots */}
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: '13px', fontWeight: 600,
                    color: 'rgba(200,200,220,0.65)',
                    marginBottom: '14px',
                  }}>
                    {el.genre?.map((g, i) => (
                      <React.Fragment key={i}>
                        {i > 0 && (
                          <span style={{
                            width: '4px', height: '4px',
                            background: 'rgba(200,200,220,0.4)',
                            borderRadius: '50%', display: 'inline-block',
                          }} />
                        )}
                        {g}
                      </React.Fragment>
                    ))}
                  </div>

                  {/* Description */}
                  <p style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: '14px', fontWeight: 500,
                    color: 'rgba(210,210,230,0.82)',
                    lineHeight: '1.72', margin: '0 0 24px',
                    maxWidth: '520px',
                  }}>{el.description}</p>

                  {/* Action buttons */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>

                    {/* Watch Trailer button */}
                    <button
                      onClick={() => setActiveTab('trailer')}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '12px',
                        background: 'linear-gradient(135deg, #06b6d4, #3b82f6, #7c3aed)',
                        border: 'none', borderRadius: '30px',
                        padding: '10px 22px 10px 16px',
                        cursor: 'pointer',
                        transition: 'opacity 0.2s, transform 0.15s',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'scale(1.03)'; }}
                      onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'scale(1)'; }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                        <polygon points="5,3 19,12 5,21" />
                      </svg>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <span style={{
                          fontFamily: "'Nunito', sans-serif",
                          fontSize: '13px', fontWeight: 800, color: '#fff',
                        }}>Watch Trailer</span>
                        <span style={{
                          fontFamily: "'Nunito', sans-serif",
                          fontSize: '11px', fontWeight: 600,
                          color: 'rgba(255,255,255,0.7)',
                        }}>Play Now</span>
                      </div>
                    </button>

                    {/* Close button */}
                    <button
                      onClick={handleClose}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '8px',
                        background: 'rgba(40,40,55,0.85)',
                        border: '1px solid rgba(255,255,255,0.15)',
                        borderRadius: '30px', padding: '10px 20px',
                        color: '#e0e0f0',
                        fontFamily: "'Nunito', sans-serif",
                        fontSize: '14px', fontWeight: 700, cursor: 'pointer',
                        transition: 'opacity 0.2s, transform 0.15s',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'scale(1.03)'; }}
                      onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'scale(1)'; }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>
                      Close
                    </button>

                  </div>
                </div>
              )}

              {activeTab === 'trailer' && (
                el.trailerUrl ? (
                  <div style={{
                    position: 'relative', paddingBottom: '56.25%', height: 0,
                    borderRadius: '10px', overflow: 'hidden',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}>
                    <iframe
                      src={el.trailerUrl}
                      title={`${el.title} Trailer`}
                      allowFullScreen
                      style={{
                        position: 'absolute', top: 0, left: 0,
                        width: '100%', height: '100%', border: 'none',
                      }}
                    />
                  </div>
                ) : (
                  <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    height: '200px',
                    color: 'rgba(200,200,220,0.35)',
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: '14px', fontWeight: 600,
                  }}>No trailer available.</div>
                )
              )}

            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default MovieCard;