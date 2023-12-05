import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageInput = feedbackForm.querySelector('textarea[name="message"]');
const localStorageKey = 'feedback-form-state';

window.addEventListener('load', () => {
  const savedState = JSON.parse(localStorage.getItem(localStorageKey));

  if (savedState) {
    emailInput.value = savedState.email;
    messageInput.value = savedState.message;
  }
});

const updateLocalStorage = throttle(() => {
  const currentState = {
    email: emailInput.value,
    message: messageInput.value,
  };

  localStorage.setItem(localStorageKey, JSON.stringify(currentState));
}, 500);

feedbackForm.addEventListener('input', updateLocalStorage);

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();

  console.log(JSON.parse(localStorage.getItem(localStorageKey)));

  localStorage.removeItem(localStorageKey);
  emailInput.value = '';
  messageInput.value = '';
});
