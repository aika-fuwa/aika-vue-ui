import AikaButton from './button/index';

const components = [
    AikaButton
]

const install = function(Vue, opts = {}) {
    // components.forEach(component => {
    //     Vue.component(component.name, component);
    // });

    Vue.component(AikaButton.name, AikaButton);
}

export default {
    version: '0.0.1',
    install,
    AikaButton
}
