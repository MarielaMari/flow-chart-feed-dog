const isDinnerTime = true;
const hasFoodInDish = true;
const hasFoodInPantry = true;
const ifIsFriday = true;

if (isDinnerTime) {
    console.log('Walk to dog dish');

    if (!hasFoodInDish) {
       console.log('Walk to pantry');

       if (!hasFoodInPantry) {
         console.log('Drive to pet store');
         console.log('Buy pet food');
         console.log('Drive back home');
         console.log('Pour food into pantry container');    
       }
        
       if (ifIsFriday) {
       console.log('Scoop treats into dog dish');
       }else {
       console.log('Scoop food into dog dish');   
    }
        console.log('Dog eats dinner');
}
}
console.log('Chill until next dinner time')