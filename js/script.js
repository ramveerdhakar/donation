let box1 = document.getElementsByClassName('data')[0]
let box2 = document.getElementsByClassName('data')[1]
let box3 = document.getElementsByClassName('data')[2]
let box4 = document.getElementsByClassName('data')[3]
let box5 = document.getElementsByClassName('data')[4]
let box6 = document.getElementsByClassName('data')[5]
let box7 = document.getElementsByClassName('data')[6]
let box8 = document.getElementsByClassName('data')[7]

let paymentOption = document.getElementById('payment-option')


function activeCreditCard() {
    box1.style.display="none"
    box2.style.display="none"
    box3.style.display="none"
    box4.style.display="block"
    box5.style.display="block"
    box6.style.display="block"
    box7.style.display="block"
    box8.style.display="block"
    paymentOption.innerHTML="Credit Card"
}

function activePaypal() {
    box1.style.display="none"
    box2.style.display="block"
    box3.style.display="block"
    box4.style.display="block"
    box5.style.display="none"
    box6.style.display="block"
    box7.style.display="none"
    box8.style.display="none"
    paymentOption.innerHTML="Paypal"
}

function activeNetBanking() {
    box1.style.display="block"
    box2.style.display="block"
    box3.style.display="block"
    box4.style.display="block"
    box5.style.display="none"
    box6.style.display="block"
    box7.style.display="none"
    box8.style.display="none"
    paymentOption.innerHTML="Net Banking"
}

function activeUpi() {
    box1.style.display="none"
    box2.style.display="block"
    box3.style.display="block"
    box4.style.display="block"
    box5.style.display="none"
    box6.style.display="block"
    box7.style.display="none"
    box8.style.display="none"
    paymentOption.innerHTML="UPI"
}


function activePaymentBar(elem) {

    var a = document.getElementsByTagName('h3')

    for (i = 0; i < a.length; i++) {
        a[i].classList.remove('active');
    }

    elem.lastElementChild.classList.add('active');
 
}


