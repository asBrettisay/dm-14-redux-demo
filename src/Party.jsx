import React, {Component} from 'react';

import GuestList from './GuestList.jsx';
import AddGuest from './AddGuest.jsx';

import './Party.scss';

class Party extends Component {
  constructor(props) {
    super(props)

    this.state = {
      guests: ['batman', 'alfred', 'catwoman']
    }

    this.addGuest = this.addGuest.bind(this)
  }

  addGuest(guest) {
    this.setState({
      guests: [...this.state.guests, guest]
    })
  }


  render() {
    return (
      <div className="party-container">
        <GuestList 
          guests={this.state.guests}/>
        <AddGuest 
          addGuest={this.addGuest}/>
      </div>
    )
  }
}

export default Party