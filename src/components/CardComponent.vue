<template>
    <div class="card">
        <span>{{card.value}}</span>
        <span>{{card.suit}}</span>
    </div>
</template>

<script>
    export default {
        props: {
            card: Object
        }
    }
</script>

<style scoped>
    .card {
        display: grid;
        border: 1px black solid;
        width: 100px;
        height: 75px;
    }
</style>