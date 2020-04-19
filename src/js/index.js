import test from './test'
import '../css/index.css'
console.log('加载了index.js')

test()

if(module.hot) {
  module.hot.accept('./test.js', function() {
    test()
  })
}