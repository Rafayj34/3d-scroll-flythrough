import React from 'react'

const LightBulb = (props) => {
  return (
    <mesh {...props} >
      <spotLight intensity={50} castShadow />
      <sphereGeometry args={[1, 20, 50]} />
      <meshPhongMaterial emissive={"yellow"}  />
    </mesh>
  )
}

export default LightBulb