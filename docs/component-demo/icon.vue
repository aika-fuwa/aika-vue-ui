<template>
    <div class="container">
        <div class="row">
            <div class="item"><aika-icon name="add-bold"></aika-icon><span>add-bold</span></div>
            <div class="item"><aika-icon name="minus-bold"></aika-icon><span>minus-bold</span></div>
            <div class="item"><aika-icon name="arrow-left-bold"></aika-icon><span>arrow-left-bold</span></div>
            <div class="item"><aika-icon name="arrow-up-bold"></aika-icon><span>arrow-up-bold</span></div>
            <div class="item"><aika-icon name="arrow-down-bold"></aika-icon><span>arrow-down-bold</span></div>
            <div class="item"><aika-icon name="arrow-right-bold"></aika-icon><span>arrow-right-bold</span></div>
            <div class="item"><aika-icon name="close-bold"></aika-icon><span>close-bold</span></div>
            <div class="item"><aika-icon name="select-bold"></aika-icon><span>select-bold</span></div>
            <div class="item"><aika-icon name="smile"></aika-icon><span>smile</span></div>
            <div class="item"><aika-icon name="meh"></aika-icon><span>meh</span></div>
            <div class="item"><aika-icon name="fabulous"></aika-icon><span>fabulous</span></div>
            <div class="item"><aika-icon name="time"></aika-icon><span>time</span></div>
            <div class="item"><aika-icon name="telephone"></aika-icon><span>telephone</span></div>
            <div class="item"><aika-icon name="setting"></aika-icon><span>setting</span></div>
            <div class="item"><aika-icon name="security"></aika-icon><span>security</span></div>
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

<style scoped lang="scss">
    .container {
        border: 1px solid #f3f3f3;
        border-radius: 3px;
        padding: 20px;
    }
    .row {
        margin-bottom: 10px;
        overflow: hidden;
    }
    .item {
        width: 100px;
        float: left;
        border: 1px solid #d7d7d7;
        text-align: center;
        margin-right: 10px;
        margin-bottom: 10px;
    .aika-icon {
        display: block;
        font-size: 32px;
        color: #606266;
        height: 80px;
        line-height: 80px;
    }
    span {
        display: block;
        height: 20px;
        line-height: 20px;
        font-size: 12px;
        color: #9a9a9a;
    }
    }
</style>
