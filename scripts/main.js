import * as THREE from './three.module.js';
import { OrbitControls } from './OrbitControls.js';
import { OBJLoader } from './OBJLoader.js';
import { MTLLoader } from './MTLLoader.js';

//Camera and Scene
const scene = new THREE.Scene();

const aspectRatio = window.innerWidth / window.innerHeight;
const cameraWidth = 200;
const cameraHeight = cameraWidth / aspectRatio;


//LIGHTS
const camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.1, 10000);
  camera.position.set(100, 100, 100);
  camera.lookAt(0, 0, 0);
  
  const renderer = new THREE.WebGLRenderer();
  const ambientLight = new THREE.AmbientLight(0xFFFFFF, 2);
  ambientLight.castShadow=true;
  scene.add(ambientLight);
  
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  directionalLight.position.set(25, 120, -35);
  //scene.add(directionalLight); 

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

//clip

//SKYBOX
let sceneBackground = new THREE.TextureLoader().load( '../assets/textures/sbox2.jpg')
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
      tplayer.position.set(25, 10, -3);
      tplayer.scale.setScalar(0.17);
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
      tfairy.position.set(25, -5, -35);
      tfairy.scale.setScalar(5);
      scene.add(tfairy);
    });
  });
}}
//Code Starts here
//Texture / Materials
const matrGrass = new THREE.TextureLoader().load('../assets/textures/grass.jpg');


//shapes

const landgeometry = new THREE.ConeGeometry( 120, 25, 12); 
const landmaterial = new THREE.MeshBasicMaterial( {color: 0xffff00,map: matrGrass } );
const landcone = new THREE.Mesh(landgeometry, landmaterial ); 
landcone.rotation.set(0,0,0);

scene.add( landcone );

function animate() {

	requestAnimationFrame( animate );

	// required if controls.enableDamping or controls.autoRotate are set to true
	controls.update();

	renderer.render( scene, camera );
}
animate();
