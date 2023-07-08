//created the scene
const scene = new THREE.Scene();

//Geometry
const geometry = new THREE.BoxGeometry(1, 1, 1);

//Material
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

//Mesh
const mesh = new THREE.Mesh(geometry, material);

//add the mesh to the scene
scene.add(mesh);

//Sizes
const sizes = {
  width: 800,
  height: 600,
};

//camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

//renderer
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
