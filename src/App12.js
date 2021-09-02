import React, {useState, useEffect} from "react";
import { Cards, Charts, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import coronaImage from "./images/covid.png";

const App = () => {
    const [state, setState] = useState({
      data: {},
      country: "",
      theme: "",
    });

    const [theme, setTheme] = useState("light");

    useEffect(()=>{
        const fetchAPI = async ()=>{
            const fetchedData = await fetchData();

            setState({ data: fetchedData });
        }
        fetchAPI();
    }, []);

    const handleCountryChange = async (country) => {
      const fetchedData = await fetchData(country);
      this.setState({ data: fetchedData, country: country });
      // fetch the data
      // set the data
    };

    const handleOnClick = ()=> {
        setTheme(!theme);
    }
    const { data, country } = state;

    return (
      
      <div className={styles.container}>
        
        <img className={styles.image} src={coronaImage} alt="COVID-19" />
        <Cards data={data} country={country} />
        <CountryPicker handleCountryChange={handleCountryChange} />
        <Charts data={data} country={country} />
      </div>
    );

}


export default App;
