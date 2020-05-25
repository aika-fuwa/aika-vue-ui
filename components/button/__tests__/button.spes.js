import 'jest';
import { mount } from '@vue/test-utils'
import Button from '../index';

describe('Button', () => {
    // 挂载组件 得到组件包裹器
    const wrapper = mount(Button, {
        propsData: {
            type: 'primary'
        }
    })

    it('测试渲染出正确的HTML', () => {
        expect(wrapper.html()).toBe('<button class="aika-button primary"></button>')
    })
})
