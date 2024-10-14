import {useFrame,useThree, extend} from "@react-three/fiber";
import {useRef} from "react";
import * as THREE from "three";
import {OrbitControls} from "three/addons/controls/OrbitControls.js";

extend({OrbitControls:OrbitControls})

const TorusKnot=()=> {
    const cubRef=useRef()
    const cub2=useRef()
    useFrame((state,delta)=>{
        cubRef.current.rotation.y+=delta
        cub2.current.rotation.y+=delta

    })

    const three=useThree()
    console.log(three)
    return (
        <>
            <orbitControls args={[three.camera,three.gl.domElement]} />
            <mesh ref={cubRef} position-x={[-3]} rotation-y={Math.PI* 1}>
                <planeGeometry args={[1, 1, 1]}/>
                <meshBasicMaterial color='blue' side={THREE.DoubleSide}/>
            </mesh>
            <mesh ref={cub2} position-x={[3]} rotation-y={Math.PI* 0.25}>
                <boxGeometry args={[3, 3, 3]}/>
                <meshBasicMaterial color="red"/>
            </mesh>
        </>

    )

}

export default TorusKnot
