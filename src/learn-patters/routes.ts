import type { RouteRecordRaw } from 'vue-router'
import LearnPatters from './LearnPatterns.vue'
import PatternSlots from './pattern-slots/PatternSlots.vue'

export const learnPatternsRouting: RouteRecordRaw = {
    path: '/learn-patterns',
    component: LearnPatters,
    children: [{ path: 'slots', component: PatternSlots }],
}
