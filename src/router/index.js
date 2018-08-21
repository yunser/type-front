import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['@/views/Home'], resolve)
const WubiTable = resolve => require(['@/views/WubiTable'], resolve)
const Type = resolve => require(['@/views/Type'], resolve)
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
