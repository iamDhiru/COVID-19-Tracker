import React from 'react'
import SymptomsData from './SymptomsData';
const Symptoms = ()=>{
    return(
        <>
            <div className="container-fluid mt-5">
                <div className="container">
                    <h1 className="text-center mb-5">Corona-Virus Symptoms</h1>
          
                <div className="row w-100">
                    {
                        SymptomsData.map((value)=>
                        <div className="col-6 col-md-4  d-flex justify-content-center align-items-center">
                        <div className="symptom  w-100 h-100">
                        <img src={value.image} />
                        <h5 className="mt-2">{value.name}</h5>
                        </div>
                    </div>)
                    }
                </div>
                </div>
            </div>
        </>
    )
}

export  default Symptoms;