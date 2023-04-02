<template>
    <div>
        <v-container>
            <v-row justify="center">
                <v-btn 
                class="no-uppercase text-yellow" 
                :color="displayButtom.color"
                @click="showAvatarCharactersInformations"
                >
                {{ displayButtom.text }}
                </v-btn>            
            </v-row>
                <v-row v-if="displayButtom.value" justify="center" class="pt-6">
                    <v-card v-for="characters in avatarCharacters" :key="characters.id" class="mx-4 my-4 py-4" theme="dark" max-width="300">
                        <v-card-title class="text-blue">
                            <h3>
                                <span>Character name: </span>
                                <span class="text-yellow">{{ characters.name }}</span>
                            </h3>
                        </v-card-title>
                        <v-card-subtitle class="text-blue">
                            <h3>
                                <span>Your Skill is: </span>
                                <span class="text-yellow">{{ characters.elementalAffinity }}</span>
                            </h3>
                        </v-card-subtitle>
                        <v-card-text>
                            <h3>{{ characters.description }}</h3>
                        </v-card-text>
                    </v-card>
                </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "AvatarInfos",
    data(){
        return {
            cardTitle: "",
            cardSubtitle: "",
            displayButtom: {
                value: true,
                text: "Show Avatar Characters",
                color: "red",
            },
            avatarCharacters: [
                {id: 1, name: "Aang", elementalAffinity: "Air", description: "The last air bander"},
                {id: 2, name: "Zuko", elementalAffinity: "Fire", description: "The prince of the fire nation"},
                {id: 3, name: "Katara", elementalAffinity: "Water", description: "Soka`s sister and water bander master"},
                {id: 4, name: "Soka", elementalAffinity: "boomerang", description: "Katara old brothers and Hakota son"},
                {id: 5, name: "Uncle", elementalAffinity: "Fire", description: "Zuko uncle and fire lord brother"},
            ],
        }
    },

    methods: {      
        showAvatarCharactersInformations(){
            this.displayButtom.value  = !this.displayButtom.value;
            if (this.displayButtom.value) {
                this.displayButtom.text = "Hide Avatar Characters"
            } else {
                this.displayButtom.text = "Show Avatar Characters"
            }
        },
    }
}
</script>

<style scoped>
.no-uppercase {
     text-transform: unset !important;
}
</style>