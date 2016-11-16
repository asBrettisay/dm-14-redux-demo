const ADD_GUEST = 'party/ADD_GUEST';
const REMOVE_GUEST = 'party/REMOVE_GUEST';

const initialState = {
  guests: ['Batman', 'Alfred', 'Catwoman', 'Green Lantern']
}

export default function reducer(state=initialState, action) {
  switch(action.type) {
    case ADD_GUEST: 
      return {
        guests: [...state.guests, action.payload]
      }


    case REMOVE_GUEST:
      const guests = state.guests.filter((guest, i) => {
         return i !== action.payload
      });
      return Object.assign({}, state, {guests})


    default:
      return state;
  }
}


export function addGuest(guest) {
  return {
    type: ADD_GUEST,
    payload: guest
  }
}

export function removeGuest(i) {
  return {
    type: REMOVE_GUEST,
    payload: i
  }
}