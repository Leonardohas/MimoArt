<template>
    <div class="align-center">
      <v-row justify="center">
        <v-card class="mt-6" variant="tonal" min-width="800" min-height="200">
          <v-container >
            <v-card-title>
              <h3>Criando uma calculadora em tempo real:</h3>
            </v-card-title>
            <v-card-subtitle>
              <p>{{ dateAndTimeFormated() }}</p>
            </v-card-subtitle>
            <v-row class="ml-1 mt-6">
              <v-col cols="2">
                <v-text-field v-model="firstNumber" v-on:keypress="blockLetters($event)" @input="calculator()" variant="solo"/>
              </v-col>
              <v-col cols="2">
                <v-select v-model="selectedOperator" :items="operators" variant="solo"/>
              </v-col>
              <v-col cols="2">
                <v-text-field v-model="secondNumber" @input="calculator()" variant="solo"/>
              </v-col>
              <v-col cols="1" class="py-6">
                <h2>=</h2>
              </v-col>
              <v-col align-self="center" cols="2">
                <v-text-field v-model="result" class="custom-v-text-field" variant="solo" readonly />
              </v-col>
            </v-row>
            <v-card-actions>
              <v-btn
                variant="text"
                color="teal-accent-4"
                size="large"
                @click="clearButtom()"
              >
                clear
              </v-btn>
            </v-card-actions>
          </v-container>
        </v-card>
      </v-row>
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
        operators: ['+', '-', 'x', '÷'],

      };
    },

    watch: {
    selectedOperator() {
      this.calculator(); // Chama calculator quando selectedOperator muda
    },
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

      subtraction() {
        const firstValue = parseFloat(this.firstNumber);
        const secondValue = parseFloat(this.secondNumber);
        if (isNaN(firstValue) || isNaN(secondValue)) {
            this.result = 0;
        } else {
            this.result = firstValue - secondValue;
            return this.result.toFixed(2);
        }
      },

      division() {
        const firstValue = parseFloat(this.firstNumber);
        const secondValue = parseFloat(this.secondNumber);
        if (isNaN(firstValue) || isNaN(secondValue)) {
          this.result = 'Aguardando valores';
        } else if (secondValue == 0) {
          this.result = 'Error: divisão por zero';
        } else {
          this.result = firstValue / secondValue;
          return this.result.toFixed(2);
        }
      },

      multiplication() {
        const firstValue = parseFloat(this.firstNumber);
        const secondValue = parseFloat(this.secondNumber);
        if (isNaN(firstValue) || isNaN(secondValue)) {
            this.result = 0;
        } else {
            this.result = firstValue * secondValue;
            return this.result.toFixed(2);
        }
      },

      dateAndTimeFormated() {
        var date = new Date();
        var day = String(date.getDate()).padStart(2, '0');
        var month = String(date.getMonth() + 1).padStart(2, '0');
        var year = date.getFullYear();
        var hours = String(date.getHours()).padStart(2, '0');
        var minutes = String(date.getMinutes()).padStart(2, '0');
        return `Data: ${day}/${month}/${year}, Horas: ${hours}:${minutes}`;
      },

      clearButtom() {
        this.firstNumber = 0;
        this.secondNumber = 0;
        this.result = 0;
      },
    }
  };
  </script>

<style scoped>
.align-center {
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  height: 100vh; /* 100% da altura da viewport */
}
</style>