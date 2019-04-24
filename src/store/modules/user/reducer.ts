import { User, Gender } from 'types'

import { Actions, ActionTypes } from './types'

const initialState: User = {
  firstName: '',
  middleName: '',
  lastName: '',
  birthDate: new Date(),
  birthPlaceCoordinates: {
    latitude: 0,
    longitude: 0,
  },
  gender: Gender.none,
}

export function reducer(state = initialState, action: Actions): User {
  switch (action.type) {
    case ActionTypes.setPersonalData:
    case ActionTypes.setBirthPlaceCoordinates:
      return { ...state, ...action.payload }

    default:
      return state
  }
}
