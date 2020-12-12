const incrementQuantity = (para) => {
  let valueElm = document.querySelector(`.quantity.${para}`);
  let value = document.querySelector(`.quantity.${para}`).innerText;

  value++;
  valueElm.innerHTML = value;
  setTotal();  
}

const decrementQuantity = (para) => {
  let valueElm = document.querySelector(`.quantity.${para}`);
  let value = document.querySelector(`.quantity.${para}`).innerText;

  value--;
  if(value < 0 ){
    value = 0;
    valueElm.innerHTML = value;
    showTotal();    
  } else {
    valueElm.innerHTML = value;
    setTotal();  
  }
}

const setTotal = () => {
  for(let i=1; i<=2; i++){
    eval(`makanan${i} = document.querySelector('.quantity.makanan-${i}').innerText;`);
    eval(`minuman${i} = document.querySelector('.quantity.minuman-${i}').innerText;`);
  }
  showTotal();
}

const showTotal = () => {
  let totalElm = document.querySelector('.total');
  let total = (makanan1*100000)+(makanan2*50000)+(minuman1*25000)+(minuman2*20000);

  totalElm.innerHTML = `
    Nasi Goreng : ${makanan1} <br>
    Mie Goreng : ${makanan2} <br>
    Es Teh : ${minuman1} <br>
    Air Mineral : ${minuman2} <br>
    <br>
    Total :  ${total}
  `;  
}


