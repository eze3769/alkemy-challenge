import React from 'react'
import './index.css'
import { Formik, Field } from 'formik'


function Search({inputHandler}) {

    return (
        <>
            <header className="masthead">
            <div className="container position-relative">
                <div className="row justify-content-center">
                    <div className="col-xl-6">
                        <div className="text-center text-white">
                         
                            <h1 className="mb-5">Find your SuperHero! </h1>
                            <input className='form-control' type="text" onInput={inputHandler} placeholder='Look for your favorites heroes!' />
                            
                        </div>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}

export default Search
