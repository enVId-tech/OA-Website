/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import * as Three from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// const image = require('../../images/photosphere/Photosphere-Enhanced.png');
const image = require('../../images/photosphere/StreetView.jpg');

interface PhotosphereProps {
    src: string;
}

const Photosphere: React.FC<PhotosphereProps> = ({ src }: PhotosphereProps): React.ReactElement => {
    const canvasRef: React.RefObject<HTMLCanvasElement> = React.useRef<HTMLCanvasElement>(null);
    
    React.useEffect(() => {
        const canvas: HTMLCanvasElement = canvasRef.current as HTMLCanvasElement;
        const renderer: Three.WebGLRenderer = new Three.WebGLRenderer({ canvas, antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        const scene: Three.Scene = new Three.Scene();
        const camera: Three.PerspectiveCamera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 500);
        
        const controls: OrbitControls = new OrbitControls(camera, renderer.domElement);

        const geometry: Three.SphereGeometry = new Three.SphereGeometry(250, 180, 90);
        const texture: Three.Texture = new Three.TextureLoader().load(image);
        const material: Three.MeshBasicMaterial = new Three.MeshBasicMaterial({ map: texture, side: Three.DoubleSide });
        const sphere: Three.Mesh = new Three.Mesh(geometry, material);

        // Camera position must be offset to the Orbitals controls
        camera.position.set(0, 0, 0.01);

        sphere.scale.x = -1;

        scene.add(sphere);

        const animate = (): void => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
            controls.update();
        };

        animate();

        // Cleanup function to dispose of controls
        return () => {
            controls.dispose();
        };
    }, [src]);

    // window.addEventListener('mousemove', (event) => {
    //     cameraVector.x -= event.movementX * 0.01;
    //     cameraVector.y -= event.movementY * 0.01;
    // });

    return (
        <canvas id="canvasTour" ref={canvasRef} />
    );
}

export default Photosphere;
