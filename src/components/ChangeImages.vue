<template>
    <div>
        <v-btn @click="$emit('changeImage')">Change img</v-btn>
    </div>
</template>

<script>
export default {
    name: "ChangeImages",
    emits: ["changeImage"],
}
</script>