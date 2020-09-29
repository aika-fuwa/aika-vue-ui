import AikaButton from './button/index';
import AikaInput from './input/index';
import AikaIcon from './icon/index';

const components = [
    AikaButton,
    AikaInput,
    AikaIcon
]

const install = function(Vue, opts = {}) {
    // components.forEach(component => {
    //     Vue.component(component.name, component);
    // });

    Vue.component(AikaButton.name, AikaButton);
    Vue.component(AikaInput.name, AikaInput);
    Vue.component(AikaIcon.name, AikaIcon);
}

export default {
    version: '0.0.1',
    install,
    AikaButton,
    AikaInput,
    AikaIcon,
}
