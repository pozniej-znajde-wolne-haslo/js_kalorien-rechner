const height = document.getElementById('height');
const age = document.getElementById('age');
const weight = document.getElementById('weight');

const female = document.getElementById('female');
const male = document.getElementById('male');

const activityLevel = document.getElementById('activityLevel');
const submitBtn = document.getElementById('btn');

const bmrKcal = document.getElementById('basalMetRate_inKcal');
const bmrKJ = document.getElementById('basalMetRate_inKJ');
const tdeeKcal = document.getElementById('totalDailyEnergyExpenditure_inKcal');
const tdeeKJ = document.getElementById('totalDailyEnergyExpenditure_inKJ');


function calculateBMR_and_TDEE (event) {

  event.preventDefault(); 

  let inputHeight = (height.value).toString().replace(",", "").replace(".", "");
  /* oder wenn kleiner als 3 dann * 100 */
  let bmr;
  let tdee;


  if (female.checked) {
    bmr = 664.7 + (13.7 * weight.value) + (5 * inputHeight) - (6.8 * age.value);
    tdee = (664.7 + (13.7 * weight.value) + (5 * inputHeight) - (6.8 * age.value)) * activityLevel.value;
  } else {
    bmr = 655.1 + (9.6 * weight.value) + (1.8 * inputHeight) - (4.7 * age.value);
    tdee = 655.1 + (9.6 * weight.value) + (1.8 * inputHeight) - (4.7 * age.value) * activityLevel.value;
  }

  bmrKcal.innerHTML = bmr.toFixed(0);
  bmrKJ.innerHTML = (bmr * 4.184).toFixed(0);
  tdeeKcal.innerHTML = tdee.toFixed(0);
  tdeeKJ.innerHTML = (tdee * 4.184).toFixed(0);
}

submitBtn.addEventListener("click", calculateBMR_and_TDEE);

