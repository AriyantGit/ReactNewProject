import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { increment,decrement } from './../Actions/'
function Counter2() {
    const dispatch = useDispatch()
    const count=useSelector(state=>state.counter)
    return (
        <div>
            counter{count}
            <button onClick={()=>dispatch(increment(10))}>+</button>
            <button onClick={()=>dispatch(decrement(2))}>-</button>
        </div>
)
}

export default Counter2
