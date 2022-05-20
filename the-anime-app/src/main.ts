import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueApollo from 'vue-apollo';
import { apolloClient } from './ApolloClient';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueApollo);

Vue.config.productionTip = false;

const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
})

new Vue({
  router,
  apolloProvider,
  render: (h) => h(App),
}).$mount("#app");
