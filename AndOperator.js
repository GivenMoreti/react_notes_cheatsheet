//If cars.length > 0 is equates to true, the expression after && will render.
//eg
const cars = ["Ford","Mustang"];
const myCars = cars.length > 0 &&`You have ${cars.length} cars in your garage`;
console.log(myCars);