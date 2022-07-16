import React from 'react'
import {usePlane} from "@react-three/cannon";

const Ground = (props: JSX.IntrinsicElements['mesh']) => {
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],
    }));
    return (
        //@ts-ignore
        <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
            <planeBufferGeometry attach={"geometry"} args={[100, 100]}/>
            <meshLambertMaterial attach={"material"} color={"lightblue"} transparent={true} opacity={0.5}/>
        </mesh>
    );
}

export default Ground;