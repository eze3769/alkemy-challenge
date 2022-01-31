import {createContext, useState, useEffect} from 'react'
import {getChar} from '../api/apiAjax'
import swal from 'sweetalert';


export const appContext = createContext()

const {Provider} = appContext

function HerosContext( {children}) {
    const [auth, setAuth] = useState(true)
    const [heroes, setHeroes] = useState([])

    
    
    const localToken = localStorage.getItem("token")
    
    useEffect(()=>{
        if(localStorage.getItem("heroes")){
            setHeroes(JSON.parse(localStorage.getItem("heroes")))
        }
    },[])

    useEffect(() => {
        localToken ? setAuth(true) : setAuth(false)
        
    }, [localToken])
    
    const destroyLog = () =>{
        setAuth(false)
        localStorage.removeItem("token")
      }
    const addHeroe = (id)=>{
        if (heroes.length < 6){
            const check = heroes.find(el=> el.id === id)
            
            if (!check){
                getChar(id)
                .then(res=>{
                    const alignment = res.data.biography.alignment
                    const findAlignments = heroes.filter(el=>el.biography.alignment === alignment)
                    if (findAlignments.length < 3){
                        let aux = ([...heroes, res.data])
                        setHeroes(aux)
                        localStorage.setItem("heroes",JSON.stringify(aux))
                        swal("Good job!", "Your hero was succefully added!", "success");
                    }else{
                        swal("Oh no!", `You already have 3 ${alignment} heroes, choose from the other alignment! `, "error");
                    }
                })

            }else{
                swal("Oh no!", "Your hero is already part of the team!", "error");
            }
        }else{
            swal("Oh no!", "Your team is complete, fire a hero first if you want to add another!", "info");
        }
    }
    const removeHero = (id) =>{
        const aux = heroes.filter(el => el.id !== id)
        setHeroes(aux)
        localStorage.setItem("heroes",JSON.stringify(aux))
    }

    return (
        <Provider value={{
                        auth, 
                        setAuth, 
                        destroyLog, 
                        addHeroe, 
                        removeHero,
                        heroes
                        }}>

        {children}

    </Provider>
    )
}

export default HerosContext
