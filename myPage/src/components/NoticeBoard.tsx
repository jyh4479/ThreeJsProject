import React, {Suspense} from 'react';
import {useLoader, Vector3} from '@react-three/fiber'
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {Euler} from "@react-three/fiber/dist/declarations/src/three-types";

const NoticeBoard = (props: { position: Vector3, rotation: Euler }) => {

    const {position, rotation} = props;

    const noticeBoard = useLoader(GLTFLoader, "./sketchfabModel/noticeBoard/scene.gltf");

    // const rotateModel = (model: any) => {
    //     model.rotation.x += 5;
    //     model.rotation.y += 5;
    //
    //     return model.scene
    // }

    return (
        <Suspense fallback={null}>
            <primitive position={position} rotation={rotation} scale={[65, 50, 50]} object={noticeBoard.scene}/>
        </Suspense>
    )
};

export default NoticeBoard;