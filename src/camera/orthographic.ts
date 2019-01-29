import * as three from 'three';

function main(): void {
  const renderer: three.WebGLRenderer = new three.WebGLRenderer();
  renderer.setSize(400, 300)
  document.querySelector('#main').appendChild(renderer.domElement);
  renderer.setClearColor(0xeeeeee);
  const scene: three.Scene = new three.Scene()
  
  const camera: three.Camera = new three.OrthographicCamera(-1, 3, 1.5, -1.5, 1, 10)
  camera.position.set(4, -3, 5)
  
  const cube = new three.Mesh(
    new three.CubeGeometry(1,1,1),
    new three.MeshBasicMaterial({
      color: 0xff0000,
      wireframe: true
    })
  )
  scene.add(cube)
  camera.lookAt(new three.Vector3(0,0,0))
  renderer.render(scene, camera)
}

export default main