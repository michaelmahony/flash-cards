$('document').on('load', function () {

    var card = {
        front: "Puella",
        back: "Girl",
        history: [],
        composite_score: 0,

        setAnswer : function (score) {
            // Make score a number
            score = parseInt(score)

            // Ensure that it is not NAN and that the value is valid
            if (isNaN(score) == true) {
                return;
            }
            if (score >= 0 && score <= 2) {
                // Add to
            }
        }
    }
})