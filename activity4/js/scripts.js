var user = 'Nicky';
var salutation = 'Hello, ';
var greeting = salutation + user + '! Here are the latest Atom Reviews';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

var price = 25,
    studentDiscount = .15,
    studentPrice = price - (price * studentDiscount),
    priceEl = document.getElementById('price'),
    studentPriceEl = document.getElementById('student-price');

priceEl.textContent = price.toFixed(2);
studentPriceEl.textContent = studentPrice.toFixed(2)