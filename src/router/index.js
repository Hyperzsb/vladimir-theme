import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter);

const Overview = () => import('@/components/Overview');
const Demo = () => import('@/components/Demo');
const About = () => import('@/components/About');

let routes = [{
    path: '/',
    redirect: '/overview'
}, {
    path: '/overview',
    component: Overview
}]

if (store.state.ini.header.demoPage)
    routes.push({
        path: '/demo',
        component: Demo
    })

if (store.state.ini.header.aboutPage)
    routes.push({
        path: '/about',
        component: About
    })

const index = new VueRouter({
    routes
});
export default index;
