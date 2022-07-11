import React from 'react';
import Box from "./component/Box";
import {Canvas} from "@react-three/fiber";

function App() {
    return (
        <Canvas style={{width: "100%", height: "100%"}} camera={{zoom: 10, position: [0, 0, 50]}}>
            <ambientLight/>
            <pointLight position={[10, 10, 10]}/>
            <Box position={[-1.2, 0, 0]}/>
            <Box position={[1.2, 0, 0]}/>
        </Canvas>
    )
}

export default App
