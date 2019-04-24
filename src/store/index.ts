import { createStore } from 'redux'

import reducers from './modules'

const store = createStore(reducers)

export * from './types'
export default store
