<template>
    <div>
        <h1>Meu nome é: {{ name }}</h1>
    </div>
</template>

<script>
export default {
    name: "LifeCycle",
    data() {
        return {
            name: "Ainda não sei",
        }
    },

    methods: {
        lifeCycle(){
            console.log("Teste");
        },
    },

    created() { // apos a criação do componente eu vou fazer alguma coisa!!!!
        setTimeout(() => {
            this.name = "Leonardo Henrique"
        }, 1000)
        this.lifeCycle();
    },

    mounted() {
        setTimeout(() => {
            this.name = "Vanecia"
        }, 3000)
    },
}
</script>