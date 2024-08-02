function suggestedwords(letter) {
    let suggestion;
    switch (letter.toUpperCase()) {
        case 'A':
            suggestion = ['Apple', 'Apricot', 'Avocado'];
            break;
        case 'B':
            suggestion = ['Banana', 'Blueberry', 'Blackberry'];
            break;
        case 'C':
            suggestion = ['Cherry', 'Cate', 'Coconut'];
            break;
        case 'D':
            suggestion = ['Date', 'Don', 'Duranii'];
            break;
        default:
            suggestion = ['No suggestion available for this word.'];
    }
    return suggestion;
}

let inputLetter = prompt('Enter a Letter to Get word suggestion:');
let wordSuggestion = suggestedwords(inputLetter);
alert('Word suggestion: ' + wordSuggestion.join(', '));
