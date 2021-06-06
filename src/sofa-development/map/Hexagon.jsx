import s from './Hexagon.module.css'

const Hexagon = (props) => {
  return (
    <div className={s.wrapper + ' ' + (props.isBase ? s.blue : '')}>
      <div className={s.center1}></div>
      <div className={s.center2}></div>
      <div className={s.center3}></div>
    </div>
  )
}

export default Hexagon
