<template>
    <div>
      <h1>Começando o projeto mimoArt</h1>
      <p>Meu nome é {{ personalInfo.name }} e tenho {{ personalInfo.age }}</p>
    </div>
</template>

<script>
export default {
  name: "FirstComponent",
  data() {
    return {
      personalInfo: {
        name: "Leonardo Henrique Alves Silva",
        age: "26 anos",
      }
    }
  },
}
</script>
