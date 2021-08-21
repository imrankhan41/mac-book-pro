function getFirstInput(inputId,value,memorysize){
    const inputValue = document.getElementById(inputId);
    inputValue.value=value;
    const inputFirstValue = inputValue.value;
    const memory = document.getElementById(memorysize);
    let memoryPrice =  memory.innerText;
    memory.innerText =inputFirstValue;
    calculateTotal()
}

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
 function getValue(product){
     const price = document.getElementById(product);
    const priceAmount = price.innerText;
  const PriceValue = parseInt(priceAmount);
    return PriceValue;  
 }
 function calculateTotal(){
 const bestPrice = getValue("best-price");
 const extraMemoryPrice = getValue("memory");
const  ssdPriceValue = getValue("memory-ssd");
const deliveryValue = getValue("delivery-charge");
getTotalPrice()
 }
 function getTotalPrice(price){
    const totalPrice = bestPrice  + extraMemoryPrice + ssdPriceValue + deliveryValue;
    document.getElementById("total-price").innerText = totalPrice;
    return totalPrice;
 }

 document.getElementById("button-apply").addEventListener("click",function(){

     const totalProductPrice =getTotalPrice();
     const inputValue = document.getElementById("cupon code");
     const inputCode = inputValue.value;
   
     if(inputCode == "stevekaku"){
      
         const discount = totalProductPrice *(20/100);
         const total = totalProductPrice - discount;
         document.getElementById("final-total").innerText =  total;
         inputValue.value = "";
     }
 })