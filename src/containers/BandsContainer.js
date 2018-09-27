import React, { Component } from 'react'
import { connect } from 'react-redux'

import BandInput from '../components/BandInput'

class BandsContainer extends Component {

  render() {
    console.log('BandsContainer - this.props is: ', this.props)


    let listOfBandNames = this.props.bands.map(eachBand => eachBand.name)
    console.log('listofBandNames is: ', listOfBandNames)

    const listOfBands = listOfBandNames.map( (band, index) =>
      <li key={index}>
        {band}
      </li>
    );

    return(
      <div style={{border: "1px solid blue"}}>
        <p>
          BandsContainer...
        </p>

        <BandInput
        />

        <p>
          BandsContainer, here are the bands:
        </p>

        <ul>
          {listOfBands}
        </ul>

      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

export default connect(mapStateToProps)(BandsContainer);
