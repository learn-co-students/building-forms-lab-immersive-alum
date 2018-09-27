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
    event.preventDefault();
    this.props.addBand(this.state)
    this.setState({
      name: '',
    })
  }

  handleChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  render() {
    return(
      <div style={{border: "1px solid red"}}>
        <p>
          BandInput:
        </p>
        <form onSubmit={this.handleSubmit}>
          <label>add band name:</label>
          <input
            type="text"
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
