import { createSelector } from 'reselect'

import { User, UserPersonalData, PlaceCoordinates } from 'types'

import { RootState } from 'store'

const userSelector = (state: RootState): User => state.user

export const userPersonalDataSelector = createSelector(
  userSelector,
  ({ firstName, middleName, lastName, birthDate, gender }: User): UserPersonalData => ({
    firstName,
    middleName,
    lastName,
    birthDate,
    gender,
  })
)

export const userBirthPlaceCoordinates = createSelector(
  userSelector,
  ({ birthPlaceCoordinates }: User): PlaceCoordinates => birthPlaceCoordinates
)
