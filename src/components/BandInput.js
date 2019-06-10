import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ''
  }

  handleChange = ({target: {value}}) => {this.setState({name: value})}

  handleSubmit= e => {
    e.preventDefault()
    this.props.addBand(this.state)
    this.setState({name: ''})
  }

  render() {
    return(
      <div>
        Band Input
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default BandInput
