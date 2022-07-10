import React from 'react';
import Box from "./component/Box";
import {Canvas} from "@react-three/fiber";

function App() {
    return (
        <div>
            <Canvas camera={{zoom: 100, position: [50, 50, 50]}}>
                <ambientLight/>
                <pointLight position={[10, 10, 10]}/>
                <Box position={[-1.2, 0, 0]}/>
                <Box position={[1.2, 0, 0]}/>
            </Canvas>
        </div>
    )
}

export default App
