import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import secondcomponent from '@/components/secondcomponent'


Vue.use(Router)
console.log("I am at index.js");
const First = { template: '<div><h2>我是第 1 个子页面</h2></div>' }
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/first',
      component: First
    },
    {
      path: '/second',
      component: secondcomponent
    }
  ]
})
