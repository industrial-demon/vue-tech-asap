import { createRouter, createWebHistory } from 'vue-router'

import HelloWorld from '../shared/components/HelloWorld.vue'
import Dashboard from '../feature-dashboard/Dashboard.vue'
import App from '~/App.vue'
import LearnPatters from '~/learn-patters/LearnPatterns.vue'
import { learnPatternsRouting } from '~/learn-patters/routes'
export const routing = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: App },

        {
            path: '/dashboard',
            component: Dashboard,

            children: [
                // { path: 'about', component: HelloWorld, props: { msg: 'HI' } },
                // {
                //     path: 'monitor',
                //     component: HelloWorld,
                //     props: { msg: 'HI' },
                // },
            ],
        },

        learnPatternsRouting,
    ],
})
