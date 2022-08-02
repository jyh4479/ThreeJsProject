import React, {Suspense} from 'react';
import {useLoader, Vector3} from '@react-three/fiber'
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {Euler} from "@react-three/fiber/dist/declarations/src/three-types";

const StreetLamp = (props: { position: Vector3, rotation: Euler }) => {

    const {position, rotation} = props;

    const streetLamp = useLoader(GLTFLoader, "./sketchfabModel/streetLampChair/scene.gltf");

    return (
        <Suspense fallback={null}>
            <primitive position={position} rotation={rotation} scale={[20, 20, 20]} object={streetLamp.scene}/>
        </Suspense>
    )
};

export default StreetLamp;