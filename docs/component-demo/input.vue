<template>
    <div class="container">
        <div class="row">
            <h4>事件</h4>
            <aika-input v-model="value"
                        @input="handleInput"
                        @change="handleChange"
                        clearable>
            </aika-input>
        </div>
        <div class="row">
            <h4>禁用</h4>
            <aika-input v-model="value"
                        disabled>
            </aika-input>
        </div>
        <div class="row">
            <h4>文本框</h4>
            <aika-input v-model="value"
                        type="textarea"
                        :rows="5">
            </aika-input>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'button-base',
        data() {
            return {
                value: ''
            }
        },
        methods: {
            handleInput(v) {
                console.log('input', v);
            },
            handleChange(v) {
                console.log('change', v);
            }
        }
    }
</script>

<style>

</style>

<style scoped>
    .container {
        border: 1px solid #f3f3f3;
        border-radius: 3px;
        padding: 20px;
    }
    .row {
        margin-bottom: 10px;
    }
</style>
