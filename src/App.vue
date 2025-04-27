<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterView, useRouter } from 'vue-router'

const router = useRouter()

const login = ref(false)

</script>

<template>
    <div>
    HELLObout
    <RouterLink to="/learn-patterns"> Learn Patterns</RouterLink>
    <RouterLink to="/dashboard">Dashboard</RouterLink>


    </div>
    <RouterView></RouterView>
</template>

<style scoped></style>
