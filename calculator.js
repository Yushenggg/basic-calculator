let currNum = document.querySelector("#curNum")
let history = document.querySelector("#history")
let allNums = "0123456789."
let allOperands = "+-*/"
let storedNumber
let operand

// Create number button listeners
document.querySelectorAll(".numberBtn").forEach((numberBtn)=>{
    numberBtn.addEventListener("click",(e)=>{
        addToCurrNum(e.target.value)

    })
})

// Create function button Listeners
document.querySelector("#clear").addEventListener("click", clearCurr)
document.querySelector("#del").addEventListener("click",delCurrNum)
document.querySelector("#allClear").addEventListener("click",clearAll)

// Add KeyboardListener
document.addEventListener(
    "keydown",(e)=>{
        if(allNums.includes(e.key)) addToCurrNum(e.key)
        else if(e.key =="Backspace" || e.key=="Delete") delCurrNum()
    }       
)

// Create Operand button Listeneres
document.querySelectorAll(".operand").forEach((operandBtn)=>{
    operandBtn.addEventListener("click",(e)=>{
        if (storedNumber!=undefined){

        }
        if(currNum.textContent!=="0"){
        storeNum()
        operand = e.target.value
        history.textContent = storedNumber + operand 
        }
    })
})

// Add Num Logic
function addToCurrNum(value){
    let limit =13
    if(currNum.textContent=="0"){
        if(value==".") {
            currNum.textContent+=value 
            return}
    }
    else if(currNum.textContent.includes(".")) limit =14
    if( currNum.textContent.length<limit) currNum.textContent= (currNum.textContent=="0")?value:currNum.textContent+value
}

// Store Num
function storeNum(){
    inputNum = currNum.textContent
    if(inputNum[-1]==".") inputNum = inputNum.slice(0,-1)
    storedNumber = inputNum
    clearCurr()
    
}

//Clear CurrNum
function clearCurr(){
    currNum.textContent = "0"
}
//Del
function delCurrNum(){
    if(currNum.textContent.length>1)currNum.textContent = currNum.textContent.slice(0,-1)
    else if (currNum.textContent!="0") currNum.textContent ="0"
}
//All Clear
function clearAll(){
    history.textContent = ""
    currNum.textContent = "0"
    storedNumber = undefined
    operand = undefined
}
function evaluateHistory(){
    switch(operand){
        case "+":
            break
        case "-":
            break
        case "/":
            break
        case "*":
            break
        case "=":
            break
            
    }
}