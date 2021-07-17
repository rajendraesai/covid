import {Component} from 'react'

import Header from '../Header'
import SearchBar from '../SearchBar'
import TotalCovidInfo from '../TotalCovidInfo'
import Footer from '../Footer'
import './index.css'

class CovidIndia extends Component {
  statesList = this.props

  state = {
    result: {},
    totalData: {},
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const dataUrl = 'https://api.covid19india.org/v4/min/data.min.json'

    const response = await fetch(dataUrl)
    const jsonData = await response.json()
    console.log(jsonData)

    const sequenceData = this.getSumOfTotalData(jsonData)
    this.updateState(sequenceData, jsonData)
  }

  updateState = (resultData, data) => {
    this.setState({result: resultData, totalData: data})
  }

  getSumOfTotalData = data => {
    const resultData = {
      confirmed: 0,
      deceased: 0,
      recovered: 0,
      active: 0,
      tested: 0,
    }

    Object.keys(data).forEach(eachData => {
      const keyValue = data[eachData]
      const totalValue = keyValue.total
      resultData.confirmed += totalValue.confirmed
      resultData.deceased += totalValue.deceased
      resultData.recovered += totalValue.recovered
      resultData.active += totalValue.active
      resultData.tested += totalValue.tested
    })

    return resultData
  }

  getEachStatesList = totalData => {
    const states = Object.entries(totalData)
    return states.map(eachEntry =>
      this.getEachStateDetails(eachEntry[0], eachEntry[1]),
    )
  }

  getEachStateDetails = (eachEntry, stateDetails) => {
    const {statesList} = this.props
    const stateName = statesList.map(
      eachState => eachState.state_code === eachEntry && eachState.state_name,
    )
    const metaData = stateDetails.meta
    const totalData = stateDetails.total

    return (
      <div className="state-list-container">
        <p className="state-name">{stateName}</p>
        <p className="confirmed">{totalData.confirmed}</p>
        <p className="active">{totalData.tested}</p>
        <p className="recovered">{totalData.recovered}</p>
        <p className="deceased">{totalData.deceased}</p>
        <p className="population">{metaData.population}</p>
      </div>
    )
  }

  render() {
    const {statesList} = this.props
    const {result, totalData} = this.state
    const {confirmed, deceased, recovered, tested} = result
    return (
      <>
        <Header />
        <SearchBar statesList={statesList} />
        <TotalCovidInfo
          confirmed={confirmed}
          deceased={deceased}
          recovered={recovered}
          tested={tested}
        />
        <div className="bg-container">
          <div className="state-info-container">
            <div className="state-container">
              <p className="info-heading" style={{width: '100px'}}>
                states/UT
              </p>
              <p className="info-heading">Confirmed</p>
              <p className="info-heading">Active</p>
              <p className="info-heading">Recovered</p>
              <p className="info-heading">Deceased</p>
              <p className="info-heading">Population</p>
            </div>
            <hr className="line" />
            <div className="states-list-container">
              {this.getEachStatesList(totalData)}
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}
export default CovidIndia
