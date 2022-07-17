import React, {useRef} from 'react';
import {useHelper} from "@react-three/drei";
import {SpotLightHelper} from "three";

const SpotLight = () => {

    const spotLight = useRef();
    useHelper(spotLight, SpotLightHelper, "lightblue");

    return (
        <spotLight
            intensity={0.5}
            position={[-110, -20, 150]}
            angle={0.5}
            ref={spotLight}
        />
    )
}

export default SpotLight;