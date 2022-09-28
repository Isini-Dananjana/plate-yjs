import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'
import {
  createPlateComponents,
  createPlateOptions,
  Plate,
  createHistoryPlugin,
  createReactPlugin,
  createBasicElementPlugins,
  createBasicMarkPlugins,
  createListPlugin,
  PlatePlugin,
} from '@udecode/plate'
import { editableProps } from './config/pluginOptions'

import * as Y from 'yjs'
import { SyncElement, withYjs } from 'slate-yjs'

const id = 'Reproduction'

let components = createPlateComponents({
  // customize your components by plugin key
})

const options = createPlateOptions({
  // customize your options by plugin key
})

const doc = new Y.Doc({ gc: false })
const userStore = new Y.PermanentUserData(doc)
const sharedType = doc.getArray<SyncElement>('doc')

const initialValue = []

const plugins: PlatePlugin[] = [
  createReactPlugin(),
  createHistoryPlugin(),
  ...createBasicElementPlugins(),
  ...createBasicMarkPlugins(),
  createListPlugin(),
]
const plugins2 = [
  ...plugins,
  {
    withOverrides: (editor) => withYjs(editor, sharedType),
  },
]

const updateB64 =
  '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'
const fromBase64 = (str: string): Uint8Array =>
  new Uint8Array(Array.from(atob(str)).map((char) => char.charCodeAt(0)))

const Editor = () => {
  const [originalNodes, setOriginalNodes] = React.useState([])
  React.useEffect(() => {
    Y.applyUpdate(doc, fromBase64(updateB64), 'snapshot-patch')
    //setOriginalNodes(sharedType.toJSON())
  }, [])

  return (
    <>
      <h1>Original</h1>
      <Plate
        id={id + 'original'}
        plugins={plugins}
        components={components}
        options={options}
        editableProps={editableProps}
        value={originalNodes}
      />
      <h1>slate-yjs</h1>
      <Plate
        id={id + 'slate-yjs'}
        plugins={plugins2}
        components={components}
        options={options}
        editableProps={editableProps}
        initialValue={initialValue}
      />
    </>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<Editor />, rootElement)
