import './index.css'

const TotalCovidInfo = props => {
  const {confirmed, deceased, recovered, tested} = props

  return (
    <div className="background-container">
      <div className="confirmed">
        <p>Confirmed</p>
        <img
          src="https://res.cloudinary.com/dfh6ltyku/image/upload/v1626025691/raaj/check-mark_1_qjcxye.svg"
          alt="confirmed"
        />
        <p>{confirmed}</p>
      </div>
      <div className="active">
        <p>Active</p>
        <img
          src="https://res.cloudinary.com/dfh6ltyku/image/upload/v1626025711/raaj/protection_1_1_ndshe0.svg"
          alt="active"
        />
        <p>{tested}</p>
      </div>
      <div className="recovered">
        <p>Recovered</p>
        <img
          src="https://res.cloudinary.com/dfh6ltyku/image/upload/v1626025728/raaj/recovered_1_jjffep.svg"
          alt="recover"
        />
        <p>{recovered}</p>
      </div>
      <div className="deceased">
        <p>Deceased</p>
        <img
          src="https://res.cloudinary.com/dfh6ltyku/image/upload/v1626025681/raaj/breathing_1_pxpfwm.svg"
          alt="deceased"
        />
        <p>{deceased}</p>
      </div>
    </div>
  )
}

export default TotalCovidInfo
