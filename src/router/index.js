import Vue from 'vue';
import VueRouter from 'vue-router';
import loginPage from '@/views/Login/index.vue';
import homePage from '@/views/Home/index.vue';
import erro404 from '@/views/Erro404/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'login',
    component: loginPage,
  },
  {
    path: '/home',
    name: 'home',
    component: homePage,
  },
  {
    path: '/*',
    name: 'Erro404',
    component: erro404,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
