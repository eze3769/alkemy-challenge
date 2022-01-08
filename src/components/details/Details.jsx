import "./details.css"

function Details({char, addHeroe}) {
    console.log(char)
    return (
        <div className="container">
            <h1 className="py-3">{char.name}</h1>
            <div className="d-flex justify-content-around align-items-center px-5 details-container">
                <div className="">
                    <img className="char-image" src={char.image.url} alt={char.name} />
                </div>
                <div >
                    <div className="details-text-container ">
                        <p><b>Fullname: </b>{char.biography["full-name"]}</p>
                        <p><b>Aliases: </b>{
                            char.biography.aliases.map((el,index)=>{
                                return <span key={index}>{el}, </span>
                            })
                        }</p>
                        <p><b>Weight: </b>{char.appearance.weight[0]} / {char.appearance.weight[1]}</p>
                        <p><b>Height: </b>{char.appearance.height[0]} / {char.appearance.height[1]}</p>
                        <p><b>Eyes color: </b>{char.appearance["eye-color"]}</p>
                        <p><b>Hair color: </b>{char.appearance["hair-color"]}</p>
                        <p><b>Occupation: </b>{char.work.ocuppation}</p>
                        <p><b>Workplace: </b>{char.work.base}</p>
                        <div>
                            <button onClick={()=>{addHeroe(char.id)}} className="btn btn-primary">Add to team</button>
            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details
