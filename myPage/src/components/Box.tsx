import React from 'react';
import {useBox} from "@react-three/cannon";


const Box = () => {

    const [ref, api] = useBox(() => ({mass: 1, position: [0, 100, 0]}));
    return (
        <mesh
            onClick={() => {
                api.velocity.set(0, 2, 0);
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