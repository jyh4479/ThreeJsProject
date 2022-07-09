import * as THREE from 'three'
import React, {useRef, useState} from 'react'
import {useFrame} from '@react-three/fiber'

export default function Box(props: JSX.IntrinsicElements['mesh']) {
    const ref = useRef<THREE.Mesh>(null!)
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    useFrame((state, delta) => (ref.current.rotation.x += 0.01))
    return (
        <mesh
            {...props}
            ref={ref}
            scale={clicked ? 1.5 : 1}
            onClick={(event) => click(!clicked)}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}>
            <boxGeometry args={[1, 1, 1]}/>
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'}/>
        </mesh>
    )
}

// createRoot(document.getElementById('root') as HTMLElement).render(
//     <Canvas>
//         <ambientLight/>
//         <pointLight position={[10, 10, 10]}/>
//         <Box position={[-1.2, 0, 0]}/>
//         <Box position={[1.2, 0, 0]}/>
//     </Canvas>
// )