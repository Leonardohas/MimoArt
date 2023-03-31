<template>
  <v-app>
    <v-main>
      <FirstComponent />
      <LifeCycle /> 
      <Info /> 
    </v-main>
  </v-app>
</template>

<script>
import FirstComponent from './components/FirstComponent.vue'
import LifeCycle from './components/LifeCycle.vue'
import Info from './components/Info.vue'

export default {
  name: 'App',

  components: {
    FirstComponent,
    LifeCycle,
    Info,
  },

  data: () => ({
    //
  }),
}
</script>
