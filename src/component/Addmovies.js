import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


function Addmovies({ movies, setMovies }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newmovies, setnewmovies] = useState({
    title: "",
    description: "",
    posterUrl: "",
    rating: "",
    genre: [],
    type: "movie",
    trending: false
  });

  const handleadd = () => {
    setMovies([...movies, newmovies]);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose} size={"xl"}>
        <div style={{ display: 'flex' }}>
          <div className='imgleft'>
            <img src="https://main.net955305.contentfabric.io/q/iq__284bB9yk4S7nPBdvdCYMb1a2tYUY/meta/public/asset_metadata/images/poster/default?authorization=eyJxc3BhY2VfaWQiOiJpc3BjMlJVb1JlOWVSMnYzM0hBUlFVVlNwMXJZWHp3MSIsImFkZHIiOiIweGZhNTM5Yzg0ODY5MWVjMmYwN2U3ZWFkNDBkZmJkN2RlZTZjZTZlMDQiLCJxbGliX2lkIjoiaWxpYjM2OTFMZWNEaDl5TnlxS0hwd1h0bWVqOGtTNHYifQ==.RVMyNTZLX1A4TEx2VGRUV0pvZnppNlJoN0ExQ2g1aWZaUnVoY2RrWG5UWExGUkFWWFFXZmlDVDc2c2hQR3dTSkVFWXg3MmNoSDNKc3RGcFIzNkpyM2laUmoydlZnSGFq" alt="Movie Cover" />
          </div>
          <div className='contentright'>
            <Modal.Header closeButton>
              <Modal.Title>Add New Movie</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Movie Title</Form.Label>
                  <Form.Control type="text" placeholder="Enter movie title" onChange={(e) => setnewmovies({ ...newmovies, title: e.target.value })} />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Movie Cover URL</Form.Label>
                  <Form.Control type="text" placeholder="Enter movie cover URL" onChange={(e) => setnewmovies({ ...newmovies, posterUrl: e.target.value })} />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Movie Description</Form.Label>
                  <Form.Control type="text" placeholder="Enter movie description" onChange={(e) => setnewmovies({ ...newmovies, description: e.target.value })} />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Movie Rating (1-5)</Form.Label>
                  <Form.Control type="number" min="1" max="5" step="0.1" placeholder="Enter movie rating" onChange={(e) => setnewmovies({ ...newmovies, rating: parseFloat(e.target.value) })} />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Type</Form.Label>
                  <Form.Select onChange={(e) => setnewmovies({ ...newmovies, type: e.target.value })}>
                    <option value="movie">Movie</option>
                    <option value="series">Series</option>
                    <option value="anime">Anime</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Genres (comma-separated, e.g. Action, Drama)</Form.Label>
                  <Form.Control type="text" placeholder="Enter genres" onChange={(e) => setnewmovies({ ...newmovies, genre: e.target.value.split(',').map(g => g.trim()).filter(g => g !== '') })} />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Check type="checkbox" label="Trending" onChange={(e) => setnewmovies({ ...newmovies, trending: e.target.checked })} />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={() => { handleadd(); handleClose(); }}>
                Save Changes
              </Button>
            </Modal.Footer>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Addmovies;