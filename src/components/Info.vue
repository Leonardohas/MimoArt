<template>
    <div>
        <v-col class="pl-6">
            <p v-if="isWorking">Estou trabalhando no momento</p>
            <p v-else>Estou caçando um novo estágio</p>
            <p>Utilizo as seguintes linguagens de programação para front e back end</p>
            <v-row>
                <!-- <v-col>
                    <v-list>
                        <v-list-item v-for="(backEndItems, index) in backEndSimulation" :key="index"
                        :title="backEndItems">                    
                        </v-list-item>
                    </v-list>
                </v-col> -->
                <v-col class="ml-6">
                    <ul>
                        <li v-for="(backEndItems, index) in backEndSimulation" :key="index">{{ index + 1 }} - {{ backEndItems }}</li>
                    </ul>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="ml-6">
                    <ul>
                        <li v-for="objects in objectsSimulation" :key="objects.id">{{ objects.language }}</li>
                    </ul>
                </v-col>
            </v-row>
            <div>
                <v-btn :color="mimoPrimaryColor" class="text-white" @click="displayEmail">{{ buttomText }}</v-btn>
            </div>
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
            showEmail: false,
            email: `leonardohas83@gmail.com`,
            link: ``,
            mimoPrimaryColor: "#cb8db6",
            buttomText: `Mostrar E-mail`,
            backEndSimulation: [
                "JavaScript",
                "Node",
                "Python",
                "PHP"
            ],
            objectsSimulation: [
                {id: 1, language: "HTML"},
                {id: 2, language: "CSS"},
                {id: 3, language: "Vue"},
                {id: 4, language: "VueX"},
            ],
        }
    },

    methods: {
        displayEmail(){
            this.showEmail = !this.showEmail;
            if (!this.showEmail) {
                this.buttomText = "Mostrar E-mail"
            } else {
                this.buttomText = "Esconder E-mail"
            }
        },
    },
}
</script>