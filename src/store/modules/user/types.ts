import { UserPersonalData, PlaceCoordinates } from 'types'

export enum ActionTypes {
  setPersonalData = '@user/setPersonalData',
  setBirthPlaceCoordinates = '@user/setBirthPlaceCoordinates',
}

interface SetPersonalData {
  type: typeof ActionTypes.setPersonalData
  payload: UserPersonalData
}

interface SetBirthPlaceCoordinates {
  type: typeof ActionTypes.setBirthPlaceCoordinates
  payload: PlaceCoordinates
}

export type Actions = SetPersonalData | SetBirthPlaceCoordinates
