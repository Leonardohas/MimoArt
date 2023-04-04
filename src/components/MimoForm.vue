<template>
    <div>
        <v-form>
            <v-container>
                <v-row justify="center">
                    <h1 class="mt-6">Choose your itens</h1>
                </v-row>
                <v-row justify="center">
                    <v-col cols="7">
                        <span>Type your name:</span>
                        <v-text-field label="Client name" variant="underlined"/>
                        <span>Choose your bread:</span>
                        <v-text-field label="Bread"/>
                        <span>Choose your meat:</span>
                        <v-text-field label="Meat"/>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
    </div>
</template>

<script>
export default {
    name: "MimoForm",
    data(){
        return {

        }
    },
}
</script>