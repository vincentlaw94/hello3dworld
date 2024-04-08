import * as THREE from "three";
import gsap from "gsap";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import GUI from "lil-gui";

const canvas = document.querySelector("canvas.webgl") as HTMLCanvasElement;
const scene = new THREE.Scene();

// particles
const particlesGeometry = new THREE.BufferGeometry();
const count = 20000;
const positions = new Float32Array(count * 3);
const colors = new Float32Array(count * 3);

for (let i = 0; i < count * 3; i++) {
  positions[i] = (Math.random() - 0.5) * 10;
  colors[i] = Math.random();
}

particlesGeometry.setAttribute(
  "position",
  new THREE.BufferAttribute(positions, 3)
);
particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

// Create the Three.js BufferAttribute and specify that each information is composed of 3 values
const particlesMaterial = new THREE.PointsMaterial({
  size: 0.1,
  sizeAttenuation: true,
});
particlesMaterial.size = 0.1;
/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader();
const particleTexture = textureLoader.load("textures/particles/2.png");

particlesMaterial.vertexColors = true;

// particlesMaterial.map = particleTexture
particlesMaterial.transparent = true;
particlesMaterial.alphaMap = particleTexture;
// particlesMaterial.alphaTest = 0.001;
// particlesMaterial.depthTest = false;
particlesMaterial.depthWrite = false;
particlesMaterial.blending = THREE.AdditiveBlending;

const particles = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particles);

//camera
const sizes = {
  width: 800,
  height: 600,
};
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

//controls
const controls = new OrbitControls(camera, canvas);

//renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

//animation

// gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 });
// gsap.to(mesh.position, { duration: 1, delay: 2, x: 0 });
const clock = new THREE.Clock();
const animate = () => {
  const elapsedTime = clock.getElapsedTime();
  //update objects

  for (let i = 0; i < count; i++) {
    let i3 = i * 3;

    const x = particlesGeometry.attributes.position.array[i3];
    particlesGeometry.attributes.position.array[i3 + 1] = Math.sin(
      elapsedTime + x
    );
  }
  particlesGeometry.attributes.position.needsUpdate = true;
  //render
  renderer.render(scene, camera);
  window.requestAnimationFrame(animate);
};

animate();

/**
 * Debug
 */
// const gui = new GUI();
// gui.add(mesh.position, "y").min(-3).max(3).step(0.01).name("elevation");
// gui.add(mesh, "visible");
// gui.add(material, "wireframe");
// gui.addColor(material, "color");
