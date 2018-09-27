import React, { Component } from 'react'
import { connect } from 'react-redux'

class BandInput extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

  handleSubmit = event => {
    console.log('handleSubmit in BandInput, this.state is: ', this.state)
    event.preventDefault();
    this.props.addBand(this.state)
    this.setState({
      name: '',
    })
  }

  handleChange(event) {
    console.log('handleChange in BandInput, event.target.value is: ', event.target.value)
    this.setState({
      name: event.target.value
    });
  }

  render() {
    console.log('BandInput, this.props is: ', this.props)
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>add band name:</label>
          <input type="text"
            onChange={(event) => this.handleChange(event)}
            value={this.state.name}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addBand: formData => dispatch({ type: 'ADD_BAND', payload: formData })
})

export default connect(null, mapDispatchToProps)(BandInput);
