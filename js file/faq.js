const question = document.querySelectorAll(".question");
const answer = document.querySelectorAll(".answer");
const plus = document.querySelectorAll(".faq .plus");
const minus = document.querySelectorAll(".faq .minus");

for(let i = 0; i < question.length; i++){
    question[i].addEventListener('click', function(){
        answer[i].classList.toggle('answer-visible');
        if(getComputedStyle(plus[i]).display == "block") {
            plus[i].style.display = "none";
            minus[i].style.display = "block";
        }
        else {
            plus[i].style.display = "block";
            minus[i].style.display = "none";
        }
    })
}
