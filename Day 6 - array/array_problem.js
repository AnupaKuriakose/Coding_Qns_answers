const passengers = [
  {
    id: 1,
    passengerName: "Freddie Mercury",
    isVegetarianOrVegan: false,
    connectedFlights: 2,
  },
  {
    id: 2,
    passengerName: "Amy Winehouse",
    isVegetarianOrVegan: true,
    connectedFlights: 4,
  },
    {
    id: 3,
    passengerName: "Kurt Cobain",
    isVegetarianOrVegan: true,
    connectedFlights: 3,
  },
     {
    id: 3,
    passengerName: "Michael Jackson",
    isVegetarianOrVegan: true,
    connectedFlights: 1,
  },
];
// Main Question: Get the passengers' names using the data provided 
// Bonus Part (a)- Return vegetarians/vegans
// Bonus Part (b)- Sort passengers by the number of connected flights in descending order

const passengerNames = passengers.map((p)=> p.passengerName);
console.log('passengerNames:', passengerNames);

const vegans = passengers.filter(v=> v.isVegetarianOrVegan).map(p=> p.passengerName);
console.log('vegan passengers:', vegans);

const sortedPassList = passengers.sort((passenger1, passenger2) => passenger1.connectedFlights - passenger2.connectedFlights).map(x=> x.passengerName);
console.log('Sorted list:', sortedPassList);