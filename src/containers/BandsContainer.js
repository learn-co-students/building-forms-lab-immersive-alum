import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'
import Band from '../components/Band'

class BandsContainer extends Component {

  renderBands = () =>
  this.props.bands.map(
    (band, id) =>
    <Band
      key={id}
      text={band}
    />
  )

  render() {
    console.log('BandsContainer - this.props is: ', this.props)
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
        {this.renderBands()}
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
