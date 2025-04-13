<script lang="ts" setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import IconBase from '~/shared/components/IconBase.vue'
import IconConnections from '~/shared/components/icons/IconConnections.vue'


const navItems = [
    { view: '1', href: '/dashboard/about', render: () => {}, icon: 'null'  },
    { view: '2', icon: '/1', href: '/hhh' },
]
 ref(navItems)

</script>

<template>
    <nav>
        <ul class="nav-list">
            <li v-for="navitem in navItems">
                <RouterLink v-bind:to="navitem.href" active-class="nav-item-active">
                    {{ navitem.view }}
                    <IconBase icon-name="connections">
                        <IconConnections></IconConnections>
                    </IconBase>
                </RouterLink>
              
            </li>
        </ul>
    </nav>
</template>

<style scoped>
nav {
    height: 100%;
}

.nav-list {
    display: flex;
    list-style: none;
}

.nav-item-active {
  background-color: red;
}
</style>
