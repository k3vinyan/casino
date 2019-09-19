<template>
    <div class="hand">
        <card 
            v-for="card in currentCards"
            :card="card"
            :key="card.id"
        >       
    </card>  
        </div>
</template>

<script>

import CardComponent from './CardComponent.vue'

export default {
    props: {
        currentCards: Array,
        card: Object
    },
    components: {
        card: CardComponent
    }
}
</script>

<style scoped>

    .hand {
        display: grid;
        width: 600px;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-gap: 10px;
        margin:  0 auto;
        margin-bottom: 10px;
        min-height: 80px;
    
    }

    .hand span {
        display: inline-block;
        text-align: center;
        margin: auto;
    }


</style>