import React, { useRef, useEffect, useState } from 'react';

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken = 'pk.eyJ1IjoiZHJiYXJ6eWsiLCJhIjoiY2tzZTVpYm9xMHhpdzJ2b3NkbGwzc3VoMCJ9.4Bs2_ljbb418v9XUtsMTuQ';

function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(0);
    const [lat, setLat] = useState(20);
    const [zoom, setZoom] = useState(1);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/drbarzyk/ckse5jxyd1byz17pltrg8pnqh',
            center: [lng, lat],
            zoom: zoom
        });
    });

    return (
        <div>
            <div ref={mapContainer} className="map-container" />
        </div>
    )
}

export default Map
