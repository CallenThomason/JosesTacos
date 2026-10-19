// Jose's Taco Truck
// The data is done. The page is not.

const truck = {
  name: "Jose's Taco Truck",
  tagline: "Same recipes, worse parking.",
  phone: "209-555-0147",
  soldOut: false
};

const special = {
  name: "Three birria tacos and a consome",
  price: 11.00,
  isFeatured: true
};

const schedule = [
  { day: "Monday", location: "Behind the laundromat on Pacific" },
  { day: "Tuesday", location: "Weber Ave, by the courthouse" },
  { day: "Wednesday", location: "Behind the laundromat on Pacific" },
  { day: "Thursday", location: "The lot on Hammer Lane" },
  { day: "Friday", location: "Victory Park, until we run out" }
];

const crew = ["Marisol", "Big Kevin", "Darnell"];

const todayIndex = 0;

// Your code goes below here.
document.getElementById("truck-name").textContent = truck.name;
document.getElementById("tagline").textContent = truck.tagline;
document.getElementById("status").textContent = truck.soldOut;

document.getElementById("special-name").textContent = special.name;

function getPrice(item) {
  return "$" + item.price;
}
document.getElementById("special-price").textContent = getPrice(special);


document.getElementById("status").textContent = "Open now";
if (truck.soldOut) {
  document.getElementById("status").textContent = "Sold Out for Today";
  document.getElementById("status").classList.add("closed");
}

if (special.isFeatured) {
  document.getElementById("special-name").classList.add("featured");
}
const crewList = document.getElementById("crew-list");
for (let i = 0; i < crew.length; i++) {
  const item = document.createElement("li");
  item.textContent = crew[i];
  crewList.appendChild(item);
}

for (let i = 0; i < schedule.length; i++) {
  const locationTable = document.getElementById("day" + i);
  locationTable.textContent = schedule[i].day;


  const table = document.getElementById("lo" + i);
  table.textContent = schedule[i].location;

 if(i == todayIndex){
    locationTable.classList.add("today");
    table.classList.add("today"); 
  }
}

document.getElementById("number").textContent = truck.phone; 



