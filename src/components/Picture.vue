<template>
    <div>
        <img :src="mimoLogo" :alt="description">
    </div>
</template>

<script>
export default {
    name: "Picture",
    data(){
        return {
            mimoLogo: "/img/mimiArtLogoSemFundo.png",
            description: "Mimo logo"
        }
    }
}
</script>