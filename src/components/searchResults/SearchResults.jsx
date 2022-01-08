import React from 'react'
import Pagination from '../../containers/pagination/Pagination'
import Loader from '../loader/Loader'


function SearchResults({results, isLoading}) {
    console.log(results)
    return (
        <div>
            {isLoading ?
                <Loader/>
            :   
            results.error ? 
                <div className='d-flex justify-content-center'>
                    <h3>Nothing to show</h3>
                </div>
                
                :
                <Pagination results={results}/>
            }
        </div>
    )
}

export default SearchResults
