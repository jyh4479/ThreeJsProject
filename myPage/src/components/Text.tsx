import {FontLoader} from "three/examples/jsm/loaders/FontLoader";
import {TextGeometry} from "three/examples/jsm/geometries/TextGeometry";
import React, {useEffect, useState} from "react";
import {useBox} from "@react-three/cannon";

const Text = (props: { glow: any; position: any; rotation: any, text: string }) => {

    const {glow, position = [0, 0, 0], rotation = [0, 0, 0], text = "Hello"} = props;
    const [testText, setTextText] = useState(null);
    //@ts-ignore
    const [textGeometry, setTextGeometry] = useState(new TextGeometry("", {}));
    const [ref] = useBox(() => ({mass: 0, position: position, rotation: rotation}));

    useEffect(() => {
        let textMesh;

        const loader = new FontLoader();
        loader.load("/fonts/Roboto_Medium_Italic.json", font => {
            const tGeometry = new TextGeometry(text, {
                font: font,
                size: 5,
                height: 1,
                // curveSegments: 1,
                // bevelEnabled: true,
                // bevelThickness: 1,
                // bevelSize: 1,
                // bevelOffset: 1,
                // bevelSegments: 1
            });

            setTextGeometry(tGeometry);

            // textMesh = new THREE.Mesh(tGeometry, [
            //     new THREE.MeshPhongMaterial({emissive: 0xf9d71c, emissiveIntensity: 0.5}),
            //     new THREE.MeshPhongMaterial({color: 0xffffff})
            // ]);
        })
    }, [])

    return (
        //@ts-ignore
        <mesh geometry={textGeometry} castShadow={true} receiveShadow={true} ref={ref}>
            <meshPhongMaterial emissive={"0xf9d71c"} emissiveIntensity={glow}/>
            <meshPhongMaterial color={"yellow"}/>
        </mesh>
    )
};

export default Text;