import React, {Suspense} from 'react';
import {useLoader} from '@react-three/fiber'
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";

const NoticeBoard = () => {

    const noticeBoard = useLoader(GLTFLoader, "./src/sketchfabModel/noticeBoard/scene.gltf");

    return (
        <Suspense fallback={null}>
            <primitive position={[0, 0, 0]} scale={[20, 20, 20]} object={noticeBoard.scene}/>
        </Suspense>
    )
};

export default NoticeBoard;