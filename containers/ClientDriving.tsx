import 'maplibre-gl/dist/maplibre-gl.css'
import DrivingGraph from '../components/DrivingGraph'
import useMap from '../hook/useMap'

const ClientDriving = () => {
  const { map } = useMap()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '600px',
        }}
      >
        <div
          id="globalMap"
          style={{ width: '100%', height: '100%', borderRadius: 3 }}
        />
      </div>
      <DrivingGraph />
    </div>
  )
}

export default ClientDriving
