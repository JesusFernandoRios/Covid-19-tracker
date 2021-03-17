import React, {useState, useEffect} from 'react'
import './App.css';
import { FormControl, MenuItem, Select, Card, CardContent}from '@material-ui/core'
import InfoBox from './Components/InfoBox'
import Map from './Components/Map'
import Table from './Components/Table'
import {sortData, prettyPrint} from './utils'
import LineGraph from './Components/LineGraph'
import 'leaflet/dist/leaflet.css'

function App() {
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState("worldwide")
  const [currentCountry, setCurrentCountry] = useState({})
  const [tableData, setTableData] = useState([])
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796})
  const [mapZoom, setMapZoom] = useState(3)
  const [mapCountries, setMapCountries] = useState([])
  const [casesType, setCasesType] = useState('cases')

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
    .then(res => res.json())
    .then(data => setCurrentCountry(data))

    setMapCenter()
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
        setTableData(sortedData);
        setMapCountries(data);
        setCountries(countries);
      })
    } 

    getCountryData()
  },[])

  
  const onCountryChange = async (selectedCountry) => {

    const countryCode = selectedCountry.target.value

    const url = countryCode === 'worldwide' ? "https://disease.sh/v3/covid-19/all" : `https://disease.sh/v3/covid-19/countries/${countryCode}`

    await fetch(url)
    .then(
      res => res.json()
    ).then( data => {

      setCountry(countryCode)
      setCurrentCountry(data)
      setMapCenter({lat: data.countryInfo.lat, lng: data.countryInfo.long})
      setMapZoom(5)
      
    })
    
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

              {countries.map((country, index) => (
              <MenuItem key={index} value={country.value}>{country.name}</MenuItem>
              ))}

            </Select>
          </FormControl>
        </div>

        <div className="stats">

          <InfoBox 
          active={casesType === 'cases'}
          onClick={(e) => setCasesType('cases')}
          cases={prettyPrint(currentCountry.todayCases)}
          total={prettyPrint(currentCountry.cases)} 
          title="Coronavirus Cases"/>

          <InfoBox
          active={casesType === 'recovered'}
          onClick={(e) => setCasesType('recovered')}
          cases={prettyPrint(currentCountry.todayRecovered)}
          total={prettyPrint(currentCountry.recovered)} 
          title="Recovered"/>

          <InfoBox
          active={casesType === 'deaths'}
          onClick={(e) => setCasesType('deaths')}
          cases={prettyPrint(currentCountry.todayDeaths)} 
          total={prettyPrint(currentCountry.deaths)} 
          title="Deaths"/>

        </div>

        <Map 
        casesType={casesType} 
        countries={mapCountries} 
        center={mapCenter} 
        zoom={mapZoom}/>

      </div>

      <div className="rightside__app">
        <Card>
          <CardContent>

            <h3>Live Cases by Country</h3>

            <Table countries={tableData}/>

            <h3>Worldwide New {casesType}</h3>

            <LineGraph casesType={casesType}/>

          </CardContent>
        </Card>
      </div>
      
    </div>
  );
}

export default App;
