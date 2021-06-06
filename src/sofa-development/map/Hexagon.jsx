import s from './Hexagon.module.css'

// в ПРОПСЫ приходит булево значение isBase, на его основе нужно добываить класс
const Hexagon = (props) => {
  return (
    <div className={s.wrapper}>
      <div className={s.center1}></div>
      <div className={s.center2}></div>
      <div className={s.center3}></div>
    </div>
  )
}

export default Hexagon
