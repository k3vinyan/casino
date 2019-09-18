import DeckOfCards from './DeckOfCards.js';


const deck = new DeckOfCards();
deck.createDeck()
deck.shuffle();


const CardComponent = {
    template: "#card-template",
    props: {
        card: {
            value: String,
            suit: String
        }
    }
}

const HandComponent = {
    template: '#hand-template',
    props: {
        'current-cards': Array
    },

    components: {
        card: CardComponent
    }
}

const app = new Vue({
    el: '#app',
    components: {
        hand: HandComponent
    },
    data: {
        deck: deck,
        currentCards: null
    },
    methods: {
        shuffleDeck: function() {
            console.log(this.deck.deck)
            this.deck.shuffle()
        },
        drawFiveCards: function() {
            const cards = this.deck.drawFiveCards()
            this.currentCards = cards;
            console.log(this.currentCards)
        },
        reset: function() {
            this.deck.createDeck();
            this.deck.shuffle();
            this.currentCards = null;
        }
    }
})


