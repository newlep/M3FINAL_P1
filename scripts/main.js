import * as THREE from './three.module.js';
import * as TWEEN from './tween.esm.js'; //IDK HOW THIS WORKS
import { OrbitControls } from './OrbitControls.js';
import { OBJLoader } from './OBJLoader.js';
import { MTLLoader } from './MTLLoader.js';
import { FlyControls } from './FlyControls.js';


//Camera and Scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 0.1, 10000);
  camera.position.set(100, 100, 100);
  camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
const flyControls = new FlyControls( camera, renderer.domElement);
//Camera Controls
flyControls.movementSpeed = .5;
flyControls.dragToLook = true;
flyControls.rollSpeed = .005;

//Shadows - Test lng to 
renderer.shadowMap.enabled = true; // set to 'true' to enable shadows. 'true'|'false'
renderer.shadowMap.type = THREE.PCFSoftShadowMap;




//LIGHTS

//const ambientLight = new THREE.AmbientLight("#FFF78A", 1); // Color, Intensity
//scene.add(ambientLight);
  
  //const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  //directionalLight.position.set(25, 120, -35);
  //scene.add(directionalLight); 

  //const spotLight = new THREE.SpotLight(0xFFFFFF, 1, 50, 0.8 );
  //spotLight.position.set(1, 5, -45);
  //spotLight.castShadow=true;
  //spotLight.shadow.mapSize.set(2056,2056);
  //scene.add(spotLight);
  
  //const hemLight = new THREE.HemisphereLight(0x181B1B, 1 );
  //hemLight.position.set(0, 5, 0);
  //hemLight.castShadow=true;
  //scene.add(hemLight);

  //OLD POINT
  //const pointLight = new THREE.PointLight( 0xFFFFFF, 120, 200 );
    //pointLight.position.set( 0, 15, 12 );
    //scene.add( pointLight );

  // NEW Lights

  // Ambient Light
const ambientLight = new THREE.AmbientLight("#FFF78A", 1); // Color, Intensity
scene.add(ambientLight);

// Directional Light
const directionalLight = new THREE.DirectionalLight("#fff5b6", 1);
directionalLight.castShadow = true;
directionalLight.position.set(0, 100, 0);
scene.add(directionalLight);

// Configure shadow properties for the light
directionalLight.shadow.mapSize.width = 4000;
directionalLight.shadow.mapSize.height = 4000;
directionalLight.shadow.camera.near = 0.5;
directionalLight.shadow.camera.far = 5000;
  // POINT
const pointLight = new THREE.PointLight("#fff5b6", 1000, 0, 5);
pointLight.castShadow = true;
pointLight.position.set(0, 100, 0);
pointLight.intensity = 10; // Adjust intensity if needed
scene.add(pointLight);

// Configure shadow properties for the point light
pointLight.shadow.mapSize.width = 1024;
pointLight.shadow.mapSize.height = 1024;
pointLight.shadow.camera.near = 5;
pointLight.shadow.camera.far = 200;


  renderer.setSize( window.innerWidth, window.innerHeight );
  
  document.body.appendChild( renderer.domElement );
  const controls = new OrbitControls( camera, renderer.domElement );
  controls.update();

//clip
// Traverse through the models and enable shadow casting for meshes
function enableShadowCasting(model) {
  model.traverse((child) => {
      if (child.isMesh) {
          child.castShadow = true;
      }
  });
}


//SKYBOX
let sceneBackground = new THREE.TextureLoader().load( '../assets/textures/bech.avif')
sceneBackground.wrapS = THREE.MirroredRepeatWrapping;
sceneBackground.wrapT = THREE.MirroredRepeatWrapping;
scene.background = sceneBackground
const objLoader = new OBJLoader();

//OBJ Loader
{
  const objLoader = new OBJLoader();

//MTL Loader
{
  const mtlLoader = new MTLLoader();
  mtlLoader.load('../assets/models/tree2.mtl', function (mtl)  {
    mtl.preload();
    objLoader.setMaterials(mtl);
    objLoader.load('../assets/models/tree2.obj', function (textree)  {
      textree.position.set(5, 10, -3);
      textree.scale.setScalar(0.3);
      enableShadowCasting(textree);
      scene.add(textree);
    });
  });
}}
//000000000000000000 CODE CODE CODE 0000000000000000000000000

//xbarrier

{
  const mtlLoader = new MTLLoader();
  mtlLoader.load('../assets/models/xbarrier.mtl', function (mtl)  {
    mtl.preload();
    objLoader.setMaterials(mtl);
    objLoader.load('../assets/models/xbarrier.obj', function (tplayer)  {
      tplayer.rotation.set(0,90,0);
      tplayer.position.set(50, 5, -3);
      tplayer.scale.setScalar(0.18);
      enableShadowCasting(tplayer);
      scene.add(tplayer);
    });
  });
}
//Fairy Ring

{
  const objLoader = new OBJLoader();


{
  const mtlLoader = new MTLLoader();
  mtlLoader.load('../assets/models/fairy ring.mtl', function (mtl)  {
    mtl.preload();
    objLoader.setMaterials(mtl);
    objLoader.load('../assets/models/fairy ring.obj', function (tfairy)  {
      tfairy.rotation.set(0,0,0);
      tfairy.position.set(45, -22, -44);
      tfairy.scale.setScalar(12);
      scene.add(tfairy);
    });
  });
}}

//Reed

{
  const objLoader = new OBJLoader();


{
  const mtlLoader = new MTLLoader();
  mtlLoader.load('../assets/models/reed.mtl', function (mtl)  {
    mtl.preload();
    objLoader.setMaterials(mtl);
    objLoader.load('../assets/models/reed.obj', function (reed)  {
      reed.rotation.set(0,0,0);
      reed.position.set(45, -5, -10);
      reed.scale.setScalar(0.5);
      scene.add(reed);
    });
  });
}}
//reed 2

{
  const objLoader = new OBJLoader();


{
  const mtlLoader = new MTLLoader();
  mtlLoader.load('../assets/models/reed.mtl', function (mtl)  {
    mtl.preload();
    objLoader.setMaterials(mtl);
    objLoader.load('../assets/models/reed.obj', function (reed2)  {
      reed2.rotation.set(0,0,0);
      reed2.position.set(45, -15, 30);
      reed2.scale.setScalar(0.4);
      scene.add(reed2);
    });
  });
}}
//reed 3

{
  const objLoader = new OBJLoader();


{
  const mtlLoader = new MTLLoader();
  mtlLoader.load('../assets/models/reed.mtl', function (mtl)  {
    mtl.preload();
    objLoader.setMaterials(mtl);
    objLoader.load('../assets/models/reed.obj', function (reed2)  {
      reed2.rotation.set(0,0,0);
      reed2.position.set(-45, -15, -30);
      reed2.scale.setScalar(0.6);
      scene.add(reed2);
    });
  });
}}

//reed4
//reed 3

{
  const objLoader = new OBJLoader();


{
  const mtlLoader = new MTLLoader();
  mtlLoader.load('../assets/models/reed.mtl', function (mtl)  {
    mtl.preload();
    objLoader.setMaterials(mtl);
    objLoader.load('../assets/models/reed.obj', function (reed2)  {
      reed2.rotation.set(0,0,0);
      reed2.position.set(-15, 0, 0);
      reed2.scale.setScalar(0.32);
      scene.add(reed2);
    });
  });
}}

// grass 

//Code Starts here
//Texture / Materials
const matrGrass = new THREE.TextureLoader().load('../assets/textures/grass.jpg');


//shapes

const landgeometry = new THREE.ConeGeometry(120, 25, 12); 
const landmaterial = new THREE.MeshBasicMaterial( {color: 0xffff00,map: matrGrass } );
const landcone = new THREE.Mesh(landgeometry, landmaterial ); 
landcone.receiveShadow = true;
landcone.rotation.set(0,0,0);

scene.add( landcone );

//PATH
const pathGeometry = new THREE.PlaneGeometry(0, 83);
const pathMesh = new THREE.Mesh(pathGeometry, matrGrass);
pathMesh.position.set(30, 0, 18);
pathMesh.rotation.x = -Math.PI / 2; // Rotate by -90 degrees around the X axis
pathMesh.castShadow = true;
pathMesh.receiveShadow = true;
scene.add(pathMesh);

const pathGeometry1 = new THREE.PlaneGeometry(120, 0);
const pathMesh1 = new THREE.Mesh(pathGeometry1, matrGrass);
pathMesh1.position.set(-35, 0, 0);
pathMesh1.rotation.x = -Math.PI / 2; // Rotate by -90 degrees around the X axis
pathMesh1.castShadow = true;
pathMesh1.receiveShadow = true;
scene.add(pathMesh1);

const pathGeometry2 = new THREE.PlaneGeometry(120, 0);
const pathMesh2 = new THREE.Mesh(pathGeometry2, matrGrass);
pathMesh2.position.set(-35, 0, 140);
pathMesh2.rotation.x = -Math.PI / 2; // Rotate by -90 degrees around the X axis
pathMesh2.castShadow = true;
pathMesh2.receiveShadow = true;
scene.add(pathMesh2);

// Create particle material with emissive property
const particleTexture = new THREE.TextureLoader().load('./assets/textures/wot.png');
const particleMaterial = new THREE.PointsMaterial({
    size: 12,
    map: particleTexture,
    transparent: true,
    blending: THREE.AdditiveBlending,
    color: 0xffffff, // Use color instead of emissive
    intensity: 10000,    // Use intensity instead of emissiveIntensity
});

// Create particle system geometry and mesh
const particleGeometry = new THREE.BufferGeometry(); // Use BufferGeometry instead of Geometry

// Define the initial positions for the particles
const numParticles = 100; // Adjust as needed
const positions = new Float32Array(numParticles * 3); // Each particle has x, y, z coordinates

for (let i = 0; i < numParticles; i++) {
    const index = i * 3;
    // Set initial positions randomly within a certain range
    positions[index] = Math.random() * 200 - 100; // x position
    positions[index + 1] = Math.random() * 200 - 100; // y position
    positions[index + 2] = Math.random() * 200 - 100; // z position
}



// Define velocities array to store particle velocities
const velocities = [];

// Initialize particle velocities
for (let i = 0; i < numParticles; i++) {
    // Random velocities in each direction
    const velocityX = Math.random() * 0.2 - 0.1;
    const velocityY = Math.random() * 0.2 - 0.1;
    const velocityZ = Math.random() * 0.2 - 0.1;
    
    velocities.push(velocityX, velocityY, velocityZ);
}

// Add the positions to the geometry as an attribute
particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

// Create particle system mesh
const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
scene.add(particleSystem);

// Define a function for animation
function animateParticles() {
    const positionsAttribute = particleGeometry.getAttribute('position'); // Get the position attribute

    // Update particle positions based on their velocities
    for (let i = 0; i < numParticles; i++) {
        const index = i * 3;
        positionsAttribute.array[index] += velocities[index]; // Update x position
        positionsAttribute.array[index + 1] += velocities[index + 1]; // Update y position
        positionsAttribute.array[index + 2] += velocities[index + 2]; // Update z position

        // Reset positions if particles go out of bounds (optional)
        if (positionsAttribute.array[index] > 100 || positionsAttribute.array[index] < -100) {
            positionsAttribute.array[index] = Math.random() * 200 - 100;
        }
        if (positionsAttribute.array[index + 1] > 100 || positionsAttribute.array[index + 1] < -100) {
            positionsAttribute.array[index + 1] = Math.random() * 200 - 100;
        }
        if (positionsAttribute.array[index + 2] > 100 || positionsAttribute.array[index + 2] < -100) {
            positionsAttribute.array[index + 2] = Math.random() * 200 - 100;
        }
    }

    positionsAttribute.needsUpdate = true; // Signal that the attribute values are updated

    renderer.render(scene, camera); // Render the scene

    requestAnimationFrame(animateParticles); // Request the next animation frame
}

// Start the particle animation
animateParticles();


// Mouse Control
let isRightMouseDown = false;
let prevMouseX = 0;
let prevMouseY = 0;

function onMouseDown(event) {
    if (event.button === 2) { // Right mouse button
        isRightMouseDown = true;
        prevMouseX = event.clientX;
        prevMouseY = event.clientY;
    }
}

function onMouseUp(event) {
    if (event.button === 2) { // Right mouse button
        isRightMouseDown = false;
    }
}

function onMouseMove(event) {
    if (isRightMouseDown) {
        const deltaX = event.clientX - prevMouseX;
        const deltaY = event.clientY - prevMouseY;

        const sensitivity = 0.001;
        camera.rotation.y -= deltaX * sensitivity;
        camera.rotation.x -= deltaY * sensitivity;

        prevMouseX = event.clientX;
        prevMouseY = event.clientY;
    }
}

document.addEventListener('mousedown', onMouseDown);
document.addEventListener('mouseup', onMouseUp);
document.addEventListener('mousemove', onMouseMove);

// WASD Movement
const keyboard = {};
document.addEventListener('keydown', (event) => {
    keyboard[event.key] = true;
});
document.addEventListener('keyup', (event) => {
    keyboard[event.key] = false;
});

const moveSpeed = 1;
const flySpeed = 1;

function updateCameraPosition() {
    const moveVector = new THREE.Vector3(); // Vector to store movement direction

    if (keyboard['w']) {
        moveVector.z -= moveSpeed; // Move camera forward
    }
    if (keyboard['s']) {
        moveVector.z += moveSpeed; // Move camera backward
    }
    if (keyboard['a']) {
        moveVector.x -= moveSpeed; // Move camera left
    }
    if (keyboard['d']) {
        moveVector.x += moveSpeed; // Move camera right
    }
    if (keyboard[' ']) { // Spacebar
        camera.position.y += flySpeed; // Move camera upwards
    }

    // Apply movement vector to the camera's position
    camera.position.add(moveVector);
}


function animate() {

	requestAnimationFrame( animate );

	// required if controls.enableDamping or controls.autoRotate are set to true
	//controls.update();
  updateCameraPosition();

	renderer.render( scene, camera );
}
animate();
