<script setup lang="ts">


import { ref } from 'vue';
import Header from './header/Header.vue';
import Navigation from './navigation/Navigation.vue'

const show = ref(false)
const toggle =()=> {
  if(show.value) {
    show.value = false
  }else {
    show.value = true
  }
  
}
</script>

<template>
<Header>

  <template v-slot:navigation>
    <Navigation></Navigation> 
  </template>
</Header>  


<div>Dashboard</div>


<button @click.once="toggle()"> Test</button>

<h1 v-show="show">Hidden</h1>


<RouterView></RouterView>
</template>

<style scoped></style>