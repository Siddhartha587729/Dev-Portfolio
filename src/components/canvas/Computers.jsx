import {Suspense, useEffect, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from "../Loader"


const Computers = ({isMobile}) => {
  const computer = useGLTF('./the_moon/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={2.5} groundColor="white"/>
      <pointLight intensity ={12}  position={[3, -1, 2]}/>
      {/* <spotLight
        position={[-20,50,10]}
        angle={0.12} 
        penumbra={1} 
        intensity={13}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      /> */}
      {/* <primitive 
        object={computer.scene}
        scale={isMobile ? 0.7 : 1.95}
        position={isMobile ? [0,-3,-2.2] : [5, -1, -2.5]}
        rotation={[0, 0, 0]}
      /> */}
      <primitive
      object={computer.scene}
      scale={isMobile ? 1 : 1.5}
      position-y = {isMobile ? -1.5 : -1}
      rotation-y= {0}
    />
    </mesh>
  )
}

const ComputersCanvas = ()=>{
  const [isMobile, setsIsMobile] = useState(false);

  useEffect(() =>{
    const mediaQuery = window.matchMedia("(max-width: 800px)");

    setsIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setsIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change',handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change',handleMediaQueryChange);
    }

  },[])

  return(
    <Canvas frameloop='demand' shadows /* camera={{position:[20,3,5], fov: 25}} */ 
    camera={{
      fov: 45,
      near: 0.1,
      far: 200,
      position: [-4, 3, 6]
    }}
      gl={{preserveDrawingBuffer: true}} className='' >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2}/>
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}

export default ComputersCanvas