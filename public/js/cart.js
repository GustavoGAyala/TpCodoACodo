// let default_value = 0;
// let quantity = document.getElementById('quantity');

// function add(){
//   let quantity = document.getElementById('quantity').innerHTML = ++default_value; // se incrementa en 1 el valor que tenga.
// }

// function subtract(){
//   if(quantity.innerHTML == '1') return;//si el valor es 1 deja de restar
//   else{
//   quantity.innerHTML = --default_value;
//   } //resta de a 1 al valor 
//  }



let quantity = document.getElementById('quantity');

function add(){
  let quantity_value = parseInt(quantity.innerHTML);
  quantity.innerHTML = quantity_value + 1;
}

function subtract(){
  let quantity_value = parseInt(quantity.innerHTML);
  if (quantity_value == 1)return;
  quantity.innerHTML = quantity_value - 1;
}
document.getElementById('add').addEventListener('click',add);

document.getElementById('subtract').addEventListener('click',subtract);







