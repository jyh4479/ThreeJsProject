import React from 'react';
import Box from "./component/Box";
import {OrbitControls, Stars} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import Ground from "./component/Ground";

//https://www.youtube.com/watch?v=FGG0EeMNUl0
function App() {
    return (
        <Canvas>
            <OrbitControls/>
            <Stars/>
            <ambientLight intensity={0.5}/>
            <spotLight position={[10, 5, 10]} angle={0.3}/>
            <Box position={[-1.2, 2, 0]}/>
            <Box position={[1.2, 2, 0]}/>
            <Ground/>
        </Canvas>
    )
}

export default App
