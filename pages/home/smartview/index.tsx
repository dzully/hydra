import useMap from '../../../hook/useMap'
import Layer from '../../../containers/Layer'
import 'maplibre-gl/dist/maplibre-gl.css'

const Smartview = () => {
  const { map } = useMap()

  return (
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
      <div
        id="globalMap"
        style={{ width: '100%', height: '100%', borderRadius: 3 }}
      />

      {map ? <Layer map={map} /> : null}
    </div>
  )
}

export default Smartview
