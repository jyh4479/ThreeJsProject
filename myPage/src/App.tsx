import React, {useState} from 'react';
import {Box, CustomCanvas, Ground, StreetLamp, Text} from "./components";
import {PointLight} from "./components/lights";
import {OrbitControls, Stars} from "@react-three/drei";
import {Physics} from "@react-three/cannon";
import NoticeBoard from "./components/NoticeBoard";


//https://sketchfab.com/
//3D Model 관련 참고 사이트
const App = () => {

    const boxArray = Array.from(Array(300).keys());
    const [glow, setGlow] = useState(50);

    const Animate = () => {
        // requestAnimationFrame(Animate);
        setGlow(Math.random() - 0.6);
    }

    // Animate();

    // @ts-ignore
    return (
        <CustomCanvas>
            <OrbitControls/>
            <Stars/>

            {/*<Cloud/>*/}
            {/*<Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25}/>*/}

            {/*<ambientLight intensity={0.2}/>*/}
            {/*<SpotLight/>*/}


            {/*<RectAreaLight position={[20, 10, 40]} rotation={[0, -0.5, 0]}/>*/}
            <PointLight position={[-40, 70, 0]}/>

            {/*<RectAreaLight position={[5, 23, -5]}/>*/}
            {/*<PointLight position={[0, 50, -50]}/>*/}


            <Physics>
                {boxArray.map(index => <Box index={index}/>)}

                <Text
                    glow={glow}
                    position={[-20, 30, 11]}
                    rotation={[0, -0.645, 0]}
                    text={"Front-end Developer"}
                />

                <Text
                    glow={glow}
                    position={[-8, 20, 20]}
                    rotation={[0, -0.645, 0]}
                    text={"Jeong Yong Hoon!"}
                />

                <NoticeBoard
                    position={[-50, 0, 60]}
                    rotation={[0, 2.5, 0, "XYZ"]}/>

                <StreetLamp
                    position={[-70, 0, 0]}
                    rotation={[0, 0, 0, "XYZ"]}/>
                <Ground/>
            </Physics>

        </CustomCanvas>
    )
}

export default App;
