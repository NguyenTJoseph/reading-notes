let age 
let drinks

function bouncer(age,drinks) {
    if ((age < 21) && (drinks < 2)) {
        console.log('You are too young.')
    } else if ((age => 21) && (drinks > 2)) {
        console.log('You are too drunk')
    } else if ((age < 21) && (drinks > 2)) {
        console.log('You are going to jail.')
    } else if ((age => 21) && (drinks < 2)) {
        console.log('Have a nice night.')
    }
}