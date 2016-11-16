import React from 'react';

function GuestList(props) {

  const guests = props.guests.map((guest, i) => {
    return <li key={i}>{guest}</li>
  })

  return (
    <div>
      <ul>
        {guests}
      </ul>
    </div>
  )
}

export default GuestList