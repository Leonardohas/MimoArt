<template>
  <v-app>
    <v-main>
      <FirstComponent />
      <LifeCycle />
    </v-main>
  </v-app>
</template>

<script>
import FirstComponent from './components/FirstComponent.vue'
import LifeCycle from './components/LifeCycle.vue'

export default {
  name: 'App',

  components: {
    FirstComponent,
    LifeCycle,
  },

  data: () => ({
    //
  }),
}
</script>
