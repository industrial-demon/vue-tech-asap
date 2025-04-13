<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterView, useRouter } from 'vue-router'

const router = useRouter()

const login = ref(false)

setTimeout(() => (login.value = true), 6000)
watch(login, () => {
    if (login.value) {
        router.push('/dashboard')
    }
})
</script>

<template>
    HELLObout
    {{ login }}
    <RouterView></RouterView>
</template>

<style scoped></style>
