<template>
    <div id="navBar">
        <router-link to="/">
            <img src="" id="logo">
        </router-link>
        <router-link to="/">Home</router-link>
        <router-link to="/Pedidos" class="pl-2">Pedidos</router-link>
    </div>
</template>

<script>
export default {
    name: "NavBar",
    data(){
        return {
            
        }
    },
}
</script>