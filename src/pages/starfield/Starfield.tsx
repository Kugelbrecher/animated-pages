import React, { useRef } from 'react';
import { Points } from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei'
import './starfield.css'

const RotatingStars: React.FC = () => {
    const stars = useRef<Points>(null);

    useFrame(() => {
        stars.current!.rotation.x = stars.current!.rotation.y += 0.00015;
    });

    return <Stars ref={stars} />
};

const Starfield: React.FC = () => {
    return (
        <div className='stars'>
            <Canvas>
                <OrbitControls 
                    enableZoom={true}
                    enableDamping={true}
                    enablePan={true} 
                    enableRotate={true}
                    zoomSpeed={0.6}
                    panSpeed={0.5}
                    rotateSpeed={0.4}
                    minAzimuthAngle={-Math.PI / 4}
                    maxAzimuthAngle={Math.PI / 4}
                    minPolarAngle={Math.PI / 6}
                    maxPolarAngle={Math.PI - Math.PI / 6}
                />
                <RotatingStars />
            </Canvas>
        </div>
    )
};

export default Starfield;