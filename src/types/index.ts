export interface PlaceCoordinates {
  latitude: number
  longitude: number
}

export enum Gender {
  male,
  female,
  none,
}

export interface UserPersonalData {
  firstName: string
  middleName: string
  lastName: string
  birthDate: Date
  gender: Gender
}

export interface User extends UserPersonalData {
  birthPlaceCoordinates: PlaceCoordinates
}
