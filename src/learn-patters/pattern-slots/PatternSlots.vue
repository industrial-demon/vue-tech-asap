<script setup lang="ts">
import { RouterView } from 'vue-router';
import DropdownDetails from './DropdownDetails.vue'
</script>


<template>
    <DropdownDetails>

        <template v-slot:title="ctx">
            <div class="dropdown-header" v-on:click="ctx.toggle">
                {{ ctx.open ? '+' : '-' }} My Dropdown
            </div>
        </template>
 
        <template v-slot:default="ctx">
            <div class="content">
                ContentR {{ ctx.open }}
            </div>
        </template>


    </DropdownDetails>
</template>

<style scoped>
.dropdown-header {
    background-color: cadetblue;
    font-weight: 600px;
    display: inline-flex;
}
</style>