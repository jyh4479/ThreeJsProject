import React from 'react';

const PointLight = () => {
    return (
        <pointLight
            color={"0xffffff"}
            intensity={0.3}
            distance={100}
            position={[0, 50, -50]}
            castShadow={true}
        />
    )
};

export default PointLight;