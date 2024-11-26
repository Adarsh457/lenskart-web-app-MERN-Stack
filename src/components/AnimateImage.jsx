import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';

const AnimateImage = () => {
    const meshRef = useRef();
    const texture = useLoader(TextureLoader, '/path/to/your/image.jpg'); // Load the image
  
    // Animate the plane
    useFrame(() => {
      if (meshRef.current) {
        meshRef.current.rotation.y += 0.01; // Rotate around the Y-axis
        meshRef.current.rotation.x += 0.005; // Rotate around the X-axis
      }
    });
  
    return (
      <mesh ref={meshRef}>
        <planeGeometry args={[3, 2]} /> {/* Plane geometry of size 3x2 */}
        <meshBasicMaterial map={texture} /> {/* Apply the image as a texture */}
      </mesh>
    );
}

export default AnimateImage