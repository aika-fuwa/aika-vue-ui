<template>
    <button :class="'aika-button ' + type" @click="onClick">
        <slot></slot>
    </button>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator'

    enum ButtonType { // 能用枚举吗？
        primary = 'primary',
        success = 'success',
        warning = 'warning',
    }

    @Component
    export default class AikaButton extends Vue {
        @Prop(String) readonly type: string | undefined

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
