import { createRouter, createWebHistory } from 'vue-router'

import HelloWorld from '../shared/components/HelloWorld.vue'
import Dashboard from '../feature-dashboard/Dashboard.vue'
import App from '~/App.vue'

export const routing = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: App },
        
        { path: '/dashboard', component: Dashboard,
    
            children: [
                {path: 'about',component: HelloWorld, props: {msg: 'HI'}}
            ]
    },
    ],
})
