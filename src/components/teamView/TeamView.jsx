import { Link } from "react-router-dom"
import HeroShow from "../heroShow/HeroShow"
import PowerBar from "../powerBar/PowerBar"
import "./teamView.css"

function TeamView({heroes, removeHero, stats, maxPower, appearance}) {
    return (
        <div className="container">
            <h1 className="text-center">My Team ({maxPower})</h1>
            
            {
                heroes
                ?
                <>
                <PowerBar stats={stats} appearance={appearance}/>
                <div className="d-flex flex-wrap justify-content-center team-container">
                    {heroes.map((el,index)=>{
                        return <HeroShow key={index} hero={el} removeHero={removeHero} />
                    })}
                </div>
                </>
                :
                <>
                    <p>You haven't heroes yet, encourage to add some!</p>
                    <Link className="btn btn-danger" to="/search">Go to find heroes</Link>
                </>
            }
            
        </div>
    )
}

export default TeamView
