import { useContext } from "react"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import {getChar} from '../../api/apiAjax'
import Details from "../../components/details/Details"
import Loader from "../../components/loader/Loader"
import { appContext } from "../../context/HerosContext"

function DetailsContainer() {
    const[char, setChar] = useState()
    const {id} = useParams()

    const {addHeroe} = useContext(appContext)

    useEffect(() => {
        getChar(id)
        .then((res)=>{
            if(res.data.response === 'success'){
                setChar(res.data)
             
            }
            
        })
    }, [id])
    return (
        <>
            {
                char
                ?
                <Details char={char} addHeroe={addHeroe}/>
                :
                <Loader/>
            }
        </>
    )
}

export default DetailsContainer
