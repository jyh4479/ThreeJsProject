import React from 'react';
import {Canvas} from "@react-three/fiber";

const CustomCanvas = (props: { children: any; }) => {

    const {children} = props;

    return (
        <Canvas
            camera={{
                fov: 75,
                aspect: window.innerWidth / window.innerHeight,
                near: 1,
                far: 1500,
                position: [-30, 50, 100],
            }}
            onCreated={({camera, gl}) => {

                //Camera Setting
                camera.lookAt(0, 0, 0);
                // camera.position.set(-30, 50, 100);

                //Web Gl
                gl.setPixelRatio(window.devicePixelRatio);
                gl.setSize(window.innerWidth, window.innerHeight);
                gl.shadowMap.enabled = true;
            }}>
            {children}
        </Canvas>
    )
};

export default CustomCanvas;