import Search from "../../components/search/Search"
import {getSearch} from '../../api/apiAjax'
import { useState } from "react"
import SearchResults from "../../components/searchResults/SearchResults"

function SearchContainer() {
    const [showRes, setShowRes] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [results, setResults] = useState([])
    const inputHandler = (e) =>{
        setShowRes(true)
        let input = e.target.value
        if(input.length > 0){
            setIsLoading(true)
            getSearch(input)
            .then((res)=>{
                if(res.data.response === 'success'){
                    setResults(res.data.results)
                    setIsLoading(false)
                }else{
                    console.log("error",res)
                    setResults({error: res.data.error})
                    setIsLoading(false)
                    console.error(res.error)
                }
                
            })
        }else{
            setShowRes(false)
            setResults([])
        }
        
    }
    return (
        <>
            <Search inputHandler={inputHandler}/>
            {
                showRes && <SearchResults results={results} isLoading={isLoading} />
            }
            

        </>
    )
}

export default SearchContainer
