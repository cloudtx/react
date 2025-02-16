import { KnobsSnippet } from '@stardust-ui/code-sandbox'
import {
  CodeSnippet,
  KnobInspector,
  KnobProvider,
  useBooleanKnob,
} from '@stardust-ui/docs-components'
import * as React from 'react'

import { ComponentPrototype, PrototypeSection } from 'docs/src/prototypes/Prototypes'
import EditorToolbar from './EditorToolbar'
import { editorToolbarReducer, initialState } from './editorToolbarReducer'
import { Button, Divider, Provider, themes } from '@stardust-ui/react'
import PortalWindow from './PortalWindow'

const EditorToolbarPrototype = () => {
  const [state, dispatch] = React.useReducer(editorToolbarReducer, initialState)

  return (
    <>
      <EditorToolbar {...state} dispatch={dispatch} />
      <CodeSnippet mode="json" value={state} />
    </>
  )
}

const EditorToolbarInWindowPrototype = () => {
  const [state, dispatch] = React.useReducer(editorToolbarReducer, initialState)

  const [open, setOpen] = useBooleanKnob({ name: 'open' })
  const [rtl] = useBooleanKnob({ name: 'rtl' })

  return (
    <>
      <Button disabled={open} onClick={() => setOpen(true)}>
        Open window
      </Button>

      {open && (
        <PortalWindow onClose={() => setOpen(false)}>
          {externalDocument => (
            <Provider rtl={rtl} theme={themes.teams} target={externalDocument}>
              <EditorToolbar {...state} dispatch={dispatch} />
            </Provider>
          )}
        </PortalWindow>
      )}
    </>
  )
}

const EditorToolbarPrototypes: React.FC = () => (
  <PrototypeSection title="Editor Toolbar">
    <ComponentPrototype
      description={
        <>
          A prototype that features the <code>overflow</code> prop of <code>Toolbar</code>{' '}
          component.
        </>
      }
    >
      <EditorToolbarPrototype />
    </ComponentPrototype>

    <ComponentPrototype
      title="Toolbar in Window"
      description={
        <>
          A prototype that shows that <code>Toolbar</code> can work in a separate window
        </>
      }
    >
      <KnobProvider>
        <KnobsSnippet>
          <KnobInspector />
        </KnobsSnippet>
        <Divider hidden />
        <EditorToolbarInWindowPrototype />
      </KnobProvider>
    </ComponentPrototype>
  </PrototypeSection>
)

export default EditorToolbarPrototypes
