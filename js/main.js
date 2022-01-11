const Open = document.getElementById('News');
const Close = document.getElementById('Close-news');
const Modal = document.getElementById('Modal')


Open.addEventListener('click', () => {
    Modal.classList.add('active');
});
Close.addEventListener('click', () => {
    Modal.classList.remove('active');
});


// Set the date we're counting down to
// var countDownDate = new Date("August 15, 2021 18:00:00").getTime();

// Update the count down every 1 second
// var x = setInterval(function () {

//     // Get todays date and time
//     var now = new Date().getTime();

//     // Find the distance between now an the count down date
//     var distance = countDownDate - now;

//     // Time calculations for days, hours, minutes and seconds
//     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     // Display the result in the element with id="demo"
//     document.getElementById("demo").innerHTML = "Proxima actualizacion: " + days + " días, " + hours + " horas, "
//         + minutes + " minutos y " + seconds + " segundos ";

//     // If the count down is finished, write some text 
//     if (distance < 0) {
//         clearInterval(x);
//         document.getElementById("demo").innerHTML = " ";
//     }
// }, 1000);



function changeColor(number) {
    var navElements = document.querySelectorAll('#back-image');
    navElements.forEach(function (navElements) {
        if (navElements.classList.contains('top-line')) { navElements.className = 'top-line ' + number; }
        else { navElements.className = number; }
    });
};

let formWrapper = document.getElementById("formWrapper")
function Discover(){
    formWrapper.classList.remove ("hidden")
}

var form = document.getElementById("my-form");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        status.innerHTML = "Thanks for reaching out!";
        activate()
        form.reset()
    }).catch(error => {
        status.innerHTML = "Oops! Something went wrong. Try again later."
    });
}
form.addEventListener("submit", handleSubmit)


let buttonText = document.getElementById("my-form-button")
const tickMark = "<svg width=\"58\" height=\"45\" viewBox=\"0 0 58 45\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#fff\" fill-rule=\"nonzero\" d=\"M19.11 44.64L.27 25.81l5.66-5.66 13.18 13.18L52.07.38l5.65 5.65\"/></svg>";

buttonText.innerHTML = "Submit";
function activate() {
    if (buttonText.innerHTML !== "Submit") {
        buttonText.innerHTML = "Submit";
    } else if (buttonText.innerHTML === "Submit") {
        buttonText.innerHTML = tickMark;
    }
    buttonText.classList.toggle('button__circle');
};

