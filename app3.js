console.log('yo')
let favFood = prompt('What is your favorite food?')
function getFavFood(){
    if (favFood.toLowerCase() == 'burgers' || favFood.toLowerCase() == 'sushi') {
    document.write('<h2>We Have the same interests in food! Im so glad!:)</h2>');
    } else if (favFood.toLowerCase() == 'pizza') {
        document.write('<h2>Your favorite food is Pizza! ME TOO!</h2>')
        document.write('<img src= "https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/phut_0.jpg?itok=h30EAnkk" ALIGN="bottom">')
    } else if (favFood.toLowerCase() == 'pasta') {
        document.write('<h2>Your favorite food is Pasta! ME TOO!</h2>')
        document.write('<img src="https://image.made-in-china.com/2f0j10HYZRUBWcsGpM/Elbow-Dry-Pasta-Noodles-Pellet-Production-Extrusion-Making-Machine.webp" ALIGN="bottom"> ')
    } else if (favFood.toLowerCase() == 'wings') {
        document.write('<h2>Your favorite food is Wings! ME TOO!</h2>')
        document.write('<img src="https://www.buffalowildwings.com/globalassets/menuitems/bww_traditionalwings_sauce2.png?format=png&width=600&v=2" ALIGN="bottom"> ')
    } else {
        document.write('Your favorite food is ' + favFood + '! However I still have other foods I enjoy would you like to guess them?')
        let yea = 0;
        let guesses = 10;
        let favFoods = ['pizza', 'pasta', 'wings']
        let favFoodsL = ['<img src= "https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/phut_0.jpg?itok=h30EAnkk" ALIGN="bottom">', '<img src="https://image.made-in-china.com/2f0j10HYZRUBWcsGpM/Elbow-Dry-Pasta-Noodles-Pellet-Production-Extrusion-Making-Machine.webp" ALIGN="bottom">','<img src="https://www.buffalowildwings.com/globalassets/menuitems/bww_traditionalwings_sauce2.png?format=png&width=600&v=2" ALIGN="bottom">']
        for (i = 0; i < guesses; i++ ) {
            let guessLeft = guesses - i
            let userGuess = prompt('Guess what else do I like to eat:')
            for(j = 0; j < 2; j++) {
                while (yea == 0 || guessesLeft > 0) {
                    if (userGuess.toLowerCase() == favFoods[j]) {
                        alert('You are right! I love: ' + favFoods[j])
                        document.write('You guessed ' + favFoods[j] + ', you are absolutely right I LOVE PIZZA!')
                        document.write(favFoodsL[j])
                        yea = 1;
                    } else {
                        alert('not quite, try again')
                        userGuess = prompt('Guess what else do I like to eat:')
                        yea = 0;
                    }
                }
            
            }
            
        }
    }
}
getFavFood();