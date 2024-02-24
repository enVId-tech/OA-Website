/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import * as Three from 'three';

interface PhotosphereProps {
    src: string;
}

const Photosphere: React.FC<PhotosphereProps> = (props: PhotosphereProps): React.ReactElement => {
    const containerRef: React.MutableRefObject<HTMLDivElement | null> = React.useRef<HTMLDivElement | null>(null);

    React.useEffect((): () => void => {
        // Create a scene
        const scene: Three.Scene = new Three.Scene();

        // Create a camera
        const camera: Three.PerspectiveCamera = new Three.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.set(0, 0, 0);

        // Create a renderer
        const renderer: Three.WebGLRenderer = new Three.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        containerRef.current?.appendChild(renderer.domElement);

        // Create a photosphere geometry
        const geometry: Three.SphereGeometry = new Three.SphereGeometry(5, 32, 32);

        // Load the photosphere texture
        const textureLoader: Three.TextureLoader = new Three.TextureLoader();
        const texture: Three.Texture = textureLoader.load('http://localhost:3000/static/media/Photosphere.3688c313d1cb6701ae50.webp');

        // Create a material with the photosphere texture
        const material: Three.MeshBasicMaterial = new Three.MeshBasicMaterial({ map: texture });

        // Create a photosphere mesh
        const photosphere: Three.Mesh = new Three.Mesh(geometry, material);

        // Add the photosphere to the scene
        scene.add(photosphere);

        // Render the scene with the camera
        const animate = (): void => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };
        animate();

        // Clean up
        return () => {
            const container = containerRef.current;
            if (container) {
                container.removeChild(renderer.domElement);
            }
        };
    }, [props.src]);

    return <div ref={containerRef} />;
};

export default Photosphere;