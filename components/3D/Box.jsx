import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";


const Box = (props) => {
    const texture = useLoader(TextureLoader, "/texture.jpg");

  return (
    <mesh {...props} receiveShadow={true} castShadow>
    <boxGeometry />
    <meshPhysicalMaterial map={texture} color={"white"} />
  </mesh>
  )
}

export default Box