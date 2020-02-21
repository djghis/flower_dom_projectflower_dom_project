document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

  const button = document.createElement('button');
  const body = document.querySelector('body');
  body.appendChild(button);
  button.textContent = 'Delete All';
  button.addEventListener('click', handleButtonClick);
});

const handleButtonClick = function () {
  const stock = document.querySelector('ul');
  stock.innerHTML = '';
};

const handleFormSubmit = function () {
  event.preventDefault();
  const newItem = document.createElement('li');
  const item = document.querySelector('ul');
  item.appendChild(newItem);
  newItem.textContent = `Name: ${event.target.name.value}, Description: ${event.target.description.value}, Category: ${event.target.category.value}.`
  event.target.reset();
};
