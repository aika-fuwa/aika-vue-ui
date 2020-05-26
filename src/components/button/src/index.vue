<template>
    <button :class="'aika-button ' + type" @click="onClick">
        <slot></slot>
    </button>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator'

    // enum ButtonType { // 能用枚举吗？
    //     primary = 'primary',
    //     success = 'success',
    //     warning = 'warning',
    // }

    type ButtonType = 'primary' | 'success' | 'warning'; // 用type比较好 来定义组合类型 或者交叉类型

    @Component
    export default class AikaButton extends Vue {
        @Prop(String) readonly type?: ButtonType

        // 初始数据可以直接声明为实例的 property
        message: string = 'Hello!'

        // 组件方法也可以直接声明为实例的方法
        onClick (): void {
            window.alert(this.message + this.type + '按钮');
        }
    }

</script>

<style scoped lang="less">
@import './index.less';
</style>
