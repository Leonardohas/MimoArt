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
      logo: "/img/mimoArt.png",
      appName: "Teste",
    }
  },
}
</script>

<style>

</style>
