import React, {Suspense} from 'react';
import {useLoader} from '@react-three/fiber'
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";

const StreetLamp = () => {

    const streetLamp = useLoader(GLTFLoader, "./src/sketchfabModel/streetLampChair/scene.gltf");

    return (
        <Suspense fallback={null}>
            <primitive position={[-70, 0, 0]} scale={[20, 20, 20]} object={streetLamp.scene}/>
        </Suspense>
    )
};

export default StreetLamp;