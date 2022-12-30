const input = require('sync-input');
let giftList = {
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
    if (Object.keys(giftList).length === 0) {
        console.log("\nWow! There are no gifts to buy.");
    } else {
        for (let giftID in giftList) {
            console.log(`${giftID}- ${giftList[giftID].name}, Cost: ${giftList[giftID].price} tickets`);
        }
    }
}


console.log(`WELCOME TO THE CARNIVAL GIFT SHOP!
Hello friend! Thank you for visiting the carnival!`);
showGiftList();

let totalTickets = 0;
let action = ""
do {
    action = input("\nWhat do you want to do?\n1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop\n");
    switch (action) {
        case "1":
            if (Object.keys(giftList).length === 0) {
                console.log("Wow! There are no gifts to buy.");
                break;
            }
            let giftChoiceID = input("Enter the number of the gift you want to get: ");
            if (isNaN(Number(giftChoiceID))) {
                console.log("Please enter a valid number!");
                break;
            } else if (giftChoiceID in giftList) {
                if (totalTickets < giftList[giftChoiceID].price) {
                    console.log("You don't have enough tickets to buy this gift.");
                    break;
                }
                console.log(`Here you go, one ${giftList[giftChoiceID].name}!`);
                totalTickets -= giftList[giftChoiceID].price;
                delete giftList[giftChoiceID];
                console.log(`Total tickets: ${totalTickets}`);
                break;
            } else {
                console.log("There is no gift with that number!");
                break;
            }

        case "2":
            let ticketAddAmount = Number(input("Enter the ticket amount: "));
            if (ticketAddAmount >= 0 && ticketAddAmount <= 1000) {
                totalTickets += ticketAddAmount;
                console.log(`Total tickets: ${totalTickets}`);
                break;
            } else {
                console.log("Please enter a valid number between 0 and 1000.");
                break;
            }

        case "3":
            console.log(`Total tickets: ${totalTickets}`);
            break;
        case "4":
            showGiftList();
            break;
        case "5":
            break;
        default:
            console.log("Please enter a valid number!");
    }
} while (!(action === "5"));
console.log("Have a nice day!");
