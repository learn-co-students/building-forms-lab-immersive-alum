import React, { Component } from 'react';

class Bands extends Component {

  render(){
		// console.log(this.props.store.getState())
		let allBands = this.props.store.getState().bands.map( band => <li>{band}</li>)
    return (
      <ul>
        {allBands}
      </ul>
    );
  }
};

export default Bands;
