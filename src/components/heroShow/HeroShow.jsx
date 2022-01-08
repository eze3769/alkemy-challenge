import { Link } from "react-router-dom"
import "./heroShow.css"

function HeroShow({hero, removeHero}) {
    return (
        <div className="hero-show">
            <div>
                <div>
                    <h3 className={hero.biography.alignment === "good" ? "text-center text-success" : "text-center text-danger"} >{hero.name}</h3>
                </div>
                <div className="imgContainer">
                    <img className="hero-show_img"src={hero.image.url} alt={hero.name} />
                    <div className="buttons-container d-flex flex-column ">
                        <Link to={`/characters/${hero.id}`} className="btn btn-secondary">Details</Link>
                        <button className="btn btn-danger" onClick={()=>{removeHero(hero.id)}}>Remove hero</button>
                    </div>
                    
                </div>
                <div className="hero-show_powerstats">
                    <h3>Powerstats:</h3>
                    <div>
                        <h5>Intelligence:</h5>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: `${hero.powerstats.intelligence}%`}} aria-valuenow={hero.powerstats.intelligence} aria-valuemin="0" aria-valuemax="100">{hero.powerstats.intelligence}</div>
                        </div>
                        <h5>Strenght:</h5>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: `${hero.powerstats.strength}%`}} aria-valuenow={hero.powerstats.strength} aria-valuemin="0" aria-valuemax="100">{hero.powerstats.strength}</div>
                        </div>
                        <h5>Speed:</h5>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: `${hero.powerstats.speed}%`}} aria-valuenow={hero.powerstats.speed} aria-valuemin="0" aria-valuemax="100">{hero.powerstats.speed}</div>
                        </div>
                        <h5>Durability:</h5>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: `${hero.powerstats.durability}%`}} aria-valuenow={hero.powerstats.durability} aria-valuemin="0" aria-valuemax="100">{hero.powerstats.durability}</div>
                        </div>
                        <h5>Power:</h5>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: `${hero.powerstats.power}%`}} aria-valuenow={hero.powerstats.power} aria-valuemin="0" aria-valuemax="100">{hero.powerstats.power}</div>
                        </div>
                        <h5>Combat:</h5>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: `${hero.powerstats.combat}%`}} aria-valuenow={hero.powerstats.combat} aria-valuemin="0" aria-valuemax="100">{hero.powerstats.combat}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroShow
