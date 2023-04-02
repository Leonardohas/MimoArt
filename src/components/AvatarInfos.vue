<template>
    <div>
        <v-container>
            <v-row justify="center">
                <v-btn 
                class="no-uppercase text-white" 
                :color="displayButtom.color"
                @click="showAvatarCharactersInformations"
                >
                {{ displayButtom.text }}
                </v-btn>            
            </v-row>
                <v-row v-if="displayButtom.value" justify="center" class="pt-6">
                    <Card v-for="characters in avatarCharacters" :key="characters.id"
                        :charactersName="characters.name"
                        :skill="characters.Affinity"
                        :description="characters.description"
                        :link="characters.link"
                        :textColor="textColor"
                    />
                </v-row>
        </v-container>
    </div>
</template>

<script>
import Card from './Card.vue';
export default {
    name: "AvatarInfos",
    components: {
        Card
    },
    data(){
        return {
            cardTitle: "",
            cardSubtitle: "",
            displayButtom: {
                value: false,
                text: "Show Avatar Characters",
                color: "#cb8db6",
            },
            textColor: "text-red",

            avatarCharacters: [
                {id: 1, name: "Aang", Affinity: "Air", description: "The last air bander", link: "https://www.charactour.com/hub/characters/view/Aang.Avatar-The-Last-Airbender"},
                {id: 2, name: "Zuko", Affinity: "Fire", description: "The prince of the fire nation", link: "https://www.charactour.com/hub/characters/view/Prince-Zuko.Avatar-The-Last-Airbender"},
                {id: 3, name: "Katara", Affinity: "Water", description: "Soka`s sister and water bander master", link: "https://www.charactour.com/hub/characters/view/Katara.Avatar-The-Last-Airbender"},
                {id: 4, name: "Soka", Affinity: "boomerang", description: "Katara old brothers and Hakota son", link: "https://www.charactour.com/hub/characters/view/Sokka.Avatar-The-Last-Airbender#:~:text=funny%2C%20intelligent%2C%20and%20immature.,and%20any%20other%20supernatural%20stuff."},
                {id: 5, name: "Uncle", Affinity: "Fire", description: "Zuko uncle and fire lord brother", link: "https://www.charactour.com/hub/characters/view/Iroh.Avatar-The-Last-Airbender"},
                {id: 5, name: "Korra", Affinity: "All four elements", description: "Worse avatar ever ", link: "https://www.charactour.com/hub/characters/view/Korra-The.Legend.of.Korra"},
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