import Button from './button/index';

const components = [
    Button
]

const install = function(Vue, opts = {}) {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
}

export default {
    version: '0.0.1',
    install,
    Button
}
