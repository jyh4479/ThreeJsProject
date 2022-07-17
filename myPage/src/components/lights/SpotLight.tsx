import React, {useRef} from 'react';
import {useHelper} from "@react-three/drei";
import {SpotLightHelper} from "three";

const SpotLight = () => {

    const spotLight = useRef();
    useHelper(spotLight, SpotLightHelper, "lightblue");

    return (
        <spotLight
            intensity={1}
            position={[-40, 75, 0]}
            angle={1}
            // @ts-ignore
            ref={spotLight}
        />
    )
}

export default SpotLight;