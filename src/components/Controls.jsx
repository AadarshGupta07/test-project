import { useState } from 'react'

export default function Controls({ setShowCube, setShowOctahedron, setShowTorus, setCubeSpeed, setOctahedronSpeed, setTorusSpeed }) {
    const [showCube, toggleShowCube] = useState(true)
    const [showOctahedron, toggleShowOctahedron] = useState(true)
    const [showTorus, toggleShowTorus] = useState(true)
    const [cubeSpeed, updateCubeSpeed] = useState(1)
    const [octahedronSpeed, updateOctahedronSpeed] = useState(1)
    const [torusSpeed, updateTorusSpeed] = useState(1)

    const handleSliderChange = (setter, updater) => (e) => {
        const value = parseFloat(e.target.value)
        if (value >= 0) {
            setter(value)
            updater(value)
        }
    }

    const handleInputChange = (setter, updater) => (e) => {
        const value = parseFloat(e.target.value)
        if (value >= 0) {
            setter(value)
            updater(value)
        }
    }

    return (
        <div className="controls">
            
            <div className="control-panel">
                <button onClick={() => { toggleShowOctahedron(!showOctahedron); setShowOctahedron(!showOctahedron); }}>Toggle Octahedron</button>
                <div>
                    <label>Rotation Speed:</label>
                    <input
                        type="range"
                        min="0"
                        max="5"
                        step="0.1"
                        value={octahedronSpeed}
                        onChange={handleSliderChange(setOctahedronSpeed, updateOctahedronSpeed)}
                    />
                    <input
                        type="number"
                        min="0"
                        step="0.1"
                        value={octahedronSpeed}
                        onChange={handleInputChange(setOctahedronSpeed, updateOctahedronSpeed)}
                    />
                </div>
            </div>
            <div className="control-panel">
                <button onClick={() => { toggleShowTorus(!showTorus); setShowTorus(!showTorus); }}>Toggle Torus</button>
                <div>
                    <label>Rotation Speed:</label>
                    <input
                        type="range"
                        min="0"
                        max="5"
                        step="0.1"
                        value={torusSpeed}
                        onChange={handleSliderChange(setTorusSpeed, updateTorusSpeed)}
                    />
                    <input
                        type="number"
                        min="0"
                        step="0.1"
                        value={torusSpeed}
                        onChange={handleInputChange(setTorusSpeed, updateTorusSpeed)}
                    />
                </div>
            </div>
            <div className="control-panel">
                <button onClick={() => { toggleShowCube(!showCube); setShowCube(!showCube); }}>Toggle Box</button>
                <div>
                    <label>Rotation Speed:</label>
                    <input
                        type="range"
                        min="0"
                        max="5"
                        step="0.1"
                        value={cubeSpeed}
                        onChange={handleSliderChange(setCubeSpeed, updateCubeSpeed)}
                    />
                    <input
                        type="number"
                        min="0"
                        step="0.1"
                        value={cubeSpeed}
                        onChange={handleInputChange(setCubeSpeed, updateCubeSpeed)}
                    />
                </div>
            </div>
        </div>
    )
}
