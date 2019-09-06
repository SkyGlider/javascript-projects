"use strict";

class Card
{
	constructor(value, suit)
	{
		this._value = value;
		this._suit = suit;
	}
	get value()
	{
		return this._value;
	}
	get suit()
	{
		return this._suit;
	}
	set value(newValue)
	{
		if (newValue >= 1 && newValue <= 13)
		{
			this._value = newValue;
		}
	}
	set suit(newSuit)
	{
		if (newSuit >= 1 && newSuit <= 4)
		{
			this._suit = newSuit;
		}
	}
	// new code
	_getSuitName()
	{
		const SUIT_NAMES = ["","Spades", "Hearts", "Diamonds", "Clubs"];
		return SUIT_NAMES[this._suit];
	}
	_getValueName()
	{
		const VALUE_NAMES = ["","Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
		return VALUE_NAMES[this._value];
	}
	toString()
	{
		return "The " + this._getValueName() + " of " + this._getSuitName();
	}
}

class Deck
{
	constructor()
	{
		this._cards = [];
		// for each suit ...
		for (let suit = 1; suit <= 4; suit++)
		{
			// each suit has a set of 13 values...
			for (let value = 1; value <= 13; value++)
			{
				// create a new card
				let tempCard = new Card(value, suit);
				// use .push to add it to the array
				this._cards.push(tempCard);
			}
		}
	}

	get cards()
	{
		return this._cards;
	}

	set cards(newCards)
	{
		this._cards = newCards;
	}

	// new code
	dealCard()
	{
		// if the deck still has cards... otherwise return null.
		if (this._cards.length > 0)
		{
			// take the first card in the deck (i.e. at index 0) and return it
			return this._cards.shift();
		}
		return null;
	}
	shuffle()
	{
		// implementation of the Fisher-Yates shuffle algorithm
		let centerIndex = this._cards.length - 1;
		while (centerIndex > 0)
		{
			let i = Math.floor(Math.random() * centerIndex);
			let tempItem = this._cards[centerIndex];
			this._cards[centerIndex] = this._cards[i];
			this._cards[i] = tempItem;
			centerIndex--;
		}
	}
	toString()
	{
		// using <br/> for HTML break row (new line)
		let output = "";
		for (let cardIndex in this._cards)
		{
			output += this._cards[cardIndex];
			output += "<br/>";
		}
		return output;
	}
}

let cardArr = [];
let deck = new Deck();
let cardDealt;
let cardDisplayRef = document.getElementById("cardDisplay");
let dealtCardDisplayRef = document.getElementById("dealtCardDisplay");

function addCard()
{
	let cardValueRef = document.getElementById("cardValue");
	let cardSuitRef = document.getElementById("cardSuit");

	let newValue = Number(cardValueRef.value);
	let newSuit = Number(cardSuitRef.value);

	if(cardArr.length <=52)
	{
		let newCard = new Card(newValue, newSuit);
		cardArr.push(newCard);
	}

}

function refreshDisplay()
{
	let output = "";

	for(let i = 0; i < cardArr.length; i++)
	{
		output += "<tr><td>" + cardArr[i] + "<br>";
	}

	cardDisplayRef.innerHTML = output;

	if(cardDealt !==undefined)
	{
		dealtCardDisplayRef.innerHTML = "Current : " + cardDealt + "<br>";
	}

}

function shuffleDeck()
{
	deck.cards = cardArr;

	deck.shuffle();
}

function deal()
{
	deck.cards = cardArr;
	cardDealt = deck.dealCard();

	var notification = document.querySelector('.mdl-js-snackbar');
	var data = {
  	message: cardDealt + ' dealt.',
  	actionHandler: function(event) {},
  	actionText: 'OK',
  	timeout: 2000
	};
	notification.MaterialSnackbar.showSnackbar(data);
}

function createNewDeck()
{
	deck = new Deck();
	cardArr = deck.cards;
}
