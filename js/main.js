const height = document.getElementById('height');
const age = document.getElementById('age');
const weight = document.getElementById('weight');

const female = document.getElementById('female');
const male = document.getElementById('male');

const factorPAL = document.getElementById('PAL-factor');
const submitBtn = document.getElementById('btn');

const bmrKcal = document.getElementById('basalMetRate_inKcal');
const bmrKJ = document.getElementById('basalMetRate_inKJ');
const tdeeKcal = document.getElementById('totalDailyEnergyExpenditure_inKcal');
const tdeeKJ = document.getElementById('totalDailyEnergyExpenditure_inKJ');

function calculateBMR_and_TDEE(event) {
  event.preventDefault();

  let inputHeight = height.value.replace(',', '').replace('.', '');
  /* oder wenn kleiner als 3 dann * 100 */
  let bmr;
  let tdee;

  if (
    !(
      height.value &&
      age.value &&
      weight.value &&
      (female.checked || male.checked) &&
      factorPAL.value
    )
  ) {
    window.alert('Überprüfen Sie bitte Ihre Angaben');
  }

  if (female.checked) {
    bmr = 655.1 + 9.6 * weight.value + 1.8 * inputHeight - 4.7 * age.value;
    tdee =
      (655.1 + 9.6 * weight.value + 1.8 * inputHeight - 4.7 * age.value) *
      factorPAL.value;
  } else {
    bmr = 664.7 + 13.7 * weight.value + 5 * inputHeight - 6.8 * age.value;
    tdee =
      (664.7 + 13.7 * weight.value + 5 * inputHeight - 6.8 * age.value) *
      factorPAL.value;
  }

  bmrKcal.innerHTML = bmr.toFixed(0);
  bmrKJ.innerHTML = (bmr * 4.184).toFixed(0);
  tdeeKcal.innerHTML = tdee.toFixed(0);
  tdeeKJ.innerHTML = (tdee * 4.184).toFixed(0);
}

submitBtn.addEventListener('click', calculateBMR_and_TDEE);
