const button1 = document.getElementById("change-text-btn-1");
const button2 = document.getElementById("change-text-btn-2");
const button3 = document.getElementById("change-text-btn-3");
const text = document.getElementById("text");

button1.addEventListener("click", () => {
  text.textContent = "FLOROVIVAISMO";
});

button2.addEventListener("click", () => {
  text.textContent = "INFRASTRUTTURE VERDI";
});

button3.addEventListener("click", () => {
  text.textContent = "EDILIZIA";
});



const toggleBtn = document.querySelector('.toggleBtn');
const myDivs = document.querySelectorAll('.myDiv');

toggleBtn.addEventListener('click', function() {
  myDivs.forEach(function(myDiv) {
    myDiv.classList.toggle('myClass');
  });
}); 