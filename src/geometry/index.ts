import * as three from 'three';

function main () {
  const renderer: three.WebGLRenderer = new three.WebGLRenderer()
  renderer.setClearColor(0xeeeeee);
  renderer.setSize(400, 300)
  document.querySelector('#main').appendChild(renderer.domElement)
  const scene: three.Scene = new three.Scene()
  const camera: three.PerspectiveCamera = new three.PerspectiveCamera(45, 4 / 3, 1, 1000)
  camera.position.set(0, 0, 5)
  camera.lookAt(0, 0, 0)
  // const geometry: three.Geometry = new three.CubeGeometry(1, 1, 1)
  // const geometry: three.Geometry = new three.PlaneGeometry(1, 2)
  // const geometry: three.Geometry = new three.CircleGeometry(1)
  // const geometry: three.Geometry = new three.SphereGeometry(1, 8, 6)
  // const geometry: three.Geometry = new three.CylinderGeometry(1,2,3)
  // const geometry: three.Geometry = new three.TorusGeometry(3, 1, 4, 8)
  const geometry = new three.Geometry();

  // 设置顶点位置
  // 顶部4顶点
  geometry.vertices.push(new three.Vector3(-1, 2, -1));
  geometry.vertices.push(new three.Vector3(1, 2, -1));
  geometry.vertices.push(new three.Vector3(1, 2, 1));
  geometry.vertices.push(new three.Vector3(-1, 2, 1));
  // 底部4顶点
  geometry.vertices.push(new three.Vector3(-2, 0, -2));
  geometry.vertices.push(new three.Vector3(2, 0, -2));
  geometry.vertices.push(new three.Vector3(2, 0, 2));
  geometry.vertices.push(new three.Vector3(-2, 0, 2));

  // 设置顶点连接情况
  // 顶面
  geometry.faces.push(new three.Face3(0, 1, 2));
  geometry.faces.push(new three.Face4(4, 5, 6));
// 四个侧面
  geometry.faces.push(new three.Face4(0, 1, 5));
  geometry.faces.push(new three.Face4(1, 2, 6));
  geometry.faces.push(new three.Face4(2, 3, 7));
  geometry.faces.push(new three.Face4(3, 0, 4));
  const material = new three.MeshBasicMaterial({
    color: 0xff0000,
    wireframe: true
  })
  const cube = new three.Mesh(geometry, material)
  scene.add(cube)
  scene.add(camera)
  renderer.render(scene, camera)
}

export default main;