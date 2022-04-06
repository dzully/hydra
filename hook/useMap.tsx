import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import { useEffect, useState } from 'react'

const useMap = () => {
  const [map, setMap] = useState<any>(null)

  useEffect(() => {
    if (map) return
    const getMap = new maplibregl.Map({
      container: 'globalMap',
      center: [101.9758, 4.2105],
      zoom: 7,
      style:
        'https://api.maptiler.com/maps/hybrid/style.json?key=Z9MgtnEJBLYcwl7o1JyC',
    })
    setMap(getMap)
  }, [map])

  return { map }
}

export default useMap
