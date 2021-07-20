import { useCallback, useState } from 'react'
import { states } from 'utils/state/states'
import { transitions } from 'utils/state/transitions'

export const useStateMachine = () => {
  const [currentState, setCurrentState] = useState(states.empty)

  const transition = (currentState, action) => {
    const nextState = transitions[currentState][action]
    return nextState || currentState
  }

  const updateState = useCallback((action) => setCurrentState((currentState) => transition(currentState, action)), [])
  const compareState = (state) => currentState === state
  return { updateState, compareState, states }
}
