import React from 'react';

const RectLight = (props: { glow: any; }) => {

    const {glow} = props;

    return (
        <rectAreaLight
            color={"0xf9d71c"}
            intensity={glow}
            width={150}
            height={30}
            position={[5, 23, 5]}
            onUpdate={self => {
                self.lookAt(0, 0, 120)
            }}
        />
    )
};

export default RectLight;