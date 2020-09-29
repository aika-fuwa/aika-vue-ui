<template>
    <div :class="[
        type === 'textarea' ? 'aika-textarea' : 'aika-input',
        {
            'is-disabled': disabled,
        }
    ]">
        <template v-if="type !== 'textarea'">
            <input class="aika-input__inner"
                   :disabled="disabled"
                   :name="name"
                   :placeholder="placeholder"
                   :type="type"
                   :value="value"
                   v-bind="$attrs"
                   @blur="handleBlur"
                   @change="handleChange"
                   @focus="handleFocus"
                   @input="handleInput"
            />
            <span v-if="clearable && value" class="clear-button" @click="handleClear">×</span>
        </template>

        <textarea v-else
                  class="aika-textarea__inner"
                  :disabled="disabled"
                  :name="name"
                  :placeholder="placeholder"
                  :value="value"
                  v-bind="$attrs"
                  @blur="handleBlur"
                  @change="handleChange"
                  @focus="handleFocus"
                  @input="handleInput">
        </textarea>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator';

    @Component
    export default class AikaInput extends Vue {
        @Prop({
            type: String,
            default: 'text'
        }) readonly type?: String;
        @Prop({
            type: String,
            default: '请输入内容'
        }) readonly placeholder?: String;
        @Prop(String) readonly name?: String;
        @Prop({
            type: String,
            default: ''
        }) readonly value?: String;
        @Prop(Boolean) readonly disabled?: Boolean;
        @Prop(Boolean) readonly clearable?: Boolean;

        handleInput(event) {
            this.$emit('input', event.target.value);
        }
        handleChange(event) {
            this.$emit('change', event.target.value);
        }
        handleBlur(event) {
            this.$emit('blur', event);
        }
        handleFocus(event) {
            this.$emit('focus', event);
        }
        handleClear() {
            this.$emit('input', '');
        }

    }
</script>

<style scoped lang="scss">
    @import "./index.scss";
</style>
