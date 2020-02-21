document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleFormSubmit);

  // const deleteAllButton = document.createElement('button');
  // const body = document.querySelector('body');
  // body.appendChild(deleteAllButton);
  // deleteAllButton.textContent = 'Delete All';
  // deleteAllButton.addEventListener('click', handleDeleteButtonClick);
});

// const handleDeleteButtonClick = function () {
//   const stock = document.querySelector('ul');
//   stock.innerHTML = '';
// };

const handleFormSubmit = function (event) {
  event.preventDefault();

  const stockListItem = createStockListItem(event.target);
  const stockList = document.querySelector('#stock');
  stockList.appendChild(stockListItem);

  event.target.reset();
};

const createStockListItem = function (form) {
  const stockListItem = document.createElement('li');
  stockListItem.classList.add('stock-list-item');

  const category = document.createElement('h2');
  category.textContent = form.category.value;
  stockListItem.appendChild(category);

  const name = document.createElement('h2');
  name.textContent = form.name.value;
  stockListItem.appendChild(name);

  const description = document.createElement('h3');
  description.textContent = form.description.value;
  stockListItem.appendChild(description);




  return stockListItem;

};



// const handleFormSubmit = function () {
//   event.preventDefault();
//   const newItem = document.createElement('li');
//   const list = document.querySelector('ul');
//   list.appendChild(newItem);
//   newItem.textContent = `Name: ${event.target.name.value}, Description: ${event.target.description.value}, Category: ${event.target.category.value}.`
//   event.target.reset();
// };
