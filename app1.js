console.log("helloworld")
let Ulocation = prompt('Where are you from?')
let Uname = prompt('What is your name?')
document.write('<p>Hi ' + Uname + ' from ' + Ulocation + ' </p>' )
let howMP = prompt('How many plates will you need to eat')
function plates() {
    var plateN = howMP
    for (i=0; i < plateN; i++){
        document.write('<img src="https://www.ikea.com/us/en/images/products/oftast-side-plate-white__0713530_pe729595_s5.jpg?f=s">')
    }
}
