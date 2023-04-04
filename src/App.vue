<template>
  <div>
    <NavBar :logo="logo" :alt="appName" />
    <router-view />
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',

  components: {
    NavBar,
    Footer,
  },

  data(){
    return {
      logo: "/img/logo.png",
      appName: "Teste",
    }
  },
}
</script>

<style>
* {
  font-family: Helvetica;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

h1 {
  text-align: center;
  font-size: 42px;
  margin-bottom: 30px;
}
</style>
