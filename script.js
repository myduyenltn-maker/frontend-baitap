const messageButton = document.querySelector('#messageButton');
const message = document.querySelector('#message');
const year = document.querySelector('#year');

year.textContent = new Date().getFullYear();

messageButton.addEventListener('click', () => {
  message.textContent = 'Bạn làm được mà! Cứ kiên trì từng bước nhé ✨';
});
