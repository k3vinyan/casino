<template>
    <div>
        <p>{{message}}</p>
    </div>
    
</template>

<script>
    export default {
        props: {
            message: String
        }
    }
</script>

<style scope>
    p {
        color: blueviolet
    }
</style>