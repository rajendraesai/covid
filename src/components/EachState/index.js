import {Component} from 'react'

class EachState extends Component {
  getStateName = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    console.log(id)
  }

  render() {
    return <div>{this.getStateName}</div>
  }
}

export default EachState
