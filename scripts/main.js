import * as THREE from './three.module.js';
import { OrbitControls } from './OrbitControls.js';
import { OBJLoader } from './OBJLoader.js';
import { MTLLoader } from './MTLLoader.js';

//Camera and Scene
const scene = new THREE.Scene();

const aspectRatio = window.innerWidth / window.innerHeight;
const cameraWidth = 200;
const cameraHeight = cameraWidth / aspectRatio;




const camera = new THREE.OrthographicCamera(
    cameraWidth / -2.5, // left
    cameraWidth / 2.5, // right
    cameraHeight / 2.5, // top
    cameraHeight / -2.5, // bottom
    0, // near plane
    1000 // far plane
  );
  camera.position.set(100, 100, 100);
  camera.lookAt(0, 0, 0);
  
  const renderer = new THREE.WebGLRenderer();
  const ambientLight = new THREE.AmbientLight(0xffffff, 1);
  //scene.add(ambientLight);
  
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(12, 12, 12);
  scene.add(directionalLight); 

  const spotLight = new THREE.SpotLight(0xFFFFFF, 1, 50, 0.8 );
  spotLight.position.set(1, 5, -45);
  spotLight.castShadow=true;
  spotLight.shadow.mapSize.set(2056,2056);
  //scene.add(spotLight);
  
  const hemLight = new THREE.HemisphereLight(0x181B1B, 1 );
  hemLight.position.set(0, 5, 0);
  hemLight.castShadow=true;
  //scene.add(hemLight);

  const pointLight = new THREE.PointLight( 0xFFB700, 3, 20 );
    pointLight.position.set( -11, 5, 30 );
    //scene.add( pointLight );
  
  renderer.setSize( window.innerWidth, window.innerHeight );
  
  document.body.appendChild( renderer.domElement );
  const controls = new OrbitControls( camera, renderer.domElement );
  controls.update();
  


//OBJ Loader
{
  const objLoader = new OBJLoader();
  objLoader.load('../assets/models/tree.obj', (root) => {
    scene.add(root);
  });
}
//MTL Loader
{
  const mtlLoader = new MTLLoader();
  mtlLoader.load('../assets/models/tree.mtl', (mtl) => {
    mtl.preload();
    objLoader.setMaterials(mtl);
    objLoader.load('../assets/models/tree.obj', (root) => {
      scene.add(root);
    });
  });
}

//Code Starts here
//Texture / Materials



function animate() {

	requestAnimationFrame( animate );

	// required if controls.enableDamping or controls.autoRotate are set to true
	controls.update();

	renderer.render( scene, camera );
}
animate();
