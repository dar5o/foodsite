console.log('yo')
let favFood = prompt('What is your favorite food?')
if (favFood.toLowerCase() == 'burgers' || favFood.toLowerCase() == 'sushi') {
document.write('<h2>We Have the same interests in food! Im so glad!:)</h2>');
} else if (favFood.toLowerCase() == 'pizza') {
    document.write('<h2>Your favorite food is Pizza!</h2>')
    document.write('<img src= "https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/phut_0.jpg?itok=h30EAnkk" ALIGN="bottom">')
} else if (favFood.toLowerCase() == 'pasta') {
    document.write('<h2>Your favorite food is Pasta!</h2>')
    document.write('<img src="https://image.made-in-china.com/2f0j10HYZRUBWcsGpM/Elbow-Dry-Pasta-Noodles-Pellet-Production-Extrusion-Making-Machine.webp" ALIGN="bottom"> ')

} else if (favFood.toLowerCase() == 'wings') {
    document.write('<h2>Your favorite food is Wings!</h2>')
    document.write('<img src="https://www.buffalowildwings.com/globalassets/menuitems/bww_traditionalwings_sauce2.png?format=png&width=600&v=2" ALIGN="bottom"> ')
} else {
    document.write('Your favorite food is ' + favFood + '!')
}