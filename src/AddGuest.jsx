import React, {Component} from 'react';
import {connect} from 'react-redux';

import {addGuest} from './redux/party.js';

import store from './store.js';

class AddGuest extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newGuest: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleAddGuest = this.handleAddGuest.bind(this)
  }

  handleChange(e) {
    // Update state with input text changes.
    this.setState({
      newGuest: e.target.value
    })
  }

  handleAddGuest() {
    // Notify parent component that we
    // have a new guest.
    // store.dispatch(addGuest(this.state.newGuest));
    this.props.addGuest(this.state.newGuest);


    this.setState({
      newGuest: ''
    })
  }

  render() {
    return (
      <div>
        <input 
          value={this.state.newGuest}
          onChange={this.handleChange}/>
        <button
          onClick={this.handleAddGuest}>
          AddGuest
        </button>
      </div>
    )
  }
}

export default connect(null, {addGuest})(AddGuest)