import './Showcase.css'
import matchArena from '../../assets/images/matchArena.png' 

export default function Showcase() {
  return (
    <section className="showcase">

      {/* Lights */}
      <div className="pink-light"></div>
      <div className="green-light"></div>
      <div className="dark-light"></div>

      {/* Border */}
      <div className="pink-border">

        {/* Image */}
        <img
          src={matchArena}
          alt="match arena"
          className="matchArena-img"
        />

        {/* Text */}
        <div className="showcase-text">

          <div className="text-up">
            جاهـز يــبــدأ
          </div>

          <div className="text-down">
            الحــمــاس؟
          </div>

        </div>

        {/* Button */}
        <button className="showcase-btn">
          المــبــاريــات
        </button>

      </div>

    </section>
  )
}
