import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home/Main';
import Work from '@/components/work/Main';
import About from '@/components/about/Main';
import Detail from '@/components/detail/Main';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Work,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/project/:itemName',
      name: 'detail',
      component: Detail,
    }
  ],
});
