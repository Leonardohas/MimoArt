<template>
  <v-app>
    <v-main>
      <FirstComponent />
    </v-main>
  </v-app>
</template>

<script>
import FirstComponent from './components/FirstComponent.vue'

export default {
  name: 'App',

  components: {
    FirstComponent,
  },

  data: () => ({
    //
  }),
}
</script>
