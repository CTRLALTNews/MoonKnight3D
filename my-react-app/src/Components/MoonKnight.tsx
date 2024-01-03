import { useState } from 'react'
import { useRef } from "react";
import { Mesh } from "three";
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useMotionValueEvent, useScroll, useSpring } from 'framer-motion';

const MoonKnight = () => {

  const mesh = useRef<Mesh>(null!);
  const { scene } = useGLTF("3dModel/scene.gltf")
  const { scrollYProgress } = useScroll();
  const scrollY = useSpring(scrollYProgress, { stiffness: 100, damping: 50 })
  const [meshScale, setMeshScale] = useState<number>(5)
  
  useMotionValueEvent(scrollY , "change", (latest) => {
    const a = new THREE.Vector3( 0, 1, 0 );
    mesh.current.setRotationFromAxisAngle(a, latest * 3.125)
    setMeshScale(5 - (latest * 0.5))
  })

  return (
    <mesh ref={mesh} scale={[-meshScale, meshScale, -meshScale]} position={[0, -7, 0]}>
      <primitive object={scene}/>
    </mesh>
  )
}

export default MoonKnight