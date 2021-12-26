 import throttle from "lodash.throttle";
const FEEDBAKC_KEY = "feedback-form-state";

const ref = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea')
}

const { form, input, textarea } = ref;

saveValue();
form.addEventListener('input', throttle(onInputForm, 500));
form.addEventListener('submit',onSubmitForm)


function onInputForm() { 
 let feedbackForm  = {
  email: input.value,
  textarea: textarea.value
  };
 localStorage.setItem(FEEDBAKC_KEY,JSON.stringify(feedbackForm))
}

function onSubmitForm(e) {
  e.preventDefault();
  
  const inputValueEmail = e.currentTarget.elements.email.value;
  const textArea = textarea.value;

  const options = {
    email: inputValueEmail,
    textarea: textArea
  };
  console.log(options);
  localStorage.removeItem(FEEDBAKC_KEY);
  form.reset();
}

function saveValue() { 
  const saveData = JSON.parse(localStorage.getItem(FEEDBAKC_KEY));
  if (saveData) { 
    input.value = saveData.email;
    textarea.value = saveData.textarea;
  }
}






