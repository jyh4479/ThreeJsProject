import React from 'react';
import {Box, Ground, Text} from "./components";
import {OrbitControls, Stars} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import {Physics} from "@react-three/cannon";


//https://www.youtube.com/watch?v=FGG0EeMNUl0
const App = () => {

    // const [camera, setCamera] = useState(new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 10, 10000));

    // useEffect(() => {
    //     camera.position.set(0, 0, 150);
    // }, [camera])

    // const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
    // const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 5, 100);
    // const camera = new THREE.OrthographicCamera(70, window.innerWidth / window.innerHeight, 5, 100, 50);

    return (
        <Canvas camera={{fov: 45, position: [20, 20, 200]}}>
            {/*<CustomCamera camera={camera}/>*/}
            <OrbitControls/>
            <Stars/>
            <ambientLight intensity={0.5}/>
            <spotLight position={[10, 5, 10]} angle={0.3}/>
            <Physics>
                <Box/>
                <Box/>
                <Text/>
                <Ground/>
            </Physics>
        </Canvas>
    )
}

export default App;
