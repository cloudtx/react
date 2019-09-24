import {
  AnyActions,
  EnhancedActions,
  Manager,
  ManagerFactory,
  SideEffect,
} from '@stardust-ui/state'
import * as React from 'react'

type UseStateManagerOptions<State> = {
  mapPropsToInitialState?: () => Partial<State>
  mapPropsToState?: () => Partial<State>
  sideEffects?: SideEffect<State>[]
}

export const getDefinedProps = <Props extends Record<string, any>>(
  props: Props,
): Partial<Props> => {
  const definedProps: Partial<Props> = {}

  Object.keys(props).forEach(propName => {
    if (props[propName] !== undefined) {
      definedProps[propName] = props[propName]
    }
  })

  return definedProps
}

const useStateManager = <State extends Record<string, any>, Actions extends AnyActions>(
  managerFactory: ManagerFactory<State, Actions>,
  options: UseStateManagerOptions<State> = {},
): [Readonly<State>, Readonly<Actions>] => {
  const {
    mapPropsToInitialState = () => ({} as Partial<State>),
    mapPropsToState = () => ({} as Partial<State>),
    sideEffects = [],
  } = options
  const latestManager = React.useRef<Manager<State, Actions> | null>(null)

  // Heads up! forceUpdate() is used only for triggering rerenders stateManager is SSOT()
  const [, forceUpdate] = React.useState()
  const syncState = React.useCallback(
    (_prevState: State, nextState: State) => forceUpdate(nextState),
    [],
  )

  const propsForState = mapPropsToState()
  // Is used as dependencies to recreate manager, should include even undefined props to avoid
  // order changes
  const propsForStateValues = Object.keys(propsForState).map(
    (propName: string): any => propsForState[propName],
  )

  const manager = React.useMemo(() => {
    // If manager exists, the current state will be used
    const initialState = latestManager.current
      ? latestManager.current.state
      : getDefinedProps(mapPropsToInitialState())

    return managerFactory({
      // Factory has already configured actions
      actions: {} as EnhancedActions<State, Actions>,
      state: { ...initialState, ...getDefinedProps(propsForState) },
      sideEffects: [...sideEffects, syncState],
    })
  }, [...propsForStateValues, ...sideEffects])

  latestManager.current = manager

  // We need to pass exactly `manager.state` to provide the same state object during the same render
  // frame.
  // It keeps behavior consistency between React state tools and our managers
  // https://github.com/facebook/react/issues/11527#issuecomment-360199710

  if (process.env.NODE_ENV === 'production') {
    return [manager.state, manager.actions]
  }

  // Object.freeze() is used only in dev-mode to avoid usage mistakes
  return [Object.freeze(manager.state), Object.freeze(manager.actions)]
}

export default useStateManager
