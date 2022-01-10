import { useState, useContext, useEffect} from "react"
import TeamView from "../../components/teamView/TeamView"
import { appContext } from "../../context/HerosContext"



function Home() {
    const {heroes, removeHero} = useContext(appContext)
    const [stats, setStats] = useState()
    const [maxPower, setMaxPower] =useState("")
    const [appearance, setAppareance] = useState()

    const length = heroes.length
    useEffect(() => {
        if(heroes){
        let [intelligence, strength, speed, durability, power, combat, heightMt, weightKg] = Array(8).fill(0)

        heroes.forEach((el)=>{
            const powerstat = el.powerstats
            if (!isNaN(parseInt(powerstat.intelligence))) intelligence+= parseInt(powerstat.intelligence)
            if (!isNaN(parseInt(powerstat.strength))) strength+= parseInt(powerstat.strength)
            if (!isNaN(parseInt(powerstat.speed))) speed+= parseInt(powerstat.speed)
            if (!isNaN(parseInt(powerstat.durability))) durability+= parseInt(powerstat.durability)
            if (!isNaN(parseInt(powerstat.power))) power+= parseInt(powerstat.power)
            if (!isNaN(parseInt(powerstat.combat))) combat+= parseInt(powerstat.combat)
            if (!isNaN(parseInt(el.appearance.height[1]))) heightMt+= parseInt(el.appearance.height[1])
            if (!isNaN(parseInt(el.appearance.weight[1]))) weightKg+= parseInt(el.appearance.weight[1])
        }) 
        const values ={
            intelligence: Math.floor((intelligence/length)),
            strength: Math.floor((strength/length)),
            speed: Math.floor((speed / length)),
            durability: Math.floor((durability / length)), 
            power: Math.floor((power / length)), 
            combat: Math.floor((combat / length))
        }
        setStats(values)

        const rawValues = {intelligence,strength,speed,durability,power,combat}
        const findHighest = obj => {
            const values = Object.values(obj);
            const max = Math.max.apply(Math, values);
            for (let key in obj) {
               if (obj[key] === max) {
                  return key
               };
            };
         };
         setMaxPower(findHighest(rawValues))
         
         const appareanceData ={
            heightMt: Math.floor((heightMt/length)),
            weightKg: Math.floor((weightKg / length))
         }
         setAppareance(appareanceData)
        }
    }, [heroes, length])

    return (
        <>
          <TeamView heroes={heroes} 
                    removeHero={removeHero} 
                    stats={stats} 
                    maxPower={maxPower}
                    appearance = {appearance}
                    />
        </>
    )
}

export default Home
