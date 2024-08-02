let currNum = document.querySelector("#curNum")
let history = document.querySelector("#history")
let allNums = "0123456789."
let allOperands = "+-*/"
let storedNumber
let operand
let isZero = false

// Create number button listeners
document.querySelectorAll(".numberBtn").forEach((numberBtn)=>{
    numberBtn.addEventListener("click",(e)=>{
        addToCurrNum(e.target.value)

    })
})

// Create function button Listeners
document.querySelector("#clear").addEventListener("click", ()=>{
    if(!allOperands.includes(history.textContent[-1])) clearAll()
    else clearCurr})
document.querySelector("#del").addEventListener("click",delCurrNum)
document.querySelector("#allClear").addEventListener("click",clearAll)

// Add KeyboardListener
document.addEventListener(
    "keydown",(e)=>{
        
        if(allNums.includes(e.key)) addToCurrNum(e.key)
        else if(e.key =="Backspace" || e.key=="Delete") delCurrNum()
        else if (allOperands.includes(e.key)) operate(e.key)
        else if (e.key =="Enter") {
            e.preventDefault()
            equal()}
    }       
)

// Create Operand button Listeneres
document.querySelectorAll(".operand").forEach((operandBtn)=>{
    operandBtn.addEventListener("click",(e)=>{
          operate(e.target.value)
    })
})
// Equal Listener
document.querySelector("#equal").addEventListener("click",equal)

// Add Num Logic
function addToCurrNum(value){
    let limit =13
    if (operand=="="){
        clearAll()
        addToCurrNum(value)
        return
    }
    if(currNum.textContent=="0"||currNum.textContent=="-0"){
        if(value==".") {
            currNum.textContent+=value 
            return}
    }
    else if (currNum.textContent.includes(".") && value ==".") return
    else if(currNum.textContent.includes(".")) limit =14
    if( currNum.textContent.length<limit) {
        if(currNum.textContent=="0")currNum.textContent= value
        else if (currNum.textContent=="-0")currNum.textContent="-"+value
        else currNum.textContent+=value
    }
}

// Store Num
function storeNum(){
    inputNum = currNum.textContent
    if(inputNum[-1]==".") inputNum = inputNum.slice(0,-1)
    storedNumber = inputNum
    console.log(storedNumber)
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

// Operate
function operate(input){
    if(currNum.textContent=="0" && input=="-"){
        currNum.textContent = "-0"
        return
    }
    else if(currNum.textContent=="-0" && input =="-"){
        currNum.textContent = "0"
        return
    }
    if (storedNumber!=undefined && operand!="="){
        let result = evaluate()
        currNum.textContent = result
    }

    storeNum()
    operand = input
    history.textContent = storedNumber + operand 

}
// Equal
function equal(){
    
    if(operand=="=" || operand==undefined) return
    let result = evaluate()
    history.textContent += currNum.textContent
    currNum.textContent = result
    storedNumber = result
    operand = "="
}

// evaluate
function evaluate(){
    
    num1 = parseFloat(storedNumber)
    num2 = parseFloat(currNum.textContent)
    console.log("Stored: "+storedNumber+" Current: "+currNum.textContent)
    let result
    switch(operand){
        case "+":
            history.textContent = storedNumber + operand
            result= num1 + num2
            break
        case "-":
            history.textContent = storedNumber + operand
            result= num1 - num2
            break
        case "/":
            history.textContent = storedNumber + operand
            result= num1/num2
            break
        case "*":
            history.textContent = storedNumber + operand
            result= num1*num2
            break
    }
    result = result.toString()
    let size
    if (result.includes(".")) size = result.indexOf(".")+1
    else size = result.length
    if (size>=14) {result= "OVERFLOW"}
    else if (result.length>=14) result= result.slice(0,14)
    return result
    
}