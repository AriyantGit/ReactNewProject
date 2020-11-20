import couterreducer from './Counter'
import logedreducer from './Isloged'
import {combineReducers} from 'redux'
import counterReducer from './Counter'
const allReducer=combineReducers({
    counter:counterReducer,
    login:logedreducer
})
export default allReducer