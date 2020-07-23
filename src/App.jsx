import React from 'react';
import Cards from './components/cards/Cards';
import Chart from './components/charts/Chart';
import CountryPicker from './components/countryPicker/CountryPicker';

import styles from './App.module.css';
import { fetchData } from './api/Api';
import coronaImage from './images/image.png';



class App extends React.Component{

    // constructor will cerated automatically in backend
    state = {
        data:{},
        country:"",
    }
    async componentDidMount(){
        const data = await fetchData();
        this.setState({data:data});
    }
 
     handleCountryChange = async (country)=>{
        const fetchedData = await fetchData(country);
        this.setState({data:fetchedData, country: country});  
    
    }
     
    render(){
        const {data,country} = this.state;
        return(
            <div className={styles.container}>
            <img src={coronaImage} className={styles.image} alt="COVID-19"/>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        )
    }
}
export default App;