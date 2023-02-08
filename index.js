const submitButton = document.getElementById("btn-prime");
const ratingBoton = document.querySelectorAll(".boton");  
const cardRating = document.querySelector(".card-rating");
const cardThanks = document.querySelector(".card-thanks");
const finalScore = document.getElementById("f_score");
let rating = 0; 



ratingBoton.forEach(item => {
    item.addEventListener('click', ()=> {
            rating = item.innerHTML;
        });
});

submitButton.addEventListener('click', ()=>{
    if(rating >= 1){
        cardRating.style.display = "none";
        cardThanks.style.display = "flex";
        finalScore.innerHTML = rating;
    } else {
        Swal.fire({
            title: 'Error!',
            text: 'Selecciona un rating!',
            icon: 'error',
            confirmButtonText: 'Ok',
            background: '#000000',
            color: 'hsl(217, 12%, 63%)'
          });
    }
});