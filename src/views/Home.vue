<template>
    <div class="main-container">
        <Banner />
        <MimoForm />
    </div>
</template>

<script>
import Banner from '../components/Banner.vue'
import MimoForm from '../components/MimoForm.vue'

export default {
    components: {
        Banner,
        MimoForm,
    }
}
</script>