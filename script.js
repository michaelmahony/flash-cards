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

function testMode(cardObjSet) {
    // Make sure the appropriate elements are visible or hidden
    $('.flip').css('visibility', 'visible');
    $('.start-over').css('visibility', 'hidden');

    // Create the counter to be used to serve the rest of the cards
    var counter = 0;

    // And the subtitle / counter
    $('.subtitle').html('Test mode: Card ' + (counter + 1) + " of " + cardObjArray.length);

    // Serve the first card
    showNextCard(0, cardObjArray);
    counter++;

    $(".grade-btns input").on("click", function () {
        // Determine which button was pressed
        var theClass = $(this).attr("class");
        console.log(theClass);

        // Log the answer
        if (theClass == "incorrect") {
            theCard.setHistory(0);
        } else if (theClass == "shakey") {
            theCard.setHistory(0);
        } else if (theClass == "correct") {
            theCard.setHistory(1);
        }

        // If not the last card, continue
        if (counter < cardObjArray.length) {
            showNextCard(counter, cardObjArray);
            counter++;

            // Update the subtitle
            $('.subtitle').html('Test mode: Card ' + (counter ) + " of " + cardObjArray.length);


        // If the last card, call the finishing sequence
        } else {
            onTestFinish(cardObjSet);
        }

    })

    $(".flip").on("click", function () {
        flipCard();
    })
}

function studyMode(cardObjSet) {
    // Make sure the appropriate elements are visible or hidden
    $('.flip').css('visibility', 'visible');
    $('.start-over').css('visibility', 'hidden');

    // Create the counter to be used to serve the rest of the cards
    var counter = 0;

    // And the subtitle / counter
    $('.subtitle').html('Study mode: Set of ' + cardObjArray.length + ' cards');

    // Serve the first card
    showNextCard(0, cardObjArray);
    counter++;

    $(".grade-btns input").on("click", function () {
        // Determine which button was pressed
        var theClass = $(this).attr("class");
        console.log(theClass);

        // Log the answer
        if (theClass == "incorrect") {
            theCard.setHistory(-.75);
        } else if (theClass == "shakey") {
            theCard.setHistory((-.25));
        } else if (theClass == "correct") {
            theCard.setHistory(1);
        }

        // Sort the array so that the object with the lowest composite score is first
        cardObjArray = sortByComposite(cardObjArray)
        // But if the current card has the lowest score, switch it with the next lowest
        //   so that it does not appear twice in a row
        if (theCard.front == cardObjArray[0].front) {
            var temp = cardObjArray[1];
            cardObjArray[1] = cardObjArray[0];
            cardObjArray[0] = temp;
        }


        console.log("Sorted array:")
        for (var i=0; i<cardObjArray.length; i++) {
            console.log(cardObjArray[i].front, cardObjArray[i].composite_score);
            console.log(cardObjArray[i].history);
        }


        // If not the last card, continue
        showNextCard(0, cardObjArray);

            // Update the subtitle
            $('.subtitle').html('Study mode: Set of ' + cardObjArray.length + ' cards');


        //     // If the last card, call the finishing sequence
        // } else {
        //     onTestFinish(cardObjSet);
        // }

    })

    $(".flip").on("click", function () {
        flipCard();
    })
}

function onTestFinish(cardObjSet) {
    showText("FINISHED", "END");
    $(".grade-btns").css('display', 'none');
    $('.flip').css('visibility', 'hidden');
    // $('.start-over').css('visibility', 'visible');


    console.log(cardObjSet);
    var incorrect_counter = 0;
    var correct_counter = 0;
    for (var i=0; i<cardObjSet.length; i++) {
        console.log("Running loop to append to score table")


        // If the last response is 1 (correct)
        if (cardObjSet[i].history[0] == 1) {
            correct_counter++;
            var row = "<tr><td>" + cardObjSet[i].front + "</td><td>" + cardObjSet[i].back + "</td></tr>";
            $('table.results-correct').append(row);

        // If the most recent response is wrong
        } else {
            console.log("Processing wrong answer: " + cardObjSet[i]);
            incorrect_counter++;
            var row = "<tr><td>" + cardObjSet[i].front + "</td><td>" + cardObjSet[i].back + "</td></tr>";
            $('table.results-incorrect').append(row);
        }

        $(".results").css('visibility', 'visible');

        $("div.results-correct").css('display', 'block');
        $("div.results-incorrect").css('display', 'block');
        $("table.results-correct").css('display', 'table');
        $("table.results-incorrect").css('display', 'table');

        console.log("Incorrect counter: " + incorrect_counter);
        console.log("Correct counter: " + correct_counter);


        if (incorrect_counter == 0) {
            $(".results-incorrect").css('display', 'none');
        }
        if (correct_counter == 0) {
            $(".results-correct").css('display', 'none');
        }
    }
}

function sortByComposite(cardObjArray) {
    cardObjArray.sort(function (a, b) {
        return parseFloat(a.composite_score - parseFloat(b.composite_score));
    })
    return cardObjArray;
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
                front: 'Pictura',
                back: '(a/the) picture',
                history: [],
            },
            {
                front: 'Italia',
                back: 'Italy',
                history: [],
            },
            {
                front: 'Villa',
                back: '(a/the) country house',
                history: [],
            },
            {
                front: 'Habitat',
                back: '(she/he) lives, is living, does live / dwells, is dwelling, does dwell',
                history: [],
            },
            {
                front: 'Sedet',
                back: '(she/he) sits, is sitting, does sit',
                history: [],
            },
            {
                front: 'Legit',
                back: '(she/he) reads, is reading, does read',
                history: [],
            },
            {
                front: 'Scribit',
                back: '(she/he) writes, is writing, does write',
                history: [],
            },
            {
                front: 'Est',
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

    // Hide cards and buttons until a mode is chosen
    $('.card').css('visibility', 'hidden');
    $('.flip').css('visibility', 'hidden');

    $('.study-mode').on("click", function () {
        studyMode(cardObjArray);
        $('.card').css('visibility', 'visible');
        $('.mode-btns').css("display", 'none');
    })

    $('.test-mode').on("click", function () {
        testMode(cardObjArray);
        $('.card').css('visibility', 'visible');
        $('.mode-btns').css("display", 'none');
    })

    // testMode(cardObjArray);
    // studyMode(cardObjArray);
})