import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['@/views/Home'], resolve)
const WubiTable = resolve => require(['@/views/WubiTable'], resolve)
const ShuangpinTable = resolve => require(['@/views/ShuangpinTable'], resolve)
const Hand = resolve => require(['@/views/Hand'], resolve)
const Type = resolve => require(['@/views/Type'], resolve)
const Keyboard = resolve => require(['@/views/Keyboard'], resolve)
const KeyboardTyping = resolve => require(['@/views/KeyboardTyping'], resolve)
const TypeHelp = resolve => require(['@/views/TypeHelp'], resolve)
const About = resolve => require(['@/views/About'], resolve)
const Error404 = resolve => require(['@/views/error/Error404'], resolve)

Vue.use(Router)

let routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/wubi/table',
        component: WubiTable
    },
    {
        path: '/shuangpin/table',
        component: ShuangpinTable
    },
    {
        path: '/hand',
        component: Hand
    },
    {
        path: '/type',
        component: Type
    },
    {
        path: '/type/help',
        component: TypeHelp
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/keyboard',
        component: Keyboard
    },
    {
        path: '/keyboard_typing',
        component: KeyboardTyping
    },
    {
        path: '*',
        component: Error404
    }
]

let router = new Router({
    mode: 'history',
    routes: routes,
    scrollBehavior (to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }
})

export default router
