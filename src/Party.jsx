import React, {Component} from 'react';

import GuestList from './GuestList.jsx';
import AddGuest from './AddGuest.jsx';

import './Party.scss';

class Party extends Component {
  render() {
    return (
      <div className="party-container">
        <GuestList />
        <AddGuest />
      </div>
    )
  }
}

export default Party