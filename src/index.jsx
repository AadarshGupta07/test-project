import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './components/Experience.jsx'
import Controls from './components/Controls.jsx'
import { useState } from 'react'
import * as THREE from 'three'

function App() {
    const [showCube, setShowCube] = useState(true)
    const [showOctahedron, setShowOctahedron] = useState(true)
    const [showTorus, setShowTorus] = useState(true)

    const [cubeSpeed, setCubeSpeed] = useState(1)
    const [octahedronSpeed, setOctahedronSpeed] = useState(1)
    const [torusSpeed, setTorusSpeed] = useState(1)

    return (
        <>
            <Controls
                setShowCube={setShowCube}
                setShowOctahedron={setShowOctahedron}
                setShowTorus={setShowTorus}
                setCubeSpeed={setCubeSpeed}
                setOctahedronSpeed={setOctahedronSpeed}
                setTorusSpeed={setTorusSpeed}
            />
            <Canvas
                gl={{
                    antialias: true,
                    toneMapping: THREE.ACESFilmicToneMapping,
                    // outputColorSpace: THREE.SRGBColorSpace
                }}
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 200,
                    position: [0, 0, 10]
                }}
            >
                <Experience
                    showCube={showCube}
                    showOctahedron={showOctahedron}
                    showTorus={showTorus}
                    cubeSpeed={cubeSpeed}
                    octahedronSpeed={octahedronSpeed}
                    torusSpeed={torusSpeed}
                />
            </Canvas>
        </>
    )
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<App />)
