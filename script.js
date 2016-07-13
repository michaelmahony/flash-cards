function showText(text, label) {
    $(".card-text").html(text);
    $(".front-back-label").html(label);
}

function serveCard (theCard) {
    $(".flip").on("click", function () {
        $('.card').toggleClass('flipped');
    })

    // Show the front text
    // showText(theCard.front, 'Front');


    // var state = 'front';
    // $(".card").flip();

    // $(".flip").on("click", function () {
        // $(".card").flip();


        // if ($(".flip").val() == 'Show Back') {
        //     showText(theCard.back, 'Back');
        //     $(".flip").val('Show Front');
        //
        // } else if ($(".flip").val() == 'Show Front') {
        //     showText(theCard.front, 'Front');
        //     $(".flip").val('Show Back');
        // }
    // });

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

    theCard = cardObjArray[0];

    serveCard(theCard);



    console.log(theCard.front);
    console.log(theCard.back);
    console.log(theCard.history);


    $(".incorrect").on("click", function () {
        theCard.setHistory(0);
        console.log(theCard.history);

    })
    $(".shakey").on("click", function () {
        theCard.setHistory(0);
        console.log(theCard.history);

    })
    $(".correct").on("click", function () {
        theCard.setHistory(1);
        console.log(theCard.history);

    })
})