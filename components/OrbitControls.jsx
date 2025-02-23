"use client"
import { extend, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

const Controls = () => {

    const { camera, gl } = useThree();
    return <orbitControls attach={"orbitControls"}  args={[camera, gl.domElement]} />;

}

export default Controls