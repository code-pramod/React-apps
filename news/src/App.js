import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {

  const [data, setData] = useState([]);
  const getnews = () => {
    axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=faa01cbcf14b49159f6d418b276d0853&q=india")
      .then((response) => {
        console.log(response.data);
        setData(response.data.articles);
      })
  }
  return (
    <>
      <button className="btn btn-primary" onClick={getnews}> Fetch News </button>
      <div className="container my-4">
        <div className="row">
          {
            data.map((value) => {
              return (
                <div className="col-3">
                  <div clalssName="card" style={{ width: '10rem' }}>
                    <img src={value.urlToImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{value.title}</h5>
                      <p className="card-text">{value.description}</p>
                      <a href="#" className="btn btn-primary">Main News</a>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  );
}

export default App;
