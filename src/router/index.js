import Vue from 'vue'
import VueRouter from 'vue-router';
import Player from '@/views/Player.vue'
import Favorite from '@/views/Favorite.vue'
import Home from '@/views/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/player',
        name: 'Player',
        component: Player,
    },
    {
        path: '/favorite',
        name: 'Favorite',
        component: Favorite,
    },

]

const router = new VueRouter({
    routes,
});


export default router