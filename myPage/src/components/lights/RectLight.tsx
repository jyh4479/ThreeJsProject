import React from 'react';

const RectLight = (props: { glow: any; }) => {

    const {glow} = props;

    return (

        <rectAreaLight
            color={"0xf9d71c"}
            intensity={1}
            width={150}
            height={30}
            // position={[5, 23, 5]}
            // position={[0, 0, 0]}
            position={[0, 50, 0]}
            // @ts-ignore
            lookAt={[0, 0, 0]}
            penumbra={1}
            castShadow

            // onUpdate={self => {
            //     self.lookAt(0, 0, 120)
            // }}
        />

    )
};

export default RectLight;