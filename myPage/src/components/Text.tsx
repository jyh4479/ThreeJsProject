import {FontLoader} from "three/examples/jsm/loaders/FontLoader";
import {TextGeometry} from "three/examples/jsm/geometries/TextGeometry";
import React, {useEffect, useState} from "react";
import {useBox} from "@react-three/cannon";

const Text = () => {

    const [testText, setTextText] = useState(null);
    //@ts-ignore
    const [textGeometry, setTextGeometry] = useState(new TextGeometry("", {}));
    const [ref] = useBox(() => ({mass: 1, position: [0, 30, -30]}));

    useEffect(() => {
        const text = "Hello!";
        let textMesh;

        const loader = new FontLoader();
        loader.load("./src/fonts/Roboto_Medium_Italic.json", font => {
            const tGeometry = new TextGeometry(text, {
                font: font,
                size: 10,
                height: 5,
                curveSegments: 12,
                bevelEnabled: true,
                bevelThickness: 2,
                bevelSize: 2,
                bevelOffset: 2,
                bevelSegments: 15
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
        <mesh geometry={textGeometry} ref={ref}>
            <meshPhongMaterial emissive={"0xf9d71c"} emissiveIntensity={0.5}/>
            <meshPhongMaterial color={"yellow"}/>
        </mesh>
    )
};

export default Text;