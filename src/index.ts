import * as three from 'three'
const renderder: three.WebGLRenderer = new three.WebGLRenderer({
  canvas: document.querySelector('#canvas')
})

const scene: three.Scene = new three.Scene()

const camara = new three.PerspectiveCamera()

const cube = new three.Mesh(
  new three.CubeGeometry(1, 2, 3),
  new three.MeshBasicMaterial({
    color: 0xff0000
  })
);
scene.add(cube);

camara.position.set(0,0,5)
scene.add(camara)

renderder.render(scene, camara)

console.log('tet')