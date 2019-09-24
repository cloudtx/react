import { AnyAction, SideEffect } from '@stardust-ui/state'
import * as React from 'react'

type Dispatch<Action extends AnyAction> = (
  e: DispatchEvent,
  action: Action,
  ...args: Parameters<Action>
) => void

type DispatchEffect<Props, State> = (
  e: DispatchEvent,
  props: Props,
  prevState: State,
  nextState: State,
) => void

type DispatchEvent = React.SyntheticEvent | Event

const useDispatchEffect = <State, Props extends Record<string, any>>(
  props: Props,
  dispatchEffect: DispatchEffect<Props, State>,
): [Dispatch<AnyAction>, SideEffect<State>] => {
  const latestEffect = React.useRef<DispatchEffect<Props, State>>(dispatchEffect)
  const latestEvent = React.useRef<DispatchEvent | null>(null)
  const latestProps = React.useRef<Props>(props)

  latestEffect.current = dispatchEffect
  latestProps.current = props

  const dispatch = React.useCallback<Dispatch<AnyAction>>((e, action, ...args) => {
    latestEvent.current = e

    action(...args)
    latestEvent.current = null
  }, [])
  const sideEffect = React.useCallback<SideEffect<State>>((prevState, nextState) => {
    return latestEffect.current(
      latestEvent.current as DispatchEvent,
      latestProps.current,
      prevState,
      nextState,
    )
  }, [])

  return [dispatch, sideEffect]
}

export default useDispatchEffect
