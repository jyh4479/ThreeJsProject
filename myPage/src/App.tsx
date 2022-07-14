import React from 'react';
import Box from "./component/Box";
import {Stars} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import Ground from "./component/Ground";

import {Physics} from "@react-three/cannon";
import * as THREE from "three";
import CustomCamera from "./component/CustomCamera";


//https://www.youtube.com/watch?v=FGG0EeMNUl0
const App = () => {

    // const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 5, 100);
    const camera = new THREE.OrthographicCamera(70, window.innerWidth / window.innerHeight, 5, 100);
    camera.position.z = 5;

    return (
        <Canvas camera={camera}>
            {/*<CustomCamera/>*/}
            <Stars/>
            <ambientLight intensity={0.5}/>
            <spotLight position={[10, 5, 10]} angle={0.3}/>
            <Physics>
                <Box/>
                <Box/>
                <Ground/>
            </Physics>
        </Canvas>
    )
}

export default App;
