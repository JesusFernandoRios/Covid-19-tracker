import React from 'react'
import './style/map.css'
import { MapContainer as LeafletMap, TileLayer} from 'react-leaflet'


function Map({ center, zoom }) {

    console.log(' this is map component',center)

    return (
        <div className="map">
            <LeafletMap center={center} zoom={zoom} scrollWheelZoom={false}>
                <TileLayer 
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
            </LeafletMap>
        </div>
    )
}

export default Map
