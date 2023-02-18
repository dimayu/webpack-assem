const itemsSlide = document.querySelectorAll(".calculator-input");
let cost = document.querySelector("#cost");
let fee = document.querySelector("#fee");
let term = document.querySelector("#term .calculator-input__value--number").value;
let percentValue = document.querySelector("#percent");
let percent;
let pay = 0;
let costCar = cost.querySelector(".calculator-input__value--number").value;
let costFee = fee.querySelector(".calculator-input__value--number").value;

itemsSlide.forEach((item) => {
  let slider = item.querySelector(".calculator-input__value--range");
  let input = item.querySelector(".calculator-input__value--number");
  
  function sliderInput() {
    slider.value = input.value.toLocaleString();
    percent = Math.round((costFee * 100) / costCar);
    percentValue.innerHTML = (percent === Infinity) ? 0 : percent;
    pay = (costCar - costFee) * (0.05 * Math.pow((1 + 0.05), term)) / (Math.pow((1 + 0.05), term) - 1);
    console.log(pay);
  }
  
  input.addEventListener("change", sliderInput);
  
  function inputSlider() {
    input.value = slider.value.toLocaleString();
    percent = Math.round((fee.querySelector(".calculator-input__value--number").value * 100) / cost.querySelector(".calculator-input__value--number").value);
    percentValue.innerHTML = (percent === Infinity) ? 0 : percent;
    pay = (costCar - costFee) * (0.05 * Math.pow((1 + 0.05), term)) / (Math.pow((1 + 0.05), term) - 1);
    
    console.log(pay);
  }
  
  slider.addEventListener("change", inputSlider);
});