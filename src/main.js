import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import Contact from "./components/Contact.vue";
import './registerServiceWorker'
Vue.config.productionTip = false;
Vue.use(VueRouter);
const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];
const router = new VueRouter({ routes });
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
