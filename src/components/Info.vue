<template>
    <div>
        <v-col class="pl-6">
            <p v-if="isWorking">Estou trabalhando no momento</p>
            <p v-else>Estou caçando um novo estágio</p>
            <p>Utilizo as seguintes linguagens de programação</p>
            <ul>
                <li>JavaScript</li>
                <li>Node</li>
                <li>Python</li>
            </ul>
            <p v-show="showEmail" class="pt-3">Mande uma mensagem para: {{ email }}</p>
            <p>Para acessar meu curriculum <a v-bind:href="link">clique aqui</a></p> <!-- Utilizar v-bind é o mesmo que utilizar : -->
            <Picture />

        </v-col>
    </div>
</template>

<script>
import Picture from './Picture.vue'
export default {
    name: "Info",
    components: {
        Picture,
    },

    data(){
        return {
            isWorking: true,
            showEmail: true,
            email: `leonardohas83@gmail.com`,
            link: ``
        }
    }
}
</script>