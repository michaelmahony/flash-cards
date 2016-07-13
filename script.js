function showText(div ,text, label) {
    $(div + " .card-text").html(text);
    $(div + " .front-back-label").html(label);
}

function serveCard (theCard) {


    // Show the front text
    showText(".front", theCard.front, 'Front');
    showText(".back", theCard.back, 'Back');


    var state = 'front';

    $(".flip").on("click", function () {
        if ($(".flip").val() == 'Show Back') {
            $(".flip").val('Show Front');
            // If first time being clicked, show the grading buttons
            if ($(".grade-btns").css('visibility') == 'hidden') {
                $(".grade-btns").css('visibility', 'visible');
            }

        } else if ($(".flip").val() == 'Show Front') {
            // showText(theCard.front, 'Front');
            $(".flip").val('Show Back');
        }
    });

}

function showNextCard(counter, cardObjArray) {
    counter++;

    $('.card').removeClass('flipped');

    theCard = cardObjArray[cardObjArray.length % counter];

    serveCard(theCard);


    console.log(theCard.front);
    console.log(theCard.back);
    console.log(theCard.history);




    $(".incorrect").on("click", function () {
        theCard.setHistory(0);
        console.log(theCard.history);
        showNextCard(counter, cardObjArray);

    })

    // $(".shakey").on("click", function () {
    //     theCard.setHistory(0);
    //     console.log(theCard.history);
    //
    // })
    // $(".correct").on("click", function () {
    //     theCard.setHistory(1);
    //     console.log(theCard.history);
    //
    // })
}

$('document').ready(function () {
    console.log("JS Loaded");

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

    // Put each card into a Card object, in another list
    cardObjArray = [];
    for (i=0; i<cardSet.cards.length; i++) {
        var cardInfo = cardSet.cards[i];
        var cardObj = new Card(cardInfo['front'], cardInfo['back'], cardInfo['history']);
        cardObjArray.push(cardObj);
    }

    console.log(cardObjArray);

    showNextCard(0, cardObjArray);

    $(".flip").on("click", function () {
        $('.card').toggleClass('flipped');
    })

})