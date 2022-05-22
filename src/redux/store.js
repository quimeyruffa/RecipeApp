import { createStore } from 'redux'
import userReducer from './UserItems'

const store = createStore(userReducer)

export default store