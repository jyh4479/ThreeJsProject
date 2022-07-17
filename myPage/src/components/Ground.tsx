import React from 'react'
import {usePlane} from "@react-three/cannon";

const Ground = (props: JSX.IntrinsicElements['mesh']) => {
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],
    }));
    return (
        //@ts-ignore
        <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]} receiveShadow={true}>
            <planeBufferGeometry attach={"geometry"} args={[500, 300]}/>
            <meshLambertMaterial attach={"material"} color={"0x4e8f38"} transparent={true} opacity={1}/>
        </mesh>
    );
}

export default Ground;