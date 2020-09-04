<template>
    <button class="aika-button"
            @click="handleClick"
            :disabled="disabled || loading"
            :autofocus="autofocus"
            :type="nativeType"
            :class="[
                type ? 'aika-button--' + type : '',
                size ? 'aika-button--' + size : '',
                {
                    'is-disabled': disabled,
                    'is-loading': loading,
                    'is-round': round,
                }
            ]"
    >
        <span v-if="$slots.default"><slot></slot></span>
    </button>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator';

    @Component
    export default class AikaButton extends Vue {
        @Prop({
            type: String,
            default: 'default'
        }) readonly type?: String;
        @Prop(String) readonly size?: String;
        @Prop({
            type: String,
            default: 'button'
        }) readonly nativeType?: String;

        @Prop(Boolean) readonly loading?: Boolean;
        @Prop(Boolean) readonly disabled?: Boolean;
        @Prop(Boolean) readonly autofocus?: Boolean;
        @Prop(Boolean) readonly round?: Boolean;

        handleClick (evt: MouseEvent): void {
            this.$emit('click', evt);
        }
    }

</script>

<style scoped lang="scss">
@import './index.scss';
</style>
