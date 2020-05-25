import Vue from 'vue';
import App from './App.vue';
import AikaUI from './components/index';

Vue.use(AikaUI);

Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount('#app')
