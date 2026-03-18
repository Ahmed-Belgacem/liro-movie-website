import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const S = {
  label: {
    fontFamily: "'Nunito', sans-serif",
    fontSize: '11px',
    fontWeight: 800,
    color: 'rgba(200,200,220,0.5)',
    textTransform: 'uppercase',
    letterSpacing: '0.8px',
    marginBottom: '6px',
    display: 'block',
  },
  input: {
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '8px',
    color: '#e0e0f0',
    fontFamily: "'Nunito', sans-serif",
    fontSize: '14px',
    fontWeight: 500,
    padding: '10px 14px',
    outline: 'none',
    transition: 'border 0.2s, background 0.2s',
  },
  field: {
    marginBottom: '16px',
  },
};

function Addmovies({ movies, setMovies }) {
  const [show, setShow] = useState(false);
  const [newmovies, setnewmovies] = useState({
    title: '', description: '', posterUrl: '',
    trailerUrl: '', rating: '', genre: [],
    type: 'movie', trending: false,
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleadd = () => {
    if (newmovies.title) setMovies([...movies, newmovies]);
  };

  const typeColors = { movie: '#e8003d', series: '#7c3aed', anime: '#f59e0b' };

  return (
    <>
      {/* ── Trigger Button ── */}
      <button
        onClick={handleShow}
        style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          background: 'linear-gradient(135deg, #06b6d4, #3b82f6, #7c3aed)',
          border: 'none', borderRadius: '30px',
          padding: '10px 22px',
          fontFamily: "'Nunito', sans-serif",
          fontSize: '14px', fontWeight: 800,
          color: '#fff', cursor: 'pointer',
          letterSpacing: '0.4px',
          transition: 'opacity 0.2s, transform 0.15s',
        }}
        onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'scale(1.03)'; }}
        onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'scale(1)'; }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
        Add Movie
      </button>

      {/* ── Modal ── */}
      <Modal show={show} onHide={handleClose} size="xl" centered contentClassName="border-0 bg-transparent">
        <div style={{
          display: 'flex',
          background: 'radial-gradient(ellipse at top, #1a1a2e 0%, #0d0d1a 60%, #000 100%)',
          borderRadius: '14px',
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.08)',
          minHeight: '580px',
          boxShadow: '0 40px 80px rgba(0,0,0,0.8)',
        }}>

          {/* ── Left: Fixed Poster Image ── */}
          <div style={{ width: '240px', flexShrink: 0, position: 'relative' }}>
            <img
              src="https://main.net955305.contentfabric.io/q/iq__284bB9yk4S7nPBdvdCYMb1a2tYUY/meta/public/asset_metadata/images/poster/default?authorization=eyJxc3BhY2VfaWQiOiJpc3BjMlJVb1JlOWVSMnYzM0hBUlFVVlNwMXJZWHp3MSIsImFkZHIiOiIweGZhNTM5Yzg0ODY5MWVjMmYwN2U3ZWFkNDBkZmJkN2RlZTZjZTZlMDQiLCJxbGliX2lkIjoiaWxpYjM2OTFMZWNEaDl5TnlxS0hwd1h0bWVqOGtTNHYifQ==.RVMyNTZLX1A4TEx2VGRUV0pvZnppNlJoN0ExQ2g1aWZaUnVoY2RrWG5UWExGUkFWWFFXZmlDVDc2c2hQR3dTSkVFWXg3MmNoSDNKc3RGcFIzNkpyM2laUmoydlZnSGFq"
              alt="Movie Cover"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            {/* right-side fade into form */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to right, transparent 55%, #0d0d1a 100%)',
            }} />
          </div>

          {/* ── Right: Form ── */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

            {/* Header */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '20px 24px 16px',
              borderBottom: '1px solid rgba(255,255,255,0.07)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: '11px', fontWeight: 800,
                  letterSpacing: '0.6px', padding: '4px 12px',
                  borderRadius: '20px', textTransform: 'uppercase',
                  background: typeColors[newmovies.type] || '#e8003d',
                  color: '#fff', transition: 'background 0.3s',
                }}>{newmovies.type}</span>
                <h4 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.4rem', fontWeight: 700,
                  color: '#ffffff', margin: 0,
                }}>Add to Library</h4>
              </div>

              <button onClick={handleClose} style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '50%', width: '34px', height: '34px',
                color: '#aaa', cursor: 'pointer', fontSize: '15px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'background 0.2s, color 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.13)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.color = '#aaa'; }}
              >✕</button>
            </div>

            {/* Form Body */}
            <div style={{
              flex: 1, padding: '20px 24px',
              overflowY: 'auto',
              scrollbarWidth: 'none',
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 16px' }}>

                {/* Title */}
                <div style={{ ...S.field, gridColumn: '1 / -1' }}>
                  <label style={S.label}>Movie / Show Title</label>
                  <input
                    style={S.input}
                    placeholder="e.g. Inception"
                    onFocus={e => e.target.style.border = '1px solid rgba(6,182,212,0.6)'}
                    onBlur={e => e.target.style.border = '1px solid rgba(255,255,255,0.1)'}
                    onChange={e => setnewmovies({ ...newmovies, title: e.target.value })}
                  />
                </div>

                {/* Poster URL */}
                <div style={{ ...S.field, gridColumn: '1 / -1' }}>
                  <label style={S.label}>Poster URL</label>
                  <input
                    style={S.input}
                    placeholder="https://image.tmdb.org/..."
                    onFocus={e => e.target.style.border = '1px solid rgba(6,182,212,0.6)'}
                    onBlur={e => e.target.style.border = '1px solid rgba(255,255,255,0.1)'}
                    onChange={e => setnewmovies({ ...newmovies, posterUrl: e.target.value })}
                  />
                </div>

                {/* Trailer URL */}
                <div style={{ ...S.field, gridColumn: '1 / -1' }}>
                  <label style={S.label}>
                    Trailer URL{' '}
                    <span style={{ color: 'rgba(6,182,212,0.7)', fontWeight: 600 }}>(YouTube Embed)</span>
                  </label>
                  <input
                    style={S.input}
                    placeholder="https://www.youtube.com/embed/..."
                    onFocus={e => e.target.style.border = '1px solid rgba(6,182,212,0.6)'}
                    onBlur={e => e.target.style.border = '1px solid rgba(255,255,255,0.1)'}
                    onChange={e => setnewmovies({ ...newmovies, trailerUrl: e.target.value })}
                  />
                </div>

                {/* Description */}
                <div style={{ ...S.field, gridColumn: '1 / -1' }}>
                  <label style={S.label}>Description</label>
                  <textarea
                    style={{ ...S.input, height: '72px', resize: 'none' }}
                    placeholder="Short description..."
                    onFocus={e => e.target.style.border = '1px solid rgba(6,182,212,0.6)'}
                    onBlur={e => e.target.style.border = '1px solid rgba(255,255,255,0.1)'}
                    onChange={e => setnewmovies({ ...newmovies, description: e.target.value })}
                  />
                </div>

                {/* Rating */}
                <div style={S.field}>
                  <label style={S.label}>Rating (1 – 5)</label>
                  <input
                    type="number" min="1" max="5" step="0.1"
                    style={S.input}
                    placeholder="4.5"
                    onFocus={e => e.target.style.border = '1px solid rgba(6,182,212,0.6)'}
                    onBlur={e => e.target.style.border = '1px solid rgba(255,255,255,0.1)'}
                    onChange={e => setnewmovies({ ...newmovies, rating: parseFloat(e.target.value) })}
                  />
                </div>

                {/* Type */}
                <div style={S.field}>
                  <label style={S.label}>Type</label>
                  <select
                    style={{ ...S.input, cursor: 'pointer', appearance: 'none' }}
                    onFocus={e => e.target.style.border = '1px solid rgba(6,182,212,0.6)'}
                    onBlur={e => e.target.style.border = '1px solid rgba(255,255,255,0.1)'}
                    onChange={e => setnewmovies({ ...newmovies, type: e.target.value })}
                  >
                    <option value="movie"  style={{ background: '#0d0d1a' }}>🎬 Movie</option>
                    <option value="series" style={{ background: '#0d0d1a' }}>📺 Series</option>
                    <option value="anime"  style={{ background: '#0d0d1a' }}>⛩ Anime</option>
                  </select>
                </div>

                {/* Genres */}
                <div style={{ ...S.field, gridColumn: '1 / -1' }}>
                  <label style={S.label}>
                    Genres{' '}
                    <span style={{ color: 'rgba(200,200,220,0.35)', fontWeight: 500 }}>comma-separated</span>
                  </label>
                  <input
                    style={S.input}
                    placeholder="Action, Drama, Sci-Fi"
                    onFocus={e => e.target.style.border = '1px solid rgba(6,182,212,0.6)'}
                    onBlur={e => e.target.style.border = '1px solid rgba(255,255,255,0.1)'}
                    onChange={e => setnewmovies({
                      ...newmovies,
                      genre: e.target.value.split(',').map(g => g.trim()).filter(g => g !== ''),
                    })}
                  />
                </div>

                {/* Trending */}
                <div style={{ ...S.field, gridColumn: '1 / -1', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input
                    type="checkbox" id="trending-check"
                    style={{ width: '17px', height: '17px', accentColor: '#06b6d4', cursor: 'pointer' }}
                    onChange={e => setnewmovies({ ...newmovies, trending: e.target.checked })}
                  />
                  <label htmlFor="trending-check" style={{ ...S.label, margin: 0, cursor: 'pointer', fontSize: '12px' }}>
                    🔥 Mark as Trending
                  </label>
                </div>

              </div>
            </div>

            {/* Footer */}
            <div style={{
              padding: '14px 24px',
              borderTop: '1px solid rgba(255,255,255,0.07)',
              display: 'flex', justifyContent: 'flex-end', gap: '10px',
            }}>
              <button
                onClick={handleClose}
                style={{
                  background: 'rgba(40,40,55,0.8)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '30px', padding: '9px 20px',
                  color: 'rgba(200,200,220,0.8)',
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: '13px', fontWeight: 700, cursor: 'pointer',
                  transition: 'border 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.border = '1px solid rgba(255,255,255,0.28)'}
                onMouseLeave={e => e.currentTarget.style.border = '1px solid rgba(255,255,255,0.12)'}
              >Cancel</button>

              <button
                onClick={() => { handleadd(); handleClose(); }}
                style={{
                  background: 'linear-gradient(135deg, #06b6d4, #3b82f6, #7c3aed)',
                  border: 'none', borderRadius: '30px', padding: '9px 24px',
                  color: '#fff', fontFamily: "'Nunito', sans-serif",
                  fontSize: '13px', fontWeight: 800, cursor: 'pointer',
                  letterSpacing: '0.3px',
                  transition: 'opacity 0.2s, transform 0.15s',
                }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'scale(1.02)'; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'scale(1)'; }}
              >✓ Save to Library</button>
            </div>

          </div>
        </div>
      </Modal>
    </>
  );
}

export default Addmovies;