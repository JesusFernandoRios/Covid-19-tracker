import React, {useState, useEffect} from 'react'
import './App.css';
import { FormControl, MenuItem, Select, Card, CardContent}from '@material-ui/core'
import InfoBox from './Components/InfoBox'
import Map from './Components/Map'
import Table from './Components/Table'
import {sortData} from './utils'
import LineGraph from './Components/LineGraph'

function App() {
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState("worldwide")
  const [currentCountry, setCurrentCountry] = useState({})
  const [tableData, setTableData] = useState([])

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
    .then(res => res.json())
    .then(data => setCurrentCountry(data))
  },[])

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

        const sortedData = sortData(data)
        setTableData(sortedData)
        setCountries(countries);
      })
    } 

    getCountryData()
  },[])

  
  const onCountryChange = async (selectedCountry) => {

    const countryCode = selectedCountry.target.value

    const url = countryCode === 'worldwide' ? "https://disease.sh/v3/covid-19/all" : `https://disease.sh/v3/covid-19/countries/${countryCode}`

    await fetch(url).then(
      res => res.json()

    ).then( data => {
      setCountry(countryCode)
      setCurrentCountry(data)
    })
    
  }

    console.log("country>>>>>>", currentCountry)

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

          <InfoBox cases={currentCountry.todayCases} total={currentCountry.cases} title="Coronavirus Cases"/>

          <InfoBox cases={currentCountry.todayRecovered} total={currentCountry.recovered} title="Recovered"/>

          <InfoBox cases={currentCountry.todayDeaths} total={currentCountry.deaths} title="Deaths"/>

        </div>

        <Map/>

      </div>

      <div className="rightside__app">
        <Card>
          <CardContent>

            <h3>Live Cases by Country</h3>

            <Table countries={tableData}/>

            <h3>Worldwide New Cases</h3>

            <LineGraph />

          </CardContent>
        </Card>
      </div>
      
    </div>
  );
}

export default App;
