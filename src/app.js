// Import Vue
import Vue from 'vue';

// Import F7
import Framework7 from 'framework7/framework7.esm.bundle.js';

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';

// Import F7 Styles
import 'framework7/css/framework7.bundle.css';

// Import Icons and App Custom Styles
import IconsStyles from './css/icons.css';
import AppStyles from './css/app.css';

import AppLess from './less/app.less';
// Import App Component
import App from './app.vue';
import store from './store';
import {i18n} from './plugins/i18n'


// Init F7 Vue Plugin
Framework7.use(Framework7Vue)

// Init App
new Vue({
  i18n,
  el: '#myApp',
  template: '<app/>',
  store:store,          //вытаскивает значеня и index и передаёт их во vue
  // Register App Component
  components: {
    app: App
  }
});
