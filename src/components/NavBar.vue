<template>
    <div id="navBar">
        <v-toolbar color="#cb8db6" class="text-white">
            <v-row>
                <v-col>
                    <router-link to="/">
                        <img :src="logo" :alt="alt" id="logo" class="ml-6">
                    </router-link>
                </v-col>
                <v-col align="end" align-self="center" class="mr-6">
                    <router-link to="/">Home</router-link>
                    <router-link to="/Pedidos" class="pl-2">Pedidos</router-link>                    
                </v-col>
            </v-row>
        </v-toolbar>
    </div>
</template>

<script>
export default {
    name: "NavBar",
    props: {
        logo: String,
        alt: String,
    },
    data(){
        return {
            
        }
    },
}
</script>

<style scoped>
#logo {
    width: 40px;
    height: 40px;
}

#navBar a {
    color: white;
    text-decoration: none;
}
</style>