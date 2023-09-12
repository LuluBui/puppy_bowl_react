import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Link, useLocation, Routes, Route } from "react-router-dom";

function Puppy({pups}){
  const location = useLocation();
  const { pathname } = location;
  const id = pathname.substring(1)*1;
  const puppy = pups.find((pup) => pup.id === id);
  console.log(puppy);
 return <div>
    <a href=""> Return to Home </a>
    <div>
    <h2>{puppy.name}</h2>
    <p>Breed: {puppy.breed}</p>
    <p>Team: Ruff</p>
    <p>Status: On {puppy.status.charAt(0).toUpperCase() + puppy.status.slice(1)}</p>
    <img src={puppy.imageUrl} alt={puppy.id}/>
    </div>
 </div>
}
function App() {
  const [puppyPlayers, setPuppyPlayers] = useState([]);
  //const [current, setCurrent] = useState(-1);
  //const [teams, setTeams] = useState([]);
  // 

  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get(
        "https://fsa-puppy-bowl.herokuapp.com/api/2307-FTB-ET-WEB-FT/players"
      );
      //console.log(response.data.data.players);
      setPuppyPlayers(response.data.data.players);
      // response = await axios.get(
      //   "https://fsa-puppy-bowl.herokuapp.com/api/2307-FTB-ET-WEB-FT/teams"
      // );
      // console.log(response.data.data.teams);
      // setTeams(response.data.data.teams);
    };
    fetchData();
  }, []);

  return (
    <>
      <Routes>
        {/* Display Home Menu */}
        <Route path="/" element={
          <div>
          <h1>And Here's The Puppy Bowl Roster!</h1>
            <ul>
              {puppyPlayers.map((pup) => {
                return (
                  <div key={pup.id} className="pane">
                    <Link to={`/${pup.id}`}>
                      <h2>{pup.name}</h2>
                      <h2>{pup.breed}</h2>
                    </Link>
                  </div>
                );
              })}
            </ul>
            </div>
        }/>
        {<Route path='/:id' element= {<Puppy pups={puppyPlayers} />} /> }
      </Routes>
    </>
  );
}

export default App;
