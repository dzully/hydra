import maplibregl from 'maplibre-gl'
import Map from 'react-map-gl'
import 'maplibre-gl/dist/maplibre-gl.css'

const Smartview = () => (
  <div
    style={{
      position: 'relative',
      bottom: 22,
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '600px',
    }}
  >
    <Map
      initialViewState={{
        latitude: 4.2105,
        longitude: 101.9758,
        zoom: 8,
      }}
      mapLib={maplibregl}
      style={{ width: '100%', height: '100%', borderRadius: 3 }}
      mapStyle="https://api.maptiler.com/maps/hybrid/style.json?key=Z9MgtnEJBLYcwl7o1JyC"
    ></Map>
  </div>
)

export default Smartview
