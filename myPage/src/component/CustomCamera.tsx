import {OrbitControls} from "@react-three/drei";

export default function CustomCamera() {

    // const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 100, 1000);

    return (
        <OrbitControls/>
    );
}