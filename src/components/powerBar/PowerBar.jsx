import "./powerBar.css"

function PowerBar({stats, appearance}) {
    return (
        <>
        <div className="powerBar d-flex justify-content-evenly ">
            {   stats
                ?
                
                <>
                    <h5>POWERSTATS</h5>
                    <p>Intelligence: <b>{stats.intelligence || 0}</b></p>
                    <p>Strength: <b>{stats.strength || 0}</b></p>
                    <p>Speed: <b>{stats.speed || 0}</b></p>
                    <p>Durability: <b>{stats.durability || 0}</b></p>
                    <p>Power: <b>{stats.power || 0}</b></p>
                    <p>Combat: <b>{stats.combat || 0}</b></p>
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
                    <p>Average height: <b>{appearance.heightMt || 0} cm</b></p>
                    <p>Average weight: <b>{appearance.weightKg || 0} kgs</b></p>
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
