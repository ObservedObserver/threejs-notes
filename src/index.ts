import HelloWorld from './hello-world/index'
import Camera from './camera/index'
import Gemotry from './geometry/index'

let index = 2;
const list = [HelloWorld, Camera, Gemotry];

function showNext () {
  index = (index + 1) % list.length;
  console.log(index)
  document.querySelector('#main').innerHTML = ''
  list[index]()
}

const dom = document.createElement('button')
dom.append('show next')
dom.addEventListener('click', showNext)
document.querySelector('body').appendChild(dom)
list[index]()