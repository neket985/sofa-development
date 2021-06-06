import Hexagon from "./Hexagon";
import s from './Map.module.css'

let MAP_SIZE = [4, 5, 6, 7, 6, 5, 4];
let BASE_COORDINATES = [
  { row: 0, column: 2 },
  { row: 1, column: 1 },
  { row: 2, column: 0 },
  { row: 2, column: 5 },
  { row: 3, column: 2 },
  { row: 3, column: 4 },
  { row: 4, column: 0 },
  { row: 4, column: 5 },
  { row: 5, column: 3 },
  { row: 6, column: 1 },
]

const Map = (props) => {
  return (
    <div className={s.mapWrapper}>
      {
        MAP_SIZE.map((lineLength, row) => {
          let line = Array.from(Array(lineLength).keys())

          return <div className={s.wrapper}>
            {
              line.map(column => {
                let isBase = false
                
                BASE_COORDINATES.forEach(el => {
                  if (el.row === row && el.column === column) {
                    isBase = true
                  }
                })
                return <Hexagon isBase={isBase} />
              })
            }
          </div>
        })
      }
    </div>
  )
}

export default Map
