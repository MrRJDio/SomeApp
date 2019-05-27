import HomePage from './pages/home.vue';
import AboutPage from './pages/about.vue';
import LoginScreen from './pages/login.vue';
import PanelLeftPage from './pages/panel-left.vue';
import TableTabs from './pages/table-tabs.vue';



export default [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/panel-left/',
    component: PanelLeftPage,
  },
  {
      path:'/login/',
      component: LoginScreen,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/table-tabs/',
    component: TableTabs,
  },
];
