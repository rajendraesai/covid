import './index.css'

const Footer = () => (
  <div className="bg-container">
    <h1 className="heading">
      COVID19<span style={{color: 'blue'}}>INDIA</span>
    </h1>
    <p className="text">we stand with everyone who are standing frontline</p>
    <div>
      <img
        src="https://res.cloudinary.com/dfh6ltyku/image/upload/v1626023259/raaj/Vector_bssu56.svg"
        alt="git"
        className="foot-logo"
      />
      <img
        src="https://res.cloudinary.com/dfh6ltyku/image/upload/v1626023275/raaj/instagram_bvuaeg.svg"
        alt="instagram"
        className="foot-logo"
      />
      <img
        src="https://res.cloudinary.com/dfh6ltyku/image/upload/v1626023293/raaj/path3611_cjtvoc.svg"
        alt="twitter"
        className="foot-logo"
      />
    </div>
  </div>
)

export default Footer
