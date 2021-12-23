import throttle from "lodash.throttle";
const refs = {
  form: document.querySelector('.feedback-form'),
}

const FEEDBAKC_FORM_STATE = "feedback-form-state";

refs.form.addEventListener('submit', throttle(onSubmitForm,500));

populateData()
function onSubmitForm(e) { 
  e.preventDefault();
  
  const formEl = e.currentTarget.elements;
  
  const email = formEl.email.value;
  const message = formEl.message.value;
 
  const data = {
    email,
    message,
  }
   localStorage.setItem(FEEDBAKC_FORM_STATE,JSON.stringify(data))
   console.log('my-data', data);
  
  refs.form.reset();
  localStorage.removeItem(FEEDBAKC_FORM_STATE)
}

function populateData() { 
  const saveData = localStorage.getItem(FEEDBAKC_FORM_STATE); { 
    if (saveData) { 
      console.log(saveData);
    }
  }
}