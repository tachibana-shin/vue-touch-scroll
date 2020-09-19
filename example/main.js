import Vue from "vue"
import App from "./App.vue"
import a from "./index.js"

Vue.use(a)

new Vue({
   el: "#app",
   template: "<App/>",
   components: { App }
})