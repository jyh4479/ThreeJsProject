import {OrbitControls} from "@react-three/drei";

const CustomCamera = (props: { camera: any; }) => {

    const {camera} = props;

    return <OrbitControls camera={camera}/>;
}

export default CustomCamera;

