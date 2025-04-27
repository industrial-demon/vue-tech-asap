<script setup lang="ts">
import { computed, ref, useSlots } from 'vue'

const open = ref(false);
const slots = useSlots();
function toggle() {
  open.value = !open.value
}


const extraProps = computed(()=> slots.title ? {}:{
  role: 'button',
  onClick: toggle
} )
</script>

<template>
  <section class="dropdown-details">
    <div class="title" v-bind="extraProps">
      <span class="icon" v-if="open">
        &#10148;
      </span>
      <span class="icon" v-else>
        &#x21e7;
      </span>
      <slot name="title" v-bind:open="open" v-bind:toggle> </slot>
    </div>
    <div class="content" v-bind:class="open ? 'content-expanded' : ''">

      <slot v-bind:open="open"></slot>
    </div>
  </section>
</template>

<style scoped>
.dropdown-details {
  border: 1px solid gray;
  border-radius: 2px;
  max-width: 250px;
}

.title {
  background-color: rgb(218, 213, 213);
  cursor: pointer;
}

.icon {
  width: 24px;
  height: 24px;
  padding: 2px;
  overflow: hidden;
  display: inline-flex;
}

.content {
  padding: 0px;
  height: 0px;
  width: 0px;
  transition: height 0.25s ease;
  overflow: hidden;
}

.content-expanded {
  padding: 10px;
  width: auto;
  height: 300px;
}
</style>
