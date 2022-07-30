import React, {useRef, useState} from 'react';
import {Box, CustomCanvas, Ground, StreetLamp, Text} from "./components";
import {PointLight} from "./components/lights";
import {OrbitControls, Stars} from "@react-three/drei";
import {Physics} from "@react-three/cannon";
import NoticeBoard from "./components/NoticeBoard";


//https://sketchfab.com/
//3D Model 관련 참고 사이트
const App = () => {

    const boxArray = Array.from(Array(300).keys());
    const [boxList, setBoxList] = useState([]);

    const physicalField = useRef(null);


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


            {/*@ts-ignore*/}
            <Physics ref={physicalField}>

                {boxArray.map(index => <Box index={index}/>)}

                <Text
                    glow={0.5}
                    position={[-25, 35, 6]}
                    rotation={[0, -0.645, 0]}
                    text={"Hi! Welcome my page"}
                />

                <Text
                    glow={0.5}
                    position={[-15, 25, 13.5]}
                    rotation={[0, -0.645, 0]}
                    text={"I'm Front-end Developer"}
                />

                <Text
                    glow={0.5}
                    position={[-8, 15, 19]}
                    rotation={[0, -0.645, 0]}
                    text={"Jeong Yong Hoon!"}
                />

                <NoticeBoard
                    position={[-55, 0, 55]}
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
