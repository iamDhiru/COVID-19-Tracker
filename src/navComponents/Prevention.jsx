import React from 'react'
import Header from './Header';
import handwash from '../images/handwash.png';
import PreventionData from './PreventionData';
const Prevention = ()=>{
    return(
        <>
            <div className="container-fluid mt-5 mb-5">
                <div className="container ">
                    <h1 className="text-center mb-5">6 Steps Prevention Against Corona-Virus</h1>

                    <div className="row w-100  prevention ">
                        {
                            PreventionData.map((value)=><div className="col-md-4  p-2">
                            <div className="prevention-card p-2">
                                    <div className="d-flex justify-content-center ">
                                    <img src={value.image} alt="prevention" className="img-fluid "/>
                                    </div>
                                    <p className="mt-3">{value.text}</p>
                            </div>
                        </div>)
                        }
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export  default Prevention;