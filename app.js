//  get form to add an event
const firstFormDOM = document.querySelector('#firstForm')
firstFormDOM.addEventListener('submit', calculateFunction);

function calculateFunction(e) {
  e.preventDefault();

  const amountDOM = document.getElementById('amount');
  const interestDOM = document.getElementById('interest');
  const monthDOM = document.getElementById('month');
  const monthlyPaymentDOM = document.getElementById('monthlyPayment');
  const totalPaymentDOM = document.getElementById('totalPayment');
  const interestPaymentDOM = document.getElementById('interestPayment');

  const principal = amountDOM.value;
  //  ( KKDF 15 % + BSMV 10 % = 25 % tax added == 1.25)
  const interest = (parseFloat(interestDOM.value) / 100) * 1.25 ; 
  const month = monthDOM.value;

  const x = Math.pow((1+interest), month);
  const monthlyPayment = principal * ((interest * x) / (x - 1));

  // If you don't enter valid inputs, you will take an alert
  if(isFinite(monthlyPayment)) {

    displayImg();
    setTimeout(displayImg, 2000); // After 2 sec d-none will be deleted with toggle.

    monthlyPaymentDOM.value = monthlyPayment.toFixed(2);
    totalPaymentDOM.value = (monthlyPayment * month).toFixed(2);
    interestPaymentDOM.value = ((monthlyPayment * month) - principal).toFixed(2);

    setTimeout(displaySecondForm, 2000);
  } else {
    if(!headingContainerDOM.firstElementChild.nextElementSibling){
      makeAlert('Please type validate inputs!');
    }   
  }
}

const headingContainerDOM = document.getElementById('headingContainer');

function makeAlert (alert) {
  const headingDOM = document.getElementById('heading');
  const alertLi = document.createElement('div');
  alertLi.classList.add('alert', 'alert-warning');
  alertLi.setAttribute('role', 'alert');
  alertLi.innerHTML = alert;
  headingContainerDOM.insertBefore(alertLi, headingDOM);

  setTimeout(deleteAlert, 2000);  
  
}



function deleteAlert () {
  document.querySelector('.alert').remove();
}

function displayImg () {
  document.querySelector('img').classList.toggle('d-none');
}

function displaySecondForm () {
  document.querySelector('#secondForm').classList.remove('d-none');
}

