console.log("Card.js is running")
// Define the Card object class
function Card(front, back, history) {
    // The front text
    this.front = front;
    // The back text
    this.back = back;

    // If no history, default it to empty array
    if (typeof history === 'undefined') {
        this.history = [];
    } else {
        this.history = history;
    }

    // A calculated score representing strength of knowledge
    self.composite_score = 0;

    // Appends the new score to this.history and limits length to 5
}

// Prototype the setHistory function

// An array that contains the most recent 5 answers
// 0 represents an incorrect answer, while 1 represents a correct one.
// 'Shaky' is a response option, but it is recorded as incorrect.
Card.prototype.setHistory = function(score) {
    // Make score a number
    score = parseInt(score)

    // Ensure that it is not NAN
    /// when would score be a NaN? I suspect this is a vestigial debugging/err handling block
    if (isNaN(score) == true) {
        return;
    }

    // Ensure that the value is valid
    if (score >= 0 && score <= 1) {

        // Append to the front of history array.
        this.history.unshift(score);

        // If the new length of the array is > 5, drop the oldest response
        if (this.history.length > 5) {
            this.history.pop()
        }
    }
}
