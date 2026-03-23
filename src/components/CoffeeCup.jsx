import React from 'react';

export default function CoffeeCup({ cupMaterialRef, dropsGroupRef, position = [0, 0, 0], scale = 1, rotation = [0, 0, 0] }) {
  return (
    <group position={position} scale={scale} rotation={rotation} dispose={null}>
      {/* Cup Body */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[1, 0.8, 2.5, 32]} />
        <meshStandardMaterial ref={cupMaterialRef} color="#fdfbf7" roughness={0.1} metalness={0.1} />
      </mesh>
      
      {/* Cup Inside/Liquid */}
      <mesh position={[0, 1.2, 0]}>
        <cylinderGeometry args={[0.95, 0.95, 0.1, 32]} />
        <meshStandardMaterial color="#3c2f2f" roughness={0.8} />
      </mesh>

      {/* Cup Handle */}
      <mesh position={[1.2, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
        <torusGeometry args={[0.6, 0.15, 16, 32, Math.PI]} />
        <meshStandardMaterial color="#fdfbf7" roughness={0.1} metalness={0.1} />
      </mesh>

      {/* Sleeve / Accent Band */}
      <mesh position={[0, -0.3, 0]}>
        <cylinderGeometry args={[0.94, 0.88, 0.8, 32]} />
        <meshStandardMaterial color="#3c2f2f" roughness={0.3} metalness={0.2} />
      </mesh>

      {/* Spilling Coffee Drops (Hidden Initially with scale 0) */}
      <group ref={dropsGroupRef} position={[0, 1.5, 0]}>
        <mesh position={[-0.2, 0, 0]} scale={0}>
          <sphereGeometry args={[0.2]} />
          <meshStandardMaterial color="#3c2f2f" roughness={0.2} />
        </mesh>
        <mesh position={[0.2, 0, 0.2]} scale={0}>
          <sphereGeometry args={[0.15]} />
          <meshStandardMaterial color="#3c2f2f" roughness={0.2} />
        </mesh>
        <mesh position={[0, 0.2, -0.2]} scale={0}>
          <sphereGeometry args={[0.08]} />
          <meshStandardMaterial color="#3c2f2f" roughness={0.2} />
        </mesh>
      </group>
    </group>
  );
}
