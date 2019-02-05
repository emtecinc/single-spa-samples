<template>
  <div id="app3">
    <img src="./assets/logo.png">
    <HelloWorld msg="This was rendered by App3 which is written in Vue JS"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app3',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app3 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
