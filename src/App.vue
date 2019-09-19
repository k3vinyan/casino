<template>
    <div id="app">
        <div>
          <hand :current-cards="currentCards"></hand>
          <custom-button @click.native="shuffleDeck" value="Shuffle"></custom-button>
          <custom-button @click.native="drawFiveCards" value="Draw"></custom-button>
          <custom-button @click.native="reset" value="reset"></custom-button>
          <message v-show="showMessage" :message="message"></message>
        </div>
    </div>
</template>
<script>
  import HandComponent from './components/HandComponent.vue'
  import ButtonComponent from './components/ButtonComponent.vue'
  import MessageComponent from './components/MessageComponent.vue'
  import DeckOfCards from './DeckOfCards.js';

  const deck = new DeckOfCards();
  deck.createDeck();

  export default {
      name: 'app',
      components: {
          hand: HandComponent,
          'custom-button': ButtonComponent,
          message: MessageComponent
      },
      data: function() {
          return {
            deck: deck,
            currentCards: [],
            messages:[
              "Your Deck is Shuffle!",
              "There are less than 5 cards within the deck.  Please reset."
            ],
            message: "",
            showMessage: false
          }
      },
      methods: {
          shuffleDeck: function() {
              this.updateMessage(0)
              this.deck.shuffle();   
          },
          drawFiveCards: function() {
              const cards = this.deck.drawFiveCards()
              this.currentCards = cards;

              if(this.lessThanFiveCard) {
                this.updateMessage(1)
              }
          },
          reset: function() {
              this.deck.createDeck();
              this.deck.shuffle();
              this.currentCards = [];
          },
          updateMessage: function(index) {
            this.showMessage = true;
            this.message = this.messages[index]

            let that = this;

            setTimeout(function(){
              that.message = "";
            }, 2000)

          }
      },
      computed: {
        lessThanFiveCard: function() {
          if(this.deck.deck.length < 5) {
              return true;
          }
          return false;
        }
      }
  }
</script>

<style scoped>
  #app {
      grid-template-columns: 1fr;
      height: 100%;
      text-align: center;
      font-size: 20px;
      margin-top: 25%;
  }
</style>
