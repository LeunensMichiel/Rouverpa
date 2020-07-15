import "mapbox-gl/dist/mapbox-gl.css"
import React, { useState } from "react"
import ReactMapGL, { Marker, FullscreenControl } from "react-map-gl"

import { MapWrapper } from "./contactStyles"

const Map = () => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 50.917843,
    longitude: 3.142472,
    zoom: 14,
  })
  return (
    <MapWrapper>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={`${process.env.GATSBY_TOKEN_MAPBOX}`}
        mapStyle="mapbox://styles/mapbox/light-v10"
        onViewportChange={nextViewport => setViewport(nextViewport)}
      >
        <div style={{ position: "absolute", right: 12, top: 12 }}>
          <FullscreenControl />
        </div>
        <Marker
          latitude={50.917843}
          longitude={3.142472}
          offsetLeft={0}
          offsetTop={10}
        >
          <div className="map__marker" />
        </Marker>
      </ReactMapGL>
    </MapWrapper>
  )
}

export default Map
