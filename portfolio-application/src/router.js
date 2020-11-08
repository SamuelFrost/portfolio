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
    component: 'view-welcome-index-copy',
    action: async () => { await import ('/src/views/welcome/index_copy.js');}
  },
]);
