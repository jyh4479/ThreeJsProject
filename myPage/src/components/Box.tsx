import React from 'react';
import {useBox} from "@react-three/cannon";


const Box = (props: { index: number }) => {

    const {index} = props;
    const boxPosition = [
        {x: 0, z: 0}, {x: 1, z: -1}, {x: 2, z: -2}, {x: 1, z: -3},
        {x: 0, z: -4}, {x: -1, z: -3}, {x: -2, z: -2}, {x: -1, z: -1}
    ]

    const [ref, api] = useBox(() => ({
        mass: 1,
        position: [boxPosition[index % boxPosition.length].x, 100, boxPosition[index % boxPosition.length].z]
    }));

    return (
        <mesh
            onClick={() => {
                api.velocity.set(0, 10, 0);
            }}
            //@ts-ignore
            ref={ref}
            position={[0, 2, 0]}
        >
            <boxBufferGeometry attach={"geometry"}/>
            <meshLambertMaterial attach={"material"} color="hotpink"/>
        </mesh>
    );
}

export default Box;