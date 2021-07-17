import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class SearchBar extends Component {
  statesList = this.props

  state = {inputValue: ' '}

  updateState = value => {
    this.setState({inputValue: value})
  }

  isKeyPressed = event => {
    const stateValue = event.target.value

    this.updateState(stateValue)
  }

  getSearchState = inputValue => {
    const {statesList} = this.props
    console.log(statesList)
    const matchedSearchObject = statesList.filter(
      eachSearch =>
        eachSearch.state_name.toLowerCase().includes(inputValue) &&
        eachSearch.state_name.toLowerCase()[(0, inputValue.length - 1)],
    )

    console.log(matchedSearchObject)
    console.log(inputValue.length)
    return (
      <div>
        {Object.entries(matchedSearchObject).map(eachState => (
          <Link to={`/states/:${eachState[0]}`} className="link-item">
            <li className="list-item">
              <p style={{color: 'white'}}>{eachState[1].state_name}</p>
              <div className="state-code-container">
                <p>{eachState[1].state_code}</p>
                <img
                  src="https://res.cloudinary.com/dfh6ltyku/image/upload/v1626017786/raaj/Line_p1ning.svg"
                  alt="arrow"
                  className="img"
                />
              </div>
            </li>
          </Link>
        ))}
      </div>
    )
  }

  render() {
    const {inputValue} = this.state
    return (
      <div className="bg-container">
        <div className="search-bar-container">
          <div className="search-bar">
            <img
              src="https://res.cloudinary.com/dfh6ltyku/image/upload/v1624862990/raaj/search_mzmlbq.svg"
              alt="search"
              className="search-logo"
            />
            <input
              type="search"
              className="input-field"
              onChange={this.isKeyPressed}
              value={inputValue}
            />
          </div>
        </div>
        <div>
          <ul>{this.getSearchState(inputValue)}</ul>
        </div>
      </div>
    )
  }
}

export default SearchBar
