
import React from 'react';
import { useBox } from '@react-three/cannon'; // If you decide to use physics later

function JengaBlock(props) {
  const [ref] = useBox(() => ({ mass: 1, position: props.position }));
  
  return (
    <mesh ref={ref} position={props.position}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color="tan" />
    </mesh>
  );
}

export default JengaBlock;
