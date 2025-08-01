import React from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../store/hooks'
import type { RootState, AppDispatch } from '../store/store'

const CounterApp = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch: AppDispatch = useAppDispatch()

  return (
    <div>
      <h1>Counter: {count}</h1>
      {/* Add dispatch actions here */}
    </div>
  )
}

export default CounterApp
