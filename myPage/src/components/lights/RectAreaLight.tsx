import React, {useRef} from 'react';
import {useHelper} from "@react-three/drei";
import {RectAreaLightHelper} from "three/examples/jsm/helpers/RectAreaLightHelper";

const RectAreaLight = (props: { glow: any; }) => {

    const {glow} = props;

    const rectAreaLight = useRef();
    useHelper(rectAreaLight, RectAreaLightHelper, "black");

    return (
        <rectAreaLight
            color={"0xf9d71c"}
            intensity={1}
            width={150}
            height={30}
            // position={[5, 23, 5]}
            // position={[0, 0, 0]}
            position={[0, 50, 0]}
            // @ts-ignore
            lookAt={[0, 0, 0]}
            penumbra={1}
            castShadow
            ref={rectAreaLight}

            // onUpdate={self => {
            //     self.lookAt(0, 0, 120)
            // }}
        />
    )
};

export default RectAreaLight;