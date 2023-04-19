// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");

//variables for dish assignment
const assignButton = document.querySelector(".assign");
const assignedItems = document.querySelector(".assigned-items");

//Make button listen for click
//Make input appear on screen in list

addGuestButton.addEventListener("click", function() {
    const guest = guestInput.value;
   // console.log(guest);
   if (guest !== "") {
    addToList(guest);
    updateGuestCount()
    clearInput();
   }
});

//Auto clear the input box after submitting

const clearInput = function() {
    guestInput.value = "";
};

//Refactor

const addToList = function(guest) {
    const listItem = document.createElement("li");
    listItem.innerText = guest;
    guestList.append(listItem);
};

//Limit the Guest list to 8

const updateGuestCount = function() {
    let guests = document.querySelectorAll(".guest-list li");
    guestCount.innerText = guests.length;
    if (guests.length === 8) {
        addGuestButton.classList.add("hide");
        guestInput.classList.add("hide");
        guestInputLabel.classList.add("hide");
        guestFull.classList.remove("hide");
    }
};

const assignItems = function() {
    const potluckItems = [
     "potato salad",
     "sandwiches",
     "pasta salad", 
     "fruit", 
     "burgers",
     "hot dogs", 
     "meatballs", 
     "chips", 
     "watermelon", 
     "veggie tray", 
     "brownies", 
     "cookies", 
     "soda", 
     "water", 
     "beer"
    ];

     const allGuests = document.querySelectorAll(".guest-list li");
     
     for (let guest of allGuests) {
        let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
        let randomPotluckItem = potluckItems[randomPotluckIndex];

        let listItem = document.createElement("li");
        listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;

        assignItems.append(listItem);
     }
};