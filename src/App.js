import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import Main from './component/Main';
import Footer from './component/Footer';
import List from './component/List';
import { useState } from 'react';
import Addmovies from './component/Addmovies';

function App() {
const [movies, setMovies] = useState([

  // ================= MOVIES =================
  { title: "Interstellar", description: "A team of explorers travel through a wormhole...", posterUrl: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg", rating: 5, genre: ["Sci-Fi","Drama"], type:"movie", trending:true },
  { title: "Inception", description: "A thief who steals corporate secrets...", posterUrl: "https://image.tmdb.org/t/p/w500/8IB2e4r4oVhHnANbnm7O3Tj6tF8.jpg", rating: 5, genre: ["Sci-Fi","Action"], type:"movie", trending:true },
  { title: "The Dark Knight", description: "Batman faces the Joker...", posterUrl: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg", rating: 5, genre: ["Action","Drama"], type:"movie", trending:true },
  { title: "Avengers: Endgame", description: "The Avengers assemble to reverse Thanos’ actions...", posterUrl: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg", rating: 4.5, genre: ["Action"], type:"movie", trending:true },
  { title: "Joker", description: "In Gotham City, a failed comedian turns to crime...", posterUrl: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg", rating: 4, genre: ["Drama"], type:"movie", trending:true },
  { title: "Titanic", description: "A love story on the ill-fated ship...", posterUrl: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg", rating: 4.5, genre: ["Romance"], type:"movie" },
  { title: "Avatar", description: "On Pandora, humans clash with the Na'vi...", posterUrl: "https://image.tmdb.org/t/p/w500/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg", rating: 4.5, genre: ["Sci-Fi"], type:"movie" },
  { title: "John Wick", description: "A retired hitman seeks revenge...", posterUrl: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg", rating: 4.5, genre: ["Action"], type:"movie" },
  { title: "Frozen", description: "A queen's icy powers create adventure...", posterUrl: "https://image.tmdb.org/t/p/w500/yp8vEZflGynlEylxEesbYasc06i.jpg", rating: 4, genre: ["Animation"], type:"movie" },
  { title: "The Conjuring", description: "Paranormal investigators face a dark force...", posterUrl: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg", rating: 4, genre: ["Horror"], type:"movie" },
  { title: "Deadpool", description: "A mercenary gains healing powers and humor...", posterUrl: "https://image.tmdb.org/t/p/w500/fSRb7vyIP8rQpL0I47P3qUsEKX3.jpg", rating: 4, genre: ["Comedy","Action"], type:"movie" },
  { title: "The Shawshank Redemption", description: "Two imprisoned men bond over decades...", posterUrl: "https://image.tmdb.org/t/p/w500/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg", rating: 5, genre: ["Drama"], type:"movie" },
  { title: "The Godfather", description: "The aging patriarch of an organized crime dynasty transfers control...", posterUrl: "https://image.tmdb.org/t/p/w500/3IhGkkalwXguTlceGSl8XUJZOVI.jpg", rating: 5, genre: ["Crime","Drama"], type:"movie" },
  { title: "Pulp Fiction", description: "The lives of two mob hitmen, a boxer, a gangster's wife...", posterUrl: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg", rating: 4.8, genre: ["Crime","Drama"], type:"movie" },
  { title: "Fight Club", description: "An insomniac office worker and a devil-may-care soap maker form an underground fight club...", posterUrl: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4km5jsTW.jpg", rating: 4.7, genre: ["Drama"], type:"movie" },
  { title: "Forrest Gump", description: "The presidencies of Kennedy and Johnson, the Vietnam War...", posterUrl: "https://image.tmdb.org/t/p/w500/clolk7rB5lAjs41SD0VtPWQSyZK.jpg", rating: 4.8, genre: ["Drama","Romance"], type:"movie" },
  { title: "The Matrix", description: "A computer hacker learns from mysterious rebels about the true nature of his reality...", posterUrl: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg", rating: 4.7, genre: ["Sci-Fi","Action"], type:"movie" },
  { title: "Oppenheimer", description: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb...", posterUrl: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg", rating: 4.8, genre: ["Drama","History"], type:"movie" },
  { title: "Parasite", description: "Greed and class discrimination threaten the newly formed symbiotic relationship...", posterUrl: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg", rating: 4.9, genre: ["Thriller","Drama"], type:"movie" },
  { title: "Everything Everywhere All at Once", description: "An aging Chinese immigrant is swept up in an insane adventure...", posterUrl: "https://image.tmdb.org/t/p/w500/wDWwtvkRRlgTiUr6TyLSMX8FCWC.jpg", rating: 4.7, genre: ["Sci-Fi","Comedy"], type:"movie" },

  // ================= SERIES =================
  { title: "Breaking Bad", description: "A chemistry teacher turns to making meth...", posterUrl: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg", rating: 5, genre: ["Drama"], type:"series", trending:true },
  { title: "Stranger Things", description: "Kids face supernatural forces in Hawkins...", posterUrl: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg", rating: 4.5, genre: ["Sci-Fi"], type:"series", trending:true },
  { title: "Game of Thrones", description: "Noble families vie for the Iron Throne...", posterUrl: "https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg", rating: 5, genre: ["Fantasy"], type:"series", trending:true },
  { title: "The Boys", description: "Superheroes are corrupt in this dark series...", posterUrl: "https://image.tmdb.org/t/p/w500/2zmTngn1tYC1AvfnrFLhxeD82hz.jpg", rating: 4.5, genre: ["Action"], type:"series" },
  { title: "Wednesday", description: "Wednesday Addams navigates high school...", posterUrl: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg", rating: 4, genre: ["Comedy"], type:"series" },
  { title: "Dark", description: "Time-travel mysteries in a small German town...", posterUrl: "https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg", rating: 4.5, genre: ["Sci-Fi"], type:"series" },
  { title: "Loki", description: "God of Mischief adventures after Endgame...", posterUrl: "https://image.tmdb.org/t/p/w500/voHUmluYmKyleFkTu3lOXQG702u.jpg", rating: 4.5, genre: ["Sci-Fi"], type:"series" },
  { title: "Peaky Blinders", description: "A gangster family rises in post-WWI England...", posterUrl: "https://image.tmdb.org/t/p/w500/bGZn5RVzMMXju4ev7xbl1aLdXqq.jpg", rating: 4.5, genre: ["Crime"], type:"series", trending:true },
  { title: "The Sopranos", description: "New Jersey-based Italian-American mobster Tony Soprano deals with personal and professional issues...", posterUrl: "https://image.tmdb.org/t/p/w500/rTbM6X2SwY4Rh0Uxv5llfMnJZoH.jpg", rating: 5, genre: ["Crime","Drama"], type:"series" },
  { title: "Chernobyl", description: "The events surrounding the Chernobyl nuclear disaster...", posterUrl: "https://image.tmdb.org/t/p/w500/hvfl4xr8O7snesAPa7GzGe8Qypp.jpg", rating: 5, genre: ["Drama","History"], type:"series" },
  { title: "The Wire", description: "The drug scene in West Baltimore...", posterUrl: "https://image.tmdb.org/t/p/w500/4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg", rating: 5, genre: ["Crime","Drama"], type:"series" },
  { title: "Better Call Saul", description: "The trials and tribulations of criminal lawyer Jimmy McGill...", posterUrl: "https://image.tmdb.org/t/p/w500/f496Cm9OpRfyn0u5qN7m2QhA1kZ.jpg", rating: 4.8, genre: ["Crime","Drama"], type:"series" },
  { title: "Arcane", description: "Set in utopian Piltover and the oppressed underground of Zaun...", posterUrl: "https://image.tmdb.org/t/p/w500/ffcdN24fvsEMRocmfc6BNXeqqAY.jpg", rating: 4.9, genre: ["Animation","Action"], type:"series" },
  { title: "The Mandalorian", description: "The travels of a lone bounty hunter and his young companion Grogu...", posterUrl: "https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg", rating: 4.6, genre: ["Sci-Fi","Adventure"], type:"series" },

  // ================= ANIME =================
  { title: "Attack on Titan", description: "Humanity battles Titans in a post‑apocalyptic world...", posterUrl: "https://image.tmdb.org/t/p/w500/aiLrL4h3F1l6lC3HG61LMyZPTHe.jpg", rating: 5, genre: ["Action","Fantasy"], type:"anime", trending:true },
  { title: "Demon Slayer: Kimetsu no Yaiba", description: "A boy fights demons to save his sister...", posterUrl: "https://image.tmdb.org/t/p/w500/xPpXYnCWfjkt3zzE0dpCNME1pXF.jpg", rating: 4.5, genre: ["Action","Adventure"], type:"anime", trending:true },
  { title: "My Hero Academia", description: "A boy born without powers attends a hero academy...", posterUrl: "https://image.tmdb.org/t/p/w500/xRWht48C2V8XNfzvPehyClOvDni.jpg", rating: 4.5, genre: ["Action","Adventure"], type:"anime", trending:true },
  { title: "One Piece", description: "A boy sets sail to become Pirate King...", posterUrl: "https://comicvine.gamespot.com/a/uploads/scale_small/11158/111586527/9907209-5147262042-97840.jpg", rating: 5, genre: ["Adventure","Comedy"], type:"anime", trending:true },
  { title: "Naruto", description: "A ninja boy dreams of becoming the strongest...", posterUrl: "https://image.tmdb.org/t/p/w500/dD2rzQG81cQgHPvRsBHk9mY8H65.jpg", rating: 4.5, genre: ["Action","Adventure"], type:"anime" },
  { title: "Your Name", description: "Two teenagers swap bodies and explore fate and love...", posterUrl: "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg", rating: 5, genre: ["Romance","Fantasy"], type:"anime" },
  { title: "Fullmetal Alchemist: Brotherhood", description: "Two brothers search for a Philosopher's Stone after an attempt to revive their mother goes awry...", posterUrl: "https://image.tmdb.org/t/p/w500/5zjXAgw0p4l0aV4dGdtO3qKwDF9.jpg", rating: 5, genre: ["Action","Adventure"], type:"anime" },
  { title: "Cowboy Bebop", description: "Bounty hunting crew travels the galaxy in search of criminals...", posterUrl: "https://image.tmdb.org/t/p/w500/5UsRybkBJC2BDkR2sk9O2xT8MJU.jpg", rating: 4.9, genre: ["Sci-Fi","Action"], type:"anime" },
  { title: "Steins;Gate", description: "A group of friends discover a way to send messages to the past...", posterUrl: "https://image.tmdb.org/t/p/w500/5Z9r4Z4jXz0X8X8X8X8X8X8X8X8.jpg", rating: 4.9, genre: ["Sci-Fi","Thriller"], type:"anime" },
  { title: "Death Note", description: "A high school student gains the power to kill anyone by writing their name...", posterUrl: "https://image.tmdb.org/t/p/w500/6fMJ3jhy5r0jZ3JqV3Z8jZ8Z8Z8.jpg", rating: 4.7, genre: ["Mystery","Thriller"], type:"anime" },
  { title: "Hunter x Hunter (2011)", description: "A boy searches for his father while becoming a Hunter...", posterUrl: "https://image.tmdb.org/t/p/w500/5nSSkcM3TgpllZ7yTyBOQEgAX36.jpg", rating: 4.8, genre: ["Action","Adventure"], type:"anime" },
  { title: "Vinland Saga", description: "A young Viking seeks revenge for his father's death...", posterUrl: "https://image.tmdb.org/t/p/w500/7v4b3tS4yq3S4yq3S4yq3S4yq3S.jpg", rating: 4.8, genre: ["Action","Historical"], type:"anime" },
  { title: "Frieren: Beyond Journey's End", description: "An elf mage reflects on her past adventures after the hero's death...", posterUrl: "https://image.tmdb.org/t/p/w500/frieren.jpg", rating: 4.9, genre: ["Fantasy","Drama"], type:"anime" },

]);
  const [text, settext] = useState("");
  const [rate, setrate] = useState(1);

  return (
    <div className="App">
      <Navbar settext={settext} setrate={setrate} />
      <Main />
 {/* TRENDING MOVIES */}
      <div className="mid">
        <div className="hero__titlees">
          <h1 className="title__linee title__linee--whitee">TRENDING</h1>
          <h1 className="title__linee title__linee--gradiente">MOVIES</h1>
        </div>
        <div className="add">
          <Addmovies movies={movies} setMovies={setMovies} />
        </div>
      </div>

      <div className="leftlist">
        <List movies={movies.filter(m => m.type==="movie" && m.trending)} text={text} rate={rate} setMovies={setMovies} />
      </div>


      {/* TRENDING SERIES */}
      <div className="hero__titlees">
        <h1 className="title__linee title__linee--whitee">TRENDING</h1>
        <h1 className="title__linee title__linee--gradiente">SERIES</h1>
      </div>
      <div className="leftlist">
        <List movies={movies.filter(m => m.type==="series" && m.trending)} text={text} rate={rate} setMovies={setMovies} />
      </div>

      {/* TRENDING ANIME */}
      <div className="hero__titlees">
        <h1 className="title__linee title__linee--whitee">TRENDING</h1>
        <h1 className="title__linee title__linee--gradiente">ANIME</h1>
      </div>
      <div className="leftlist">
        <List movies={movies.filter(m => m.type==="anime" && m.trending)} text={text} rate={rate} setMovies={setMovies} />
      </div>

      {/* OLD FILTERS */}
      <div className="hero__titlees">
        <h1 className="title__linee title__linee--whitee">SCI -</h1>
        <h1 className="title__linee title__linee--gradiente">FI</h1>
      </div>
      <div className="leftlist">
        <List movies={movies.filter(m => m.genre.includes("Sci-Fi"))} text={text} rate={rate} setMovies={setMovies} />
      </div>

      <div className="hero__titlees">
        <h1 className="title__linee title__linee--whitee">ACTION</h1>
      </div>
      <div className="leftlist">
        <List movies={movies.filter(m => m.genre.includes("Action"))} text={text} rate={rate} setMovies={setMovies} />
      </div>

      <div className="hero__titlees">
        <h1 className="title__linee title__linee--whitee">COMEDY</h1>
      </div>
      <div className="leftlist">
        <List movies={movies.filter(m => m.genre.includes("Comedy"))} text={text} rate={rate} setMovies={setMovies} />
      </div>

      <div className="hero__titlees">
        <h1 className="title__linee title__linee--whitee">HORROR</h1>
      </div>
      <div className="leftlist">
        <List movies={movies.filter(m => m.genre.includes("Horror"))} text={text} rate={rate} setMovies={setMovies} />
      </div>

      <div className="hero__titlees">
        <h1 className="title__linee title__linee--whitee">ANIMATION</h1>
      </div>
      <div className="leftlist">
        <List movies={movies.filter(m => m.genre.includes("Animation"))} text={text} rate={rate} setMovies={setMovies} />
      </div>

      <div className="hero__titlees">
        <h1 className="title__linee title__linee--whitee">DRAMA</h1>
      </div>
      <div className="leftlist">
        <List movies={movies.filter(m => m.genre.includes("Drama"))} text={text} rate={rate} setMovies={setMovies} />
      </div>

      {/* ANIME GENRE FILTERS */}
      <div className="hero__titlees">
        <h1 className="title__linee title__linee--whitee">ACTION ANIME</h1>
      </div>
      <div className="leftlist">
        <List movies={movies.filter(m => m.type==="anime" && m.genre.includes("Action"))} text={text} rate={rate} setMovies={setMovies} />
      </div>

      <div className="hero__titlees">
        <h1 className="title__linee title__linee--whitee">ADVENTURE ANIME</h1>
      </div>
      <div className="leftlist">
        <List movies={movies.filter(m => m.type==="anime" && m.genre.includes("Adventure"))} text={text} rate={rate} setMovies={setMovies} />
      </div>

      <div className="hero__titlees">
        <h1 className="title__linee title__linee--whitee">FANTASY ANIME</h1>
      </div>
      <div className="leftlist">
        <List movies={movies.filter(m => m.type==="anime" && m.genre.includes("Fantasy"))} text={text} rate={rate} setMovies={setMovies} />
      </div>

      <div className="hero__titlees">
        <h1 className="title__linee title__linee--whitee">COMEDY ANIME</h1>
      </div>
      <div className="leftlist">
        <List movies={movies.filter(m => m.type==="anime" && m.genre.includes("Comedy"))} text={text} rate={rate} setMovies={setMovies} />
      </div>

      <br /><br /><br />
      <Footer />
    </div>
  );
}

export default App;