import React from 'react';
import {Canvas} from "@react-three/fiber";

const CustomCanvas = (props: { children: any; }) => {

    const {children} = props;

    return (
        <Canvas
            camera={{
                fov: 60,
                aspect: window.innerWidth / window.innerHeight,
                near: 10,
                far: 1500,
                position: [-100, 50, 120],
            }}
            onCreated={({camera, gl}) => {

                //Camera Setting
                camera.lookAt(-30, 0, 150);
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