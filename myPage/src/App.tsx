import React, {useEffect, useState} from 'react';
import {Box, CustomCamera, Ground} from "./component";
import {Stars} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import {Physics} from "@react-three/cannon";
import * as THREE from "three";


//https://www.youtube.com/watch?v=FGG0EeMNUl0
const App = () => {

    const [camera, setCamera] = useState(new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 1, 5000));

    useEffect(() => {
        console.log(camera);
    }, [camera])
    // const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
    // const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 5, 100);
    // const camera = new THREE.OrthographicCamera(70, window.innerWidth / window.innerHeight, 5, 100, 50);
    camera.position.z = 5;

    return (
        <Canvas>
            <CustomCamera camera={camera}/>
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
