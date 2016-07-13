function showText(text, label) {
    $(".card-text").html(text);
    $(".front-back-label").html(label);
}

function flipCard() {
    if ($(".flip").val() == 'Show Back') {
        $(".flip").val('Show Front');
        showText(theCard.back, 'Back');
        // If first time being clicked, show the grading buttons
        if ($(".grade-btns").css('visibility') == 'hidden') {
            $(".grade-btns").css('visibility', 'visible');
        }

    } else if ($(".flip").val() == 'Show Front') {
        showText(theCard.front, 'Front');
        $(".flip").val('Show Back');
    }
}

function serveCard (theCard) {
    // Show the front text
    showText(theCard.front, 'Front');
    $(".flip").val('Show Back');
}

function showNextCard(counter, cardObjArray) {

    console.log("-----------------------------------------------------")
    console.log('Counter: ' + counter);
    console.log('Console mod: ' + counter % cardObjArray.length)

    $('.card').removeClass('flipped');
    $('.grade-btns').css('visibility', 'hidden');

    theCard = cardObjArray[counter % cardObjArray.length];
    console.log(theCard.front);

    serveCard(theCard);
}

function test(cardObjSet) {

}

function study(cardObjSet) {

}



$('document').ready(function () {
    // The card set
    var cardSet = {
        setTitle: "Ecce Romani Chapter 1",
        setAuthor: "Flavia",
        setDescription: "Vocabulary from chapter one of Ecce Romani, Book 1",
        cards: [
            {
                front: 'Puella',
                back: '(a/the) Girl',
                history: [],
            },
            {
                front: 'pictura',
                back: '(a/the) picture',
                history: [],
            },
            {
                front: 'Italia',
                back: 'Italy',
                history: [],
            },
            {
                front: 'villa',
                back: '(a/the) country house',
                history: [],
            },
            {
                front: 'habitat',
                back: '(she/he) lives, is living, does live / dwells, is dwelling, does dwell',
                history: [],
            },
            {
                front: 'sedet',
                back: '(she/he) sits, is sitting, does sit',
                history: [],
            },
            {
                front: 'legit',
                back: '(she/he) reads, is reading, does read',
                history: [],
            },
            {
                front: 'scribit',
                back: '(she/he) writes, is writing, does write',
                history: [],
            },
            {
                front: 'est',
                back: '(she/he/it) is',
                history: [],
            },
        ],
    };

    // Set the page header
    $('.setTitle').html(cardSet['setTitle'])

    // Put each card into a Card object in another list
    cardObjArray = [];
    for (i=0; i<cardSet.cards.length; i++) {
        var cardInfo = cardSet.cards[i];
        var cardObj = new Card(cardInfo['front'], cardInfo['back'], cardInfo['history']);
        cardObjArray.push(cardObj);
    }


    // Create the counter to be used to serve the rest of the cards
    var counter = 0;

    // And the subtitle / counter
    $('.subtitle').html('Test mode: Card ' + (counter + 1) + " of " + cardObjArray.length);


    // Serve the first card
    showNextCard(0, cardObjArray);
    counter++;




    $(".incorrect").on("click", function () {

        theCard.setHistory(0);
        console.log(theCard.history);
        showNextCard(counter, cardObjArray);
        counter++;
    })

    $(".shakey").on("click", function () {

        theCard.setHistory(0);
        console.log(theCard.history);
        showNextCard(counter, cardObjArray);
        counter++;
    })

    $(".correct").on("click", function () {

        theCard.setHistory(1);
        console.log(theCard.history);
        showNextCard(counter, cardObjArray);
        counter++;
    })

    $(".flip").on("click", function () {
        flipCard();
    })
})