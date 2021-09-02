import React from 'react';
import {Cards, Charts, CountryPicker} from './components'
import styles from './App.module.css';
import {fetchData} from './api'
import coronaImage from './images/covid.png';

class App extends React.Component {
   
   state = {
       data:{},
       country:'',
       theme:''
   }

   async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({data:fetchedData})
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({data:fetchedData, country: country})
        // fetch the data 
        // set the data
    }
    render() {

        const {data, country} = this.state;

        return (
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt='COVID-19'/>
                <Cards data={data} country={country}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Charts data={data} country={country}/>
            </div>)
    }
}

export default App;