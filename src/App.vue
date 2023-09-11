<template>
  <v-app>
    <v-main>
      <!-- <FirstComponent />
      <LifeCycle /> 
      <Info />  -->
       <!-- <AvatarInfos /> -->
       <realTImeCalculator />
    </v-main>
  </v-app>
</template>

<script>
import FirstComponent from './components/FirstComponent.vue'
import LifeCycle from './components/LifeCycle.vue'
import Info from './components/Info.vue'
import AvatarInfos from './components/AvatarInfos.vue'
import realTImeCalculator from './components/realTImeCalculator.vue'

export default {
  name: 'App',

  components: {
    FirstComponent,
    LifeCycle,
    Info,
    AvatarInfos,
    realTImeCalculator,
  },

  data: () => ({
    //
  }),
}
</script>
