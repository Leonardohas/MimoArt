<template>
    <div>
        <v-card class="mx-4 my-4 py-4" variant="tonal" color="#cb8db6" min-width="350">
            <v-card-title>
                <h3>
                    <span>Character name: </span>
                    <span :class="textColor"> {{ charactersName }} </span>
                </h3>
            </v-card-title>
            <v-card-subtitle>
                <h3>
                    <span>Your Skill is: </span>
                    <span > {{ skill }} </span>
                </h3>
            </v-card-subtitle>
            <v-card-text>
                <h3> {{ description }} </h3>
            </v-card-text>
            <v-card-actions>
                <v-btn :href="link" target="_blank" color="success">Learn more</v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: {
        charactersName: String,
        skill: String,
        description: String,
        link: String,
        textColor: String,
    }
}
</script>