import Card from "../card/Card"
import Loader from '../loader/Loader'
function HeroesList({heroes, addHeroe}) {
    
    return (
        <div className="container justify-content-center d-flex flex-wrap">
            {   heroes ?
                heroes.map((el,index)=>{
                    return(
                    <Card key={index} char={el} addHeroe={addHeroe}/>
                    )
                })
                :
                <Loader/>
            }
        </div>
    )
}

export default HeroesList
