import * as THREE from 'three'
import React from 'react'

export default function Ground(props: JSX.IntrinsicElements['mesh']) {

    const geometry = new THREE.PlaneGeometry(1, 1);
    const material = new THREE.MeshBasicMaterial({
        color: 0xffff00, side:
        THREE.DoubleSide
    });

    return new THREE.Mesh(geometry, material);
}