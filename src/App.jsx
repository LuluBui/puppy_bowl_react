import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Link, Routes, Route } from "react-router-dom";
import Puppy from "./Puppy";

function App() {
  const [puppyPlayers, setPuppyPlayers] = useState([]);
  const [teams, setTeams] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get(
        "https://fsa-puppy-bowl.herokuapp.com/api/2307-FTB-ET-WEB-FT/players"
      );
      //console.log(response.data.data.players);
      setPuppyPlayers(response.data.data.players);
      response = await axios.get(
        "https://fsa-puppy-bowl.herokuapp.com/api/2307-FTB-ET-WEB-FT/teams"
      );
      console.log(response.data.data.teams);
      setTeams(response.data.data.teams);
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
        {<Route path='/:id' element= {<Puppy pups={puppyPlayers} teams={teams}/>} /> }
      </Routes>
    </>
  );
}

export default App;
