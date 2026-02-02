import './floating.css'

import square from '../../assets/images/square.png'
import triangle from '../../assets/images/triangle.png'
import circle from '../../assets/images/circle.png'

export default function Floating() {
  return (
    <>
      <div
        className="shape square"
        style={{ backgroundImage: `url(${square})` }}
      ></div>

      <div
        className="shape triangle"
        style={{ backgroundImage: `url(${triangle})` }}
      ></div>

      <div
        className="shape circle"
        style={{ backgroundImage: `url(${circle})` }}
      ></div>
    </>
  )
}
