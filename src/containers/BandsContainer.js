import React, { Component } from 'react'
import { connect } from 'react-redux'

import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  render() {

    const { bands, addBand } = this.props

    return(
      <div>
        <BandInput addBand={addBand} />
        Bands
        <ul>
          {bands.map(b => <li>{b.name}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({bands}) => ({bands})

const mapDispatchToProps = dispatch => {
  return {
    addBand: band => dispatch({type: 'ADD_BAND', band})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
