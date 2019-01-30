<template>
  <div id="app">
    <NavBar />
    <div class="container mw-100">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>

//import HelloWorld from './components/HelloWorld.vue'
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer"
export default {
  name: 'app',
  components: {
    NavBar,
    Footer
  }
}
</script>

<!--
 <style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 12px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /** color: #ecf0f5; **/
  margin-top: 60px;
}
</style> -->