<template>
    <div>
        <v-container>
        <h1>Criando funções para mudar em tempo real</h1>
        <v-card class="mt-6" title="Calculadora em tempo real" variant="tonal">
            <v-text-field v-model="numero1" label="digite um numero" @input="somar"/>
            <v-text-field v-model="numero2" label="digite um numero" @input="somar"/>
            {{ resultado }}

    
            <!-- <input v-model="numero1" type="number" @input="somar">
            +
            <input v-model="numero2" type="number" @input="somar">
            =
            {{ resultado }} -->
        </v-card>
    </v-container>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        numero1: 0,
        numero2: 0,
        resultado: 0
      };
    },
    methods: {
      somar() {
        // Converte os valores para números e calcula a soma
        const valor1 = parseFloat(this.numero1);
        const valor2 = parseFloat(this.numero2);
        if (isNaN(valor1) || isNaN(valor2)) {
            this.resultado = 0;
        } else {
            this.resultado = valor1 + valor2;
        }
      }
    }
  };
  </script>