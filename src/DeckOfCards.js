export default class DeckOfCards {
    constructor() {
        this.deck = [];
        this.suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
        this.values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
    }

    createDeck() {
        let count = 0;
        for(let i = 0; i < this.suits.length; i++) {
            for(let j = 0; j < this.values.length; j++) {
                const card = {
                    id: count,
                    suit: this.suits[i],
                    value: this.values[j]
                }

                count++;
                this.deck.push(card)
            }
        }

        return this.deck;
    }

    shuffle() {
        for(let i = 0; i < this.deck.length; i++) {
            const position = Math.floor(Math.random() * this.deck.length);

            [this.deck[i], this.deck[position]] = [this.deck[position], this.deck[i]];
        }
        return this.deck;
    }

    drawFiveCards() {
        const fiveCards = this.deck.splice(0, 5);
        return fiveCards;
    }

}

