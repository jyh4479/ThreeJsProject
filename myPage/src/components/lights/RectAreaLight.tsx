import React, {useRef} from 'react';
import {useHelper} from "@react-three/drei";
import {RectAreaLightHelper} from "three/examples/jsm/helpers/RectAreaLightHelper";

const RectAreaLight = (props: { position: any; rotation: any }) => {

    const {position = [0, 0, 0], rotation = [0, 0, 0]} = props;

    const rectAreaLight = useRef();
    useHelper(rectAreaLight, RectAreaLightHelper, "#fff");

    return (
        <rectAreaLight
            color={"#fff"}
            intensity={0.5}
            width={150}
            height={30}
            position={position}
            rotation={rotation}
            // @ts-ignore
            // lookAt={[0, 0, 0]}
            lookAt={[0, 0, 120]}
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