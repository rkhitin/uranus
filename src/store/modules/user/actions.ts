import { UserPersonalData, PlaceCoordinates } from 'types'

import { ActionTypes, Actions } from './types'

export function setPersonalData(personalData: UserPersonalData): Actions {
  return {
    type: ActionTypes.setPersonalData,
    payload: personalData,
  }
}

export function setBirthPlaceCoordinates(birthPlaceCoordinates: PlaceCoordinates): Actions {
  return {
    type: ActionTypes.setBirthPlaceCoordinates,
    payload: birthPlaceCoordinates,
  }
}
