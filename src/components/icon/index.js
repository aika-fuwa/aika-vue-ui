import Icon from './src/index.vue';

/* istanbul ignore next */
Icon.install = function(Vue) {
    Vue.component(Icon.name, Icon);
};

export default Icon;
