fetch(`https://api.frankfurter.app/currencies`)
.then(res=> res.json())
.then(res=>display(res))  

let select=document.querySelectorAll(".currency")
let input=document.getElementById("input")
let result=document.getElementById("result")
let btn =document.getElementById("btn")
function display(res){
    let curr=Object.entries(res)
    for(let i=0;i<curr.length;i++){
        let opt=`<option value="${curr[i][0]}">${curr[i][0]}</option>`
        select[0].innerHTML+=opt
        select[1].innerHTML+=opt
    }
}
btn.addEventListener("click",()=>{
    let inputValue=input.value 
    let currency1=select[0].value
    let currency2=select[1].value

    if(currency1==currency2){
        alert("nope")
    }
    else{
        convert(currency1,currency2,inputValue)
    }
})
function convert(currency1,currency2,inputValue){
    fetch(`https://api.frankfurter.dev/v1/latest?base=${currency1}&symbols=${currency2}`)
    .then((resp) => resp.json())
    .then((data) => {
      
        
        const exchangeRate = Object.values(data.rates)[0];
        const convertedAmount = (inputValue * exchangeRate).toFixed(2);
        result.value = convertedAmount; // Set the result value
    })
    .catch((error) => {
        console.error("Error fetching exchange rate:", error);
    });
}