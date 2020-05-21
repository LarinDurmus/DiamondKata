
    var letter = [ 'A', 'B', 'C', 'D', 'E'];
    var letter_number = 0;
    var diamond = new Array(26); 
 
    function giveDiamond(user_letter) {
        // search for letter number in the array letter
        for ( i = 0; i < letter.length; i++) {
            if (letter[i] == user_letter) {
                letter_number = i;
                break;
            }
        }
 
        
        for ( i = 0; i <= letter_number; i++) {
            diamond[i] = "";
            for ( j = 0; j < letter_number - i; j++) {
                diamond[i] += "-";
            }
 
            // add letter
            diamond[i] += letter[i];
 
            // add space between letters
            if (letter[i] != 'A') {
                for ( j = 0; j < 2 * i - 1; j++) 
                { 
                diamond[i] += "-"; }
                // add letter
                diamond[i] += letter[i];
                } 
                //add space after letters
                for ( j = 0; j < letter_number - i; j++) {
                    diamond[i] += "-";
                }
                // Draw the first part of the diamond 
                console.log(diamond[i]);
                } 
                for ( i = letter_number - 1; i >= 0; i--)
                {
            console.log(diamond[i]);
        } 
        }
    


module.exports = {
    giveDiamond
}
