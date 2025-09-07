const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const weight = parseInt(document.getElementById("weight").value);
  const height = parseInt(document.getElementById("height").value);
  const result = document.getElementById("results");
  if (weight === "" || isNaN(weight) || (weight <= 0)) {
    result.innerHTML = "Please provide a valid weight!";
    return;
  }
  if (height === "" || isNaN(height) || (height <= 0)) {
    result.innerHTML = "Please provide a valid height!";
    return;
  }
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  if (bmi < 18.6) {
    result.innerHTML = `Under Weight : <span>${bmi}</span>`;
  } else if (bmi >= 18.6 && bmi < 24.9) {
    result.innerHTML = `Normal : <span>${bmi}</span>`;
  } else {
    result.innerHTML = `Over Weight : <span>${bmi}</span>`;
  }
});
