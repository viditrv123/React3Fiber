import {useFrame} from "@react-three/fiber";
import {useRef} from "react";

const TorusKnot=()=> {
    const cubRef=useRef()
    const cub2=useRef()
    useFrame((state,delta)=>{
        cubRef.current.rotation.y+=delta
        cub2.current.rotation.y+=delta

    })
    return (
        <>
            <mesh ref={cubRef} position-x={[-3]} rotation-y={Math.PI* 0.25}>
                <boxGeometry args={[1, 1, 1]}/>
                <meshBasicMaterial color='blue'/>
            </mesh>
            <mesh ref={cub2} position-x={[3]} rotation-y={Math.PI* 0.25}>
                <boxGeometry args={[3, 3, 3]}/>
                <meshBasicMaterial color="red"/>
            </mesh>
        </>

    )

}

export default TorusKnot
