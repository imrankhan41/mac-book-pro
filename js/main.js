// function creation to clean code
function getFirstInput(inputId,value,memorysize){
    const inputValue = document.getElementById(inputId);
    inputValue.value=value;
    const inputFirstValue = inputValue.value;
    const memory = document.getElementById(memorysize);
    let memoryPrice =  memory.innerText;
    memory.innerText =inputFirstValue;
    calculateTotal()
}

// addition of value at button 
document.getElementById("eight-gb-memory" ).addEventListener("click",function(){
     getFirstInput("eight-gb-memory",0,"memory") 
});
document.getElementById("sixteent-gb-memory").addEventListener("click",function(){
getFirstInput("sixteent-gb-memory",180,"memory");
})

document.getElementById("two-fifty-six").addEventListener("click",function(){
    getFirstInput("two-fifty-six",0,"memory-ssd"); 
})
document.getElementById("five-one-two" ).addEventListener("click",function(){
    getFirstInput("five-one-two" ,100,"memory-ssd"); 
})
document.getElementById("one-tera-bite" ).addEventListener("click",function(){
    getFirstInput("one-tera-bite" ,180,"memory-ssd");
})
document.getElementById("Aug-25-delivery-charge").addEventListener("click",function(){
    getFirstInput("Aug-25-delivery-charge" ,0,"delivery-charge");
})
document.getElementById("Aug-21-delivery-charge").addEventListener("click",function(){
    getFirstInput("Aug-21-delivery-charge" ,20,"delivery-charge");
})

// createion of another function of calculateTotal()
 function getValue(product){
     const price = document.getElementById(product);
    const priceAmount = price.innerText;
  const PriceValue = parseInt(priceAmount);
    return PriceValue;   
 }
//  creation of funtion to calculate total value
 function calculateTotal(){
 const bestPrice = getValue("best-price");
 const extraMemoryPrice = getValue("memory");
const  ssdPriceValue = getValue("memory-ssd");
const deliveryValue = getValue("delivery-charge");
const totalPrice = bestPrice  + extraMemoryPrice + ssdPriceValue + deliveryValue;
document.getElementById("total-price").innerText = totalPrice;
document.getElementById("final-total").innerText = totalPrice;
return totalPrice;
 }

//eventListener creation for promo code
document.getElementById("button-apply").addEventListener("click",function(){
    const priceProduct = calculateTotal();
  const promoCode = document.getElementById("promo-code");
  const promoCodeValue = promoCode.value ;

  
  if(promoCodeValue == "stevekaku"){
    const discount = parseFloat(priceProduct*(20/100)) ;
    const total = priceProduct - discount;
    document.getElementById("final-total").innerText =  total;
  }
  promoCode.value = "";
})



