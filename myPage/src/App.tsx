import React, {useState} from 'react';
import {Box, CustomCanvas, Ground, StreetLamp, Text} from "./components";
import {PointLight, SpotLight} from "./components/lights";
import {OrbitControls, Stars} from "@react-three/drei";
import {Physics} from "@react-three/cannon";


//https://sketchfab.com/
//3D Model 관련 참고 사이트
const App = () => {

    const boxArray = Array.from(Array(100).keys());
    const [glow, setGlow] = useState(50);

    const Animate = () => {
        // requestAnimationFrame(Animate);
        setGlow(Math.random() - 0.6);
    }

    // Animate();

    return (
        <CustomCanvas>
            <OrbitControls/>
            <Stars/>

            {/*<Cloud/>*/}
            {/*<Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25}/>*/}

            {/*<ambientLight intensity={0.2}/>*/}
            {/*<RectAreaLight/>*/}
            <SpotLight/>
            <PointLight/>

            <Physics>
                {boxArray.map(key => <Box key={key}/>)}
                <Text glow={glow}/>
                <StreetLamp/>
                <Ground/>
            </Physics>

        </CustomCanvas>
    )
}

export default App;
