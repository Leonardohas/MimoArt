<template>
    <div class="feedBackMessage">
        <p>{{ message }}</p>
    </div>
</template>

<script>
export default {
    name: "feedBackMessage",
    props: {
        message: String,
    }
}
</script>

<style scoped>
    .feedBackMessage {
        color: rgb(3, 133, 25);
        background-color: rgb(170, 248, 170);
        border: 2px solid rgb(30, 177, 108);
        border-radius: 5px;
        padding: 10px;
        max-width: 400px;
        margin: 30px auto
    }
</style>