<template>
    <i :class="`aika-icon aika-icon-${name}`"></i>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator';

    @Component
    export default class AikaIcon extends Vue {
        @Prop(String) readonly name?: String;
    }
</script>

<style scoped lang="scss">
    @import "./index.scss";
</style>
