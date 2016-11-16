import React from 'react';
import {connect} from 'react-redux';

import {removeGuest} from './redux/party.js';

function GuestList(props) {

  const guests = props.guests.map((guest, i) => {
    return (
      <li
        onClick={props.removeGuest.bind(null, i)} 
        key={i}>{guest}</li>
    )
  })

  return (
    <div>
      <ul>
        {guests}
      </ul>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    guests: state.party.guests
  }
}


export default connect(mapStateToProps, {removeGuest})(GuestList)