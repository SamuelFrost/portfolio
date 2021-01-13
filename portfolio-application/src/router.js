import {Router} from '@vaadin/router';

// const outlet = document.querySelector('portfolio-application').shadowRoot.querySelector('.app-main');
export const router = new Router();
router.setRoutes([
  {
    path: '/',
    component: 'view-welcome-index',
    action: async () => { await import ('/src/views/welcome/index.js');}
  },
  {
    path: '(.*)',
    component: 'view-standard-error_404',
    action: async () => { await import ('/src/views/standard/error_404.js');}
  },
]);
export const redirect_to = '';