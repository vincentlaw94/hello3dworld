import * as THREE from "three";
import gsap from "gsap";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import GUI from "lil-gui";

const canvas = document.querySelector("canvas.webgl") as HTMLCanvasElement;
const scene = new THREE.Scene();

//object
const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  wireframe: true,
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

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

  //   camera.position.x = Math.cos(elapsedTime);
  //   camera.position.y = Math.sin(elapsedTime);
  //   camera.lookAt(mesh.position);

  //render
  renderer.render(scene, camera);
  window.requestAnimationFrame(animate);
};

animate();

/**
 * Debug
 */
const gui = new GUI();
gui.add(mesh.position, "y").min(-3).max(3).step(0.01).name("elevation");
gui.add(mesh, "visible");
gui.add(material, "wireframe");
gui.addColor(material, "color");
