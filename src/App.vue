<template>
    <div class="app">
        Button
        <AikaButton type="success">success</AikaButton>
        <AikaButton type="primary">primary</AikaButton>
        <AikaButton type="danger">danger</AikaButton>
    </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import Hello from './Hello.vue';
// import AikaButton from '../components/button/index.js';

export default {
    components: {
        Hello,
        // AikaButton
    }
}
</script>

<style>

</style>
