const giftList = ["Teddy Bear", "Big Red Ball", "Huge Bear", "Candy", "Stuffed Tiger", "Stuffed Dragon",
    "Skateboard", "Toy Car", "Basketball", "Scary Mask"];

console.log(`WELCOME TO THE CARNIVAL GIFT SHOP!
Hello friend! Thank you for visiting the carnival!
Here's the list of gifts:
`)
giftList.forEach(function(gift) {
    console.log(gift);
});