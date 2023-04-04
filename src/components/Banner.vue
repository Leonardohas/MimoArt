<template>
    <div id="main-banner">
        <v-row class="banner-row" justify="center">
            <v-col align-self="center">
                <h1 class="text-white">Make your wish</h1>
            </v-col>
            <v-col align-self="center">
                <v-img src="/img/mimoLogo.png" height="350px"></v-img>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "Banner",
}
</script>

<style scoped>
.banner-row {
    background-color: black;
}

</style>