<template>
    <div class="container">
        <div class="row">
            <aika-button type="primary">主要按钮</aika-button>
            <aika-button type="success">成功按钮</aika-button>
            <aika-button type="danger">危险按钮</aika-button>
            <aika-button type="warning">警告按钮</aika-button>
            <aika-button type="info">信息按钮</aika-button>
            <aika-button type="text">文字按钮</aika-button>
        </div>

        <div class="row">
            <aika-button type="primary" disabled>主要按钮</aika-button>
            <aika-button type="success" disabled>成功按钮</aika-button>
            <aika-button type="danger" disabled>危险按钮</aika-button>
            <aika-button type="warning" disabled>警告按钮</aika-button>
            <aika-button type="info" disabled>信息按钮</aika-button>
        </div>

        <div class="row">
            <aika-button type="primary" round>主要按钮</aika-button>
            <aika-button type="success" round>成功按钮</aika-button>
            <aika-button type="danger" round>危险按钮</aika-button>
            <aika-button type="warning" round>警告按钮</aika-button>
            <aika-button type="info" round>信息按钮</aika-button>
        </div>

        <div class="row">
            <aika-button size="medium">medium</aika-button>
            <aika-button size="small">small</aika-button>
            <aika-button size="mini">mini</aika-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'button-base',
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
