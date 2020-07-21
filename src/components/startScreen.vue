<template>
    <section class="StartScreen"
        v-show = "StartScreenVisible"
        >
        <p>Введите никнейм:</p>
        <input type="text"
             v-model = "userName"
        >
        {{userName}}
    </section>
</template>

<script>
export default {
    data() {
        return {
            StartScreenVisible: false,
            userName: ''
        }
    }
}
</script>

<style lang="less" scoped>

    .StartScreen {
        position: absolute;
        height: 20%;
        width: 30%;
        margin-left: 25%;
        margin-top: 10%;
        border: 1px solid green;
        background-color: greenyellow;
    }


</style>