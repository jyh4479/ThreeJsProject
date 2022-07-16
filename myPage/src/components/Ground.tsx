import React from 'react'
import {usePlane} from "@react-three/cannon";

const Ground = (props: JSX.IntrinsicElements['mesh']) => {
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],
    }));
    return (
        //@ts-ignore
        <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]} receiveShadow={true}>
            <planeBufferGeometry attach={"geometry"} args={[300, 150]}/>
            <meshLambertMaterial attach={"material"} color={"0x4e8f38"} transparent={true} opacity={0.5}/>
        </mesh>
    );
}

export default Ground;