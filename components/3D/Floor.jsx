import React from 'react'

const Floor = (props) => {
  return (
    <mesh {...props} recieveShadow>
    <boxGeometry args={[10,0.2,5]} />
    <meshPhysicalMaterial color='white' />
  </mesh>
  )
}

export default Floor