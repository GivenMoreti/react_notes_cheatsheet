function myVehicle({ model, registration: { city,state } }) {
    const message = 'My ' + model + ' is registered in ' + city+ " " + state + '.';
    console.log(message)
  }


const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red',
    registration: {
      city: 'Houston',
      state: 'Texas',
      country: 'USA'
    }
  }
  
  myVehicle(vehicleOne)
  
 