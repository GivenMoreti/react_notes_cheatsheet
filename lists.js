const cars = ["bmw", "cherry", "kia"];

const renderdCars = cars.map((item) => (
    `<li> ${item} </li>`
))
console.log(renderdCars)

//keys

const vehicles = [
    {
        id: 1,
        name: "bmw"
    },
    {
        id: 2,
        name: "cherry"
    },
    {
        id: 3,
        name: "kia"
    }
]
const mappedVehicles = vehicles.map((item)=>(
    `<h1 ${id=item.id}>${item.name}</h1>`
))
console.log(mappedVehicles)     //[ '<h1 1>bmw</h1>', '<h1 2>cherry</h1>', '<h1 3>kia</h1>' ]
