import * as three from 'three'
function main (): void {
  const renderer: three.WebGLRenderer = new three.WebGLRenderer()
  document.querySelector('body').appendChild(renderer.domElement)
  renderer.setClearColor(0xeeeeee);
  const scene: three.Scene = new three.Scene()
  
  const camara = new three.PerspectiveCamera(45, 4 / 3, 1, 1000)
  
  const cube = new three.Mesh(
    new three.CubeGeometry(1, 2, 3),
    new three.MeshBasicMaterial({
      color: 0xff0000
    })
  );
  scene.add(cube);
  
  camara.position.set(0,0,5)
  scene.add(camara)
  
  renderer.render(scene, camara)
}
export default main