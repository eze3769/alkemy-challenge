import { Link } from "react-router-dom"
import HeroShow from "../heroShow/HeroShow"
import PowerBar from "../powerBar/PowerBar"
import "./teamView.css"

function TeamView({heroes, removeHero, stats, maxPower, appearance}) {
    return (
        <div className="container">
            
            
            {
                heroes.length !== 0
                ?
                <>
                <h1 className="text-center">My Team ({maxPower})</h1>
                <PowerBar stats={stats} appearance={appearance}/>
                <div className="d-flex flex-wrap justify-content-center team-container">
                    {heroes.map((el,index)=>{
                        return <HeroShow key={index} hero={el} removeHero={removeHero} />
                    })}
                </div>
                </>
                :
                <div className="py-4">
                    <h1>My team</h1>
                    <h2 className="py-3">Your team is empty, you must add some characters to see them here!</h2>
                    <div className=" py-3">
                        <p className="py-5 text-center">You haven't heroes yet, encourage to add some!</p>
                        <div className="d-flex justify-content-end">
                        <Link className="btn btn-danger my-5 text-end" to="/search">Go to find heroes</Link>
                        </div>
                       
                    </div>
                </div>
            }
            
        </div>
    )
}

export default TeamView
