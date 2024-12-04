// Set up the scene, camera, and renderer
const container = document.getElementById('container');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

// Add a directional light
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1, 1, 1).normalize();
scene.add(light);

// Add a grid helper
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(gridHelper);

// Load your STL file
const loader = new THREE.STLLoader();
loader.load(
  'images/fordv6_fixed.stl',
  function (geometry) {
    const material = new THREE.MeshPhongMaterial({ color: 0x0055ff });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    mesh.rotation.x = -Math.PI / 2; // Rotate for better viewing
    mesh.position.set(0, 0, 0);
  },
  function (xhr) {
    console.log((xhr.loaded / xhr.total * 100) + '% loaded'); // Progress logging
  },
  function (error) {
    console.error('An error occurred:', error); // Error handling
  }
);

// Set camera position
camera.position.z = 50;

// Animate the scene
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

// Handle window resizing
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
