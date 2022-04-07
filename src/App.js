import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api/';

import coronaImage from './images/gif2.gif';

class App extends React.Component {
  state = {
  data: {},
  country: '',
}

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

handleCountryChange = async (country) => {
  const fetchedData = await fetchData(country);

  this.setState({ data: fetchedData, country: country });
}

  clicked(){
    window.location="https://itzhaklevy.netlify.app/"
  }

      render() {    
        const { data, country } = this.state;

        return (
          <div className={styles.container}>
            <button style={{margin: "10px", padding: "10px", borderRadius: "5px", fontSize: "33px", cursor: "pointer", backgroundColor: "black", color: "white"}} onClick={ this.clicked }>Back To Projects</button>
            <img className={styles.image} src={coronaImage} alt="COVID-19" style={{margin: "5px", boxShadow: "0px 5px 15px #000000"}}/>
            <Cards data ={data} />
            <CountryPicker handleCountryChange={this.handleCountryChange} />
            <Chart data={data} country={country}/> 
           </div>
        );
      }
    }
export default App;