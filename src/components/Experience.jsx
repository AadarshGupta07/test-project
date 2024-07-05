import { useThree, extend, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

extend({ OrbitControls })

export default function Experience({ showCube, showOctahedron, showTorus, cubeSpeed, octahedronSpeed, torusSpeed })
{
    const { camera, gl } = useThree()

    const cubeRef = useRef()
    const octahedronRef = useRef()
    const torusRef = useRef()


    useFrame((state, delta) =>
    {
        if (cubeRef.current) cubeRef.current.rotation.y += delta * cubeSpeed
        if (octahedronRef.current) octahedronRef.current.rotation.y += delta * octahedronSpeed
        if (torusRef.current) torusRef.current.rotation.y += delta * torusSpeed
    })

    return (
        <>
        <orbitControls args={ [ camera, gl.domElement ] } />
        <directionalLight position={[1, 2, 3]} intensity={4.5} />
            <ambientLight intensity={1.5} />

            <group >
                {showOctahedron && (
                    <mesh ref={octahedronRef} position-x={-4}>
                        <octahedronGeometry args={[1, 0]} />
                        <meshStandardMaterial color="blue" />
                    </mesh>
                )}

                {showCube && (
                    <mesh ref={cubeRef} rotation-y={Math.PI * 0.25} position-x={4} scale={1.5}>
                        <boxGeometry />
                        <meshStandardMaterial color="mediumpurple" />
                    </mesh>
                )}

                {showTorus && (
                    <mesh ref={torusRef} position-x={0}>
                        <torusGeometry args={[1, 0.4, 16, 100]} />
                        <meshStandardMaterial color="orange" />
                    </mesh>
                )}
            </group>
        </>
    )
}
