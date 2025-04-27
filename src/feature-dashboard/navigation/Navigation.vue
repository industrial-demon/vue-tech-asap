<script lang="ts" setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import IconBase from '~/shared/components/IconBase.vue'
import IconConnections from '~/shared/components/icons/IconConnections.vue'


const navItems = [
    { view: 'Connections', href: '/dashboard/about', render: () => { }, icon: 'null' },
    { view: 'Monitor', icon: '/1', href: '/dashboard/monitor' },
]
ref(navItems)

</script>

<template>
    <nav>
        <ul class="nav-list">
            <li class="nav-item" v-for="navitem in navItems">
                <RouterLink v-bind:to="navitem.href" class="nav-item-link" active-class="nav-item-link--active">
                    {{ navitem.view }}
                    <IconBase icon-name="connections" width="24" height="24">
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
    flex: 1;
}

.nav-list {
    margin: 0;
    padding: 0;
    display: flex;
    list-style: none;
    height: inherit;
}

.nav-item {}

.nav-item-link {
    all: unset;
    height: 100%;
    display: flex;
    align-items: center;
    background-color: green;
    cursor: pointer;
    background-color: burlywood;
    position: relative;
}

.nav-item-link--active::before {
    content: '';
    width: 100%;
    height: 4px;
    background-color: var(--color-main);
    position: absolute;
    top: 0;
    left: 0;
}
</style>
