const input = require('sync-input');
const giftList = {
    1: {name: "Teddy Bear", price: 10},
    2: {name: "Big Red Ball", price: 5},
    3: {name: "Huge Bear", price: 50},
    4: {name: "Candy", price: 8},
    5: {name: "Stuffed Tiger", price: 15},
    6: {name: "Stuffed Dragon", price: 30},
    7: {name: "Skateboard", price: 100},
    8: {name: "Toy Car", price: 25},
    9: {name: "Basketball", price: 20},
    10: {name: "Scary Mask", price: 75}};

function showGiftList()  {
    console.log("Here's the list of gifts:\n");
    for (let giftID in giftList) {
        console.log(`${giftID}- ${giftList[giftID].name}, Cost: ${giftList[giftID].price} tickets`);
    }
}


let totalTickets = 100;
console.log(`WELCOME TO THE CARNIVAL GIFT SHOP!
Hello friend! Thank you for visiting the carnival!`);
showGiftList();

let action = input("\nWhat do you want to do?\n1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts\n");
switch (action) {
    case "1":
        let giftChoiceID = input("Enter the number of the gift you want to get: ");
        console.log(`Here you go, one ${giftList[giftChoiceID].name}!`);
        totalTickets -= giftList[giftChoiceID].price;
        console.log(`Total tickets: ${totalTickets}`);
        break;
    case "2":
        let ticketAddAmount = Number(input("Enter the ticket amount: "));
        totalTickets += ticketAddAmount;
        console.log(`Total tickets: ${totalTickets}`);
        break;
    case "3":
        console.log(`Total tickets: ${totalTickets}`);
        break;
    case "4":
        showGiftList();
        break;
}
console.log("Have a nice day!");