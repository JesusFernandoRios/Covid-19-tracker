import React from 'react'
import './style/map.css'
import { MapContainer as LeafletMap, TileLayer, Marker} from 'react-leaflet'
import {showDataOnMap} from '../utils'


function Map({ countries, casesType, center, zoom }) {

    return (
        <div className="map">
            <LeafletMap center={center} zoom={zoom}>
                <TileLayer 
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={center}/>
                {showDataOnMap(countries, casesType)}
            </LeafletMap>
        </div>
    )
}

export default Map
