import { useState } from 'react'
import {Canvas} from '@react-three/fiber'
import TorusKnot from './components/torusKnot.jsx'
import './App.css'

function App() {

  return (
      <div className={"container"}>
          <Canvas>
              <TorusKnot />
          </Canvas>
      </div>
  )
}

export default App
