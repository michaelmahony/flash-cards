
$('document').ready(function () {
    console.log("JS Loaded");

    console.log("Got to new card")
    var theCard = new Card("Puella", "Girl");

    console.log(theCard.front);
    console.log(theCard.back);
    console.log(theCard.history);
    theCard.setHistory(1);
    console.log(theCard.history);
})