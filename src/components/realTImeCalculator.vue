<template>
    <div>
        <v-container >
        <h1>Criando funções para mudar em tempo real</h1>
        <v-card class="mt-6" title="Calculadora em tempo real" variant="tonal" width="800">
          <v-row class="ml-1">
            <v-col cols="2">
              <v-text-field v-model="firstNumber" v-on:keypress="blockLetters($event)"  label="First Number" @input="calculator()"/>
            </v-col>
            <v-col cols="2">
              <v-select v-model="selectedOperator" :items="operators" />
            </v-col>
            <v-col cols="2">
              <v-text-field v-model="secondNumber" label="Second Number" @input="calculator()"/>
            </v-col>
            <v-col align-self="center" cols="1">
              <p>=</p>
            </v-col>
            <v-col align-self="center">
              <h3>
                {{ result }}
              </h3>
            </v-col>
          </v-row>
        </v-card>
    </v-container>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        firstNumber: 0,
        secondNumber: 0,
        result: 0,
        selectedOperator: '+',
        operators: ['+', '-', '÷', 'x'],
      };
    },
    methods: {
      blockLetters(field) {
      var letters = String.fromCharCode(field.keyCode);
      if (/[A-Za-z]/.test(letters)) {
        field.preventDefault();
      } else {
        return true
      }
    },
      
      calculator() {
      switch (this.selectedOperator) {
      case '+':
        this.sum();
        break;
      case '-':
        this.subtraction();
        break;
      case '÷':
        this.division();
        break;
      case 'x':
        this.multiplication();
        break;
      default:
        console.error('Operador inválido');
        break;
      }
    },

      sum() {
        // Converte os valores para números e calcula a soma
        const firstValue = parseFloat(this.firstNumber);
        const secondValue = parseFloat(this.secondNumber);
        if (isNaN(firstValue) || isNaN(secondValue)) {
            this.result = 0;
        } else {
            this.result = firstValue + secondValue;
            return this.result.toFixed(2);
        }
      },

      subtraction(){
        const firstValue = parseFloat(this.firstNumber);
        const secondValue = parseFloat(this.secondNumber);
        if (isNaN(firstValue) || isNaN(secondValue)) {
            this.result = 0;
        } else {
            this.result = firstValue - secondValue;
            return this.result.toFixed(2);
        }
      },

      division(){
        const firstValue = parseFloat(this.firstNumber);
        const secondValue = parseFloat(this.secondNumber);
        if (isNaN(firstValue) || isNaN(secondValue)) {
            this.result = 0;
          } else {
            this.result = firstValue / secondValue;
            return this.result.toFixed(2);
        }
      },

      multiplication(){
        const firstValue = parseFloat(this.firstNumber);
        const secondValue = parseFloat(this.secondNumber);
        if (isNaN(firstValue) || isNaN(secondValue)) {
            this.result = 0;
        } else {
            this.result = firstValue * secondValue;
            return this.result.toFixed(2);
        }
      },
    }
  };
  </script>