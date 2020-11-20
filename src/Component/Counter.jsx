import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { increment,decrement } from './../Actions/'
function Counter() {
    const dispatch = useDispatch()
    const count=useSelector(state=>state.counter)
    return (
        <div>
            counter{count}
            <button onClick={()=>dispatch(increment(5))}>+5</button>
            <button onClick={()=>dispatch(decrement(1))}>-1</button>
        </div>
)
}

export default Counter
