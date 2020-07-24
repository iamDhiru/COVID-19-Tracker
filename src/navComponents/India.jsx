import React, {useEffect, useState} from 'react'
import axios from 'axios'


const India = ()=>{

    const [data, setData] = useState([]);
    useEffect(()=>{
        const url = "https://api.covid19india.org/data.json";
        const getData = async ()=>{
            const response = await axios.get(url);
            // newData = response.data.statewise;   
            setData(response.data.statewise);
        }
        getData(); 
    })

    return(
        <>

            
            <div className="container data-table mt-5">
                <div className=" table-responsive">
                    <table className="table table-bordered text-center table-striped">
                        <thead className="table-dark">
                            <tr>
                                <th>Last Update</th>
                                <th>State</th>
                                <th>Confirmed</th>
                                <th className="text-success">Recovered</th>
                                <th className="text-primary">active</th>
                                <th className="text-danger">Deaths</th>
                            </tr>
                        </thead>
                       
                       <tbody>
                           {data.map( d => 
                                <tr>
                                    <th>{d.lastupdatedtime}</th>
                                    <th>{d.state}</th>
                                    <th>{d.confirmed}</th>
                                    <th>{d.recovered}</th>
                                    <th>{d.active}</th>
                                    <th className="text-danger">{d.deaths}</th>
                                </tr>
                           )} 
                       </tbody>
                        
                    </table>
                </div>
            </div>
        </>
    )
}

export  default India;