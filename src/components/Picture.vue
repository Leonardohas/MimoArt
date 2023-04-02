<template>
    <div>
        <img :src="mimoLogo" :alt="description">
        <ChangeImages @change-image="changeImages" />
    </div>
</template>

<script>
import ChangeImages from './ChangeImages.vue';
export default {
    name: "Picture",
    components: {
        ChangeImages
    },

    data(){
        return {
            mimoLogo: "/img/mimiArtLogoSemFundo.png",
            gogetassj4: "/img/gogetaSsj4.png",
            description: "Mimo logo"
        }
    }, 

    methods: {
        changeImages(){
            this.mimoLogo = this.gogetassj4;
        }
    },
}
</script>