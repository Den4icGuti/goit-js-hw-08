 import throttle from "lodash.throttle";
const FEEDBAKC_KEY = "feedback-form-state";

const ref = {
  form: document.querySelector('.feedback-form'),
  input:document.querySelector('.feedback-form input'),
  textarea:document.querySelector('.feedback-form textarea')
}

const feedbackForm = {};

ref.form.addEventListener('submit', onSubmitForm);
ref.form.addEventListener('input', throttle(onInputForm, 500));

populationForm();
function onSubmitForm(e) {
   e.preventDefault();
   e.target.reset();
  localStorage.removeItem(FEEDBAKC_KEY);
  console.log(feedbackForm)
 }

function onInputForm(e) { 
  const value = e.target.value;
  feedbackForm[e.target.name] = value;
  localStorage.setItem(FEEDBAKC_KEY, JSON.stringify(feedbackForm));
}

function populationForm() { 
  const saveData = JSON.parse(localStorage.getItem(FEEDBAKC_KEY));
  if (saveData) {
    ref.input.value = saveData.email || '';
    ref.textarea.value = saveData.message || '';
  }
}


