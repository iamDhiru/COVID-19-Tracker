import React from 'react';
import eksath from '../images/eksath.png';
import corona from '../images/corona.png';

const Header = ()=>{
    return(
        <div className="container main-header ">
            <div className="row w-100 h-100">
                <div className="col-12 col-md-5 col-lg-5 order-2 order-lg-1">
                    <div className="image-container   w-100 h-100 d-flex justify-content-center align-content-center ">
                        <img src={eksath} alt="ek sath"/>
                    </div>
                </div>
                <div className="col-12 col-md-7 col-lg-7 order-1 order-lg-2">
                <div className="title-container  w-100 h-100 d-flex justify-content-center align-content-center">
                        <h1>Let's stay safe & fight together against cor<span><img src={corona} alt="o"/></span>na virus</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;