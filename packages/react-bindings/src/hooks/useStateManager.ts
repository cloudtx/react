import {
  AnyActions,
  EnhancedActions,
  Manager,
  ManagerFactory,
  Middleware,
} from '@stardust-ui/state'
import * as React from 'react'

import { getDefinedAutoControlledProps, getInitialAutoControlledState } from './stateUtils'

const useStateManager = <
  State,
  Actions extends AnyActions,
  Props extends Partial<State>,
  AProps extends keyof State
>(
  managerFactory: ManagerFactory<State, Actions>,
  props: Props,
  autoControlledProps: (keyof Props)[] = [],
): [Readonly<State>, Readonly<Actions>] => {
  const latestManager = React.useRef<Manager<State, Actions> | null>(null)

  // Heads up! forceUpdate() is used only for triggering rerenders stateManager is SSOT()
  const [, forceUpdate] = React.useState()
  const syncState = React.useCallback(
    (manager: Manager<State, Actions>) => forceUpdate(manager.state),
    [],
  )

  const definedAutoControlledProps = getDefinedAutoControlledProps(autoControlledProps, props)
  // Is used as dependencies to recreate manager
  const autoControlledValues = autoControlledProps.reduce(
    (values: any[], propName: AProps) => [...values, props[propName]],
    [],
  )

  const overrideAutoControlledProps: Middleware<State, Actions> = (
    _prevState: State,
    nextState: State,
  ) => ({
    ...nextState,
    ...definedAutoControlledProps,
  })

  const manager = React.useMemo(() => {
    // If manager exists, the current state will be used
    const initialState = latestManager.current
      ? { ...latestManager.current.state, ...definedAutoControlledProps }
      : getInitialAutoControlledState(autoControlledProps, props)

    return managerFactory({
      // Factory has already configured actions
      actions: {} as EnhancedActions<State, Actions>,
      state: initialState,
      middleware: [overrideAutoControlledProps],
      sideEffects: [syncState],
    })
  }, autoControlledValues)

  latestManager.current = manager

  if (process.env.NODE_ENV === 'production') {
    return [manager.state, manager.actions]
  }

  // Object.freeze() is used only in dev-mode to avoid usage mistakes
  return [Object.freeze(manager.state), Object.freeze(manager.actions)]
}

export default useStateManager
