import './Hero.css';
import almaydanLogo from '../../assets/almaydanLogo.svg'

export default function Hero() {
  return (
    <section className="hero">

      {/* Lights */}
      <div className="light-green-up"></div>
      <div className="light-green-down"></div>
      <div className="light-pink-up"></div>
      <div className="light-pink-down"></div>

      {/* Network */}
      <svg
        className="network"
        width="1280"
        height="239"
        viewBox="0 0 1280 239"
        fill="none"
      >
        <path
          d="M-202.91 237.785L281.64 0.794922H957.09L1450.72 237.785H-202.91Z"
          stroke="#29FF64"
          strokeWidth="1.59"
        />
      </svg>

      {/* Content */}
      <div className="hero-content">

        <h1 className="hero-title">الميدان</h1>

        <p className="hero-desc">
          موقع صُمّم لعشّــاق الرياضـــات الإلكترونية،
          يجمع شغف المنافســة، صخــب البطــولات،
          وحماس الجماهير. هنا تجد كل ما يهمك في عالم
          الرياضات الإلكترونية , خلك مستعد!
        </p>

        <button className="hero-btn">
          المــبــاريــات
        </button>

      </div>

      {/* Logo */}
      <div className="hero-logo">
        <Logo />
      </div>

    </section>
  )
}
