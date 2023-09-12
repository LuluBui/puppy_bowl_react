
import {useParams} from "react-router-dom";

function Puppy({pups,teams}){
    const param = useParams();
    const id = param.id*1;
    const puppy = pups.find((pup) => pup.id === id);
    const team = teams.find((i) => {
        return i.id === puppy.teamId;
    });
    if(!puppy || !team)return null;
return <div>
    <a href=""> Return to Home </a>
    <div>
    <h2>{puppy.name}</h2>
    <p>Breed: {puppy.breed}</p>
    <p>Team: {team.name}</p>
    <p>Status: On {puppy.status.charAt(0).toUpperCase() + puppy.status.slice(1)}</p>
    <img src={puppy.imageUrl} alt={puppy.id}/>
    </div>
</div>
}

export default Puppy;