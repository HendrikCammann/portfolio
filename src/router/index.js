import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home/Main';
import Work from '@/components/work/Main';
import About from '@/components/about/Main';
import Detail from '@/components/detail/Main';
import Filter from '@/components/filter/Main';
import Impressum from '@/components/impressum/Main';


Vue.use(Router);

export default new Router({
  // mode: 'history',
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
      path: '/impressum',
      name: 'impressum',
      component: Impressum,
    },
    {
      path: '/project/:itemName',
      name: 'detail',
      component: Detail,
    },
    {
      path: '/filter',
      name: 'filter',
      component: Filter,
    }
  ],
});
