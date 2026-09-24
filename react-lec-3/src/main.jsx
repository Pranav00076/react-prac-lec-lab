import {createRoot} from "react-dom/client"
const root = createRoot(document.getElementById("root"));

const apiKey = "36aae90582723ed9c3894e15dddbb1ab";
const url = `https://api.themoviedb.org/3/movie/list?api_key=${apiKey}&language=en-US`;

let MovieCard = (prop) => {
  return (
    <div className="MovieCard">

      <div id={prop.sr}>
        <h2>{`#${prop.sr}`}</h2>
      </div>

      <div className="Image">
        <div id="addtolist"></div>
        <img src={`https://image.tmdb.org/t/p/w500${prop.poster_path}`} alt={prop.title} />
      </div>

      <div className="rating">
        <p id="rate">{`${prop.vote_average} (${prop.vote_count})`}</p>
        <a href="">Rate</a>
      </div>

      <h2 id="title">{prop.title}</h2>

      <p id="time">{`${prop.release_date}`}</p>

      <div className="watchoption">
        <button id="watch">Watch Options</button>
      </div>

    </div>
  )
}

function renderApp(data = []) {
  root.render(
    <div className="Container">
      <div className="header">
        <h1>The Movie List</h1>
        <nav>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">List</a>

        </nav>
      </div>

      <div className="MovieList">
        {
          data.map((data, idx) => {
            return (<MovieCard 
            key={idx}
            sr={idx} 
            poster_path={data.poster_path} 
            title={data.title} 
            vote_average={data.vote_average}
            vote_count = {data.vote_count}
            release_date = {data.release_date}
            />)
          })
        }
      </div>
    </div>
  );
}

fetch(url)
.then(x=>x.json())
.then(data=>data.results)
.then(data=>{
  renderApp(data)
})
