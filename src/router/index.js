import VueRouter from 'vue-router';
import store from '@/store';

import LogIn from '../components/LogIn';
import SignUp from '../components/SignUp';
import Home from '../components/Home';
import QuestionPage from '../components/QuestionPage';

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/question', name: 'question', component: QuestionPage },
  { path: '/log-in', name: 'log-in', component: LogIn },
  { path: '/sign-up', name: 'sign-up', component: SignUp },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = store.getters['auth/isLoggedIn'];
  if (to.name != 'log-in' && !isLoggedIn) {
    next({ name: 'log-in' });
  } else if (to.name == 'log-in' && isLoggedIn) {
    next({ name: 'home' });
  } else {
    next();
  }
});

export default router;
