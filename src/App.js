import React, {useState, useEffect} from 'react'
import './App.css';
import { FormControl, MenuItem, Select, Card, CardContent}from '@material-ui/core'
import InfoBox from './Components/InfoBox'
import Map from './Components/Map'

function App() {
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState("worldwide")

  useEffect(() => {

    const getCountryData = async () =>{
      await fetch("https://disease.sh/v3/covid-19/countries")
      .then((res) => res.json())
      .then((data) => {

        const countries = data.map((country) => (
          {
            name:country.country,
            value: country.countryInfo.iso2
          }
        ))

        setCountries(countries);
      })
    } 

    getCountryData()
  },[])

  
  const onCountryChange = async (selectedCountry) => {

    const countryCode = selectedCountry.target.value

    setCountry(countryCode)

    const url = countryCode == 'worldwide' ? "https://disease.sh/v3/covid-19/all" : `https://disease.sh/v3/covid-19/countries/${countryCode}`

    
  }

  return (
    <div className="app">
      <div className="leftside__app">

        <div className="app__header">
          <h1>Covid-19 Tracker</h1>

          <FormControl className="app__dropdown">
            <Select
            variant="outlined" value={country} onChange={onCountryChange}>

              <MenuItem value="worldwide">Worldwide</MenuItem>

              {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}

            </Select>
          </FormControl>
        </div>

        <div className="stats">

          <InfoBox cases={12331} total={2000} title="Coronavirus Cases"/>

          <InfoBox cases={24441} total={2000} title="Recovered"/>

          <InfoBox cases={223377} total={2000} title="Deaths"/>

        </div>
    
      </div>

      <div className="rightside__app">
        <Card>
          <CardContent>
            <h3>Live Cases by Country</h3>

            <h3>Worldwide New Cases</h3>
          </CardContent>
        </Card>
      </div>
      
    </div>
  );
}

export default App;
