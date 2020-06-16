
    var letter = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var letter_number = 0;
    var diamond = new Array(26); 
 
    function giveDiamond(user_letter) {
        // suche den buchstaben
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
 
            // buchstabe hinzufügen
            diamond[i] += letter[i];
 
            // abstände
            if (letter[i] != 'A') {
                for ( j = 0; j < 2 * i - 1; j++) 
                { 
                diamond[i] += "-"; }
    
                diamond[i] += letter[i];
                } 
                //abstand nach buchstabe
                for ( j = 0; j < letter_number - i; j++) {
                    diamond[i] += "-";
                }
                
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
