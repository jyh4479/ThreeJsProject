import React, {useRef} from 'react';
import {useHelper} from "@react-three/drei";
import {PointLightHelper} from "three";

const PointLight = () => {

    const pointLight = useRef();
    useHelper(pointLight, PointLightHelper, 0.5, "hotpink");

    //https://spectrum.chat/react-three-fiber/general/how-to-connect-pointlighthelper~32df8314-8bbb-4969-8054-2c5d37ea19b1
    //Helper 사용법

    return (
        <pointLight
            // color={"0xffffff"}
            color={"white"}
            intensity={1}
            distance={500}
            position={[0, 50, 0]}
            castShadow={true}
            ref={pointLight}
        />
    )
};

export default PointLight;