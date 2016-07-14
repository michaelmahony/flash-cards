FlashCards
==========
A flashcard app built for GA WDI Project 1

Technologies Used
-----------------
The app was built using JavaScript, JQuery, HTML5 and CSS3.

Approach Taken
--------------

### Two Modes For Two Goals

There are two complimentary but distinct reasons for using flashcards:

* To commit information to memory
* To evaluate retention of information

Recognizing this distinction, the app was implemented with a mode for each. 

####Test Mode

Test mode prompts the user with each flash card once and provides a list of correct
and incorrect responses at the end.

####Study mode
Study mode cycles through the cards in the set and does not terminate. 

It does, however, remember the last five responses to each card. The record of responses is used to rank cards in order to prompt cards that the user has not memorized more frequently than cards the user already knows. 

### Installation Instructions
The app requires JQuery to operate. No plugins or non-standard libraries are used.

### Unsolved Problems
The app functions as intended. Future improvements might include:

* A backend so that users will be able to create new card sets to use and share
* Feedback during study mode so that users can gauge their confidence with the set as a whole