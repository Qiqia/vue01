<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <h1>{{ msg }}</h1>
    <ul>
      <li><router-link to="/first">点我跳到第一个</router-link></li>
      <li><router-link to="/second">点我跳到第二个</router-link></li>
    </ul>
  </div>
</template>

<script>
console.log("I am at App.vue");
export default {
  name: 'App',
  data () {
    return {
      msg: 'Hello Vue!'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
