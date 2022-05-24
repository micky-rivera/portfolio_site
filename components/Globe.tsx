import type { NextPage } from 'next'
import styles from '../styles/Globe.module.css'
import * as THREE from 'three';
import { useEffect } from 'react';

let init = true;

const Globe = () => {

    useEffect(()=> {
        if (init) {
            const scene = new THREE.Scene();
            const backgroundColor = new THREE.Color(0x212529);
            scene.background = backgroundColor;
    
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
            const canvasElement = document.querySelector('#globe') as HTMLElement;
    
            const renderer = new THREE.WebGLRenderer({
                canvas: canvasElement!,
            });
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(canvasElement.offsetWidth, canvasElement.offsetHeight);
            
            camera.position.setZ(35);
            
            const geometry = new THREE.SphereGeometry(15,32,16);
            const material = new THREE.MeshBasicMaterial({
                color: 0xFFFFFF,
                wireframe: true
            });
            const sphere = new THREE.Mesh(geometry,material);
            
            scene.add(sphere);
    
            const animate = () => {
                requestAnimationFrame(animate);
    
                sphere.rotation.y += 0.005;
    
                renderer.render(scene, camera);
            };
            
            animate();
            init = false;
        }
        
    }, []);

  return (
    <div className={styles.globe__container}>
        <canvas id='globe' className={styles.globe__canvas}></canvas>
    </div>
  )
}

export default Globe;
