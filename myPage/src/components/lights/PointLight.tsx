import React, {useRef} from 'react';
import {useHelper} from "@react-three/drei";
import {PointLightHelper} from "three";

const PointLight = (props: { position: any; }) => {
    const {position = [0, 0, 0]} = props;
    const pointLight = useRef();
    useHelper(pointLight, PointLightHelper, 0.5, "hotpink");


    //https://spectrum.chat/react-three-fiber/general/how-to-connect-pointlighthelper~32df8314-8bbb-4969-8054-2c5d37ea19b1
    //Helper 사용법

    return (
        <pointLight
            // color={"0xffffff"}
            color={"white"}
            intensity={1}
            distance={350}
            position={position}
            castShadow={true}
            // @ts-ignore
            ref={pointLight}
        />
    )
};

export default PointLight;