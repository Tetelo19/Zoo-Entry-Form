
var totalPrice = ticketPrice * quantity;document.getElementById('entryForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var age = parseInt(document.getElementById('age').value);
    var quantity = parseInt(document.getElementById('quantity').value);
    var ticketPrice = calculateTicketPrice(age);
    var totalPrice = ticketPrice * quantity;
    document.getElementById('ticketPrice').innerText = "Ticket Price: R" + ticketPrice;
    document.getElementById('totalPrice').innerText = "Total Price: R" + totalPrice;
    document.getElementById('tetelo').style.display='block';
});
function calculateTicketPrice(age) {
    if (age <= 3 || age >= 65) {
        return 0;
    } else if (age >= 3 && age <= 12) {
        return 100;
    } else if (age > 12 && age <= 18) {
        return 150;
    } else {
        return 200;
    }
}
