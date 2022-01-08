import "./powerBar.css"

function PowerBar({stats, appearance}) {
    console.log(appearance)
    return (
        <>
        <div className="powerBar d-flex justify-content-evenly ">
            {   stats
                ?
                <>
                    <h5>POWERSTATS</h5>
                    <p>Intelligence: <b>{stats.intelligence}</b></p>
                    <p>Strength: <b>{stats.strength}</b></p>
                    <p>Speed: <b>{stats.speed}</b></p>
                    <p>Durability: <b>{stats.durability}</b></p>
                    <p>Power: <b>{stats.power}</b></p>
                    <p>Combat: <b>{stats.combat}</b></p>
                </>
                :
                <>
                    <p aria-hidden="true">
                        <span className="placeholder col-6"></span>
                    </p>
                    <p aria-hidden="true">
                        <span className="placeholder col-6"></span>
                    </p>
                    <p aria-hidden="true">
                        <span className="placeholder col-6"></span>
                    </p>
                    <p aria-hidden="true">
                        <span className="placeholder col-6"></span>
                    </p>
                    <p aria-hidden="true">
                        <span className="placeholder col-6"></span>
                    </p>
                    <p aria-hidden="true">
                        <span className="placeholder col-6"></span>
                    </p>
                </>
              
            }
        </div>
        {
            appearance
            ?
            <div className="d-flex justify-content-end align-content-center">
                <div className="appareanceBar d-flex flex-row ">
                    <p>Average height: <b>{appearance.heightMt} cm</b></p>
                    <p>Average weight: <b>{appearance.weightKg} kgs</b></p>
                </div>
            </div>
            
            :
            <div className="d-flex justify-content-end">
                <div className="appareanceBar d-flex flex-row align-content-center">
                    <p aria-hidden="true">
                        <span className="placeholder col-4"></span>
                    </p>
                    <p aria-hidden="true">
                        <span className="placeholder col-4"></span>
                    </p>
                </div>
            </div>
        }
        
        </>
    )
}

export default PowerBar
