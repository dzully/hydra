import { useEffect, useRef } from 'react'

const Layer = ({ map }: any) => {
  const layer = useRef<any>()
  useEffect(() => {
    if (!layer.current && map) {
      layer.current = 'hello'
      map.on('load', function () {
        map.addSource('lines', {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                properties: {},
                geometry: {
                  type: 'LineString',
                  coordinates: [
                    [101.59132719039917, 3.3485145899363276],
                    [101.59028649330139, 3.3469080107836153],
                    [101.58904194831848, 3.345408534530832],
                    [101.58841967582701, 3.3445624004899943],
                    [101.5881621837616, 3.3445838216139645],
                    [101.58781886100769, 3.3443160575307136],
                    [101.58759355545043, 3.3447016377874283],
                    [101.5876579284668, 3.3450550862228496],
                    [101.58830165863037, 3.345965483121136],
                    [101.58848404884338, 3.34605116749155],
                    [101.58914923667908, 3.345761982711376],
                    [101.58973932266235, 3.3464688786900467],
                    [101.58982515335083, 3.3464902997723387],
                    [101.59013628959656, 3.3470258266776867],
                    [101.59014701843262, 3.347175774158722],
                    [101.59023284912108, 3.347389984806114],
                    [101.59038305282593, 3.347389984806114],
                    [101.59112334251404, 3.3484824583790957],
                    [101.5911340713501, 3.3489751421407195],
                    [101.59131646156311, 3.3485895635657545],
                  ],
                },
              },
            ],
          },
        })
        map.addLayer({
          id: 'lines',
          type: 'line',
          source: 'lines',
          paint: {
            'line-width': 3,
            // Use a get expression (https://maplibre.org/maplibre-gl-js-docs/style-spec/expressions/#get)
            // to set the line-color to a feature property value.
            'line-color': ['get', 'color'],
          },
        })
      })
    }
  }, [map])

  return <button>Go</button>
}

export default Layer
