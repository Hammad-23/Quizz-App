








var questions = [{"category":"Science: Computers","type":"multiple","difficulty":"easy","question":"What does the &quot;MP&quot; stand for in MP3?","correct_answer":"Moving Picture","incorrect_answers":["Music Player","Multi Pass","Micro Point"]},{"category":"Science: Computers","type":"multiple","difficulty":"easy","question":"The programming language &#039;Swift&#039; was created to replace what other programming language?","correct_answer":"Objective-C","incorrect_answers":["C#","Ruby","C++"]},{"category":"Science: Computers","type":"multiple","difficulty":"easy","question":"In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?","correct_answer":"Final","incorrect_answers":["Static","Private","Public"]},{"category":"Science: Computers","type":"multiple","difficulty":"easy","question":"What does the Prt Sc button do?","correct_answer":"Captures what&#039;s on the screen and copies it to your clipboard","incorrect_answers":["Nothing","Saves a .png file of what&#039;s on the screen in your screenshots folder in photos","Closes all windows"]},{"category":"Science: Computers","type":"multiple","difficulty":"easy","question":"Which computer language would you associate Django framework with?","correct_answer":"Python","incorrect_answers":["C#","C++","Java"]},{"category":"Science: Computers","type":"multiple","difficulty":"easy","question":"The numbering system with a radix of 16 is more commonly referred to as ","correct_answer":"Hexidecimal","incorrect_answers":["Binary","Duodecimal","Octal"]},{"category":"Science: Computers","type":"multiple","difficulty":"easy","question":"This mobile OS held the largest market share in 2012.","correct_answer":"iOS","incorrect_answers":["Android","BlackBerry","Symbian"]},{"category":"Science: Computers","type":"multiple","difficulty":"easy","question":"The C programming language was created by this American computer scientist. ","correct_answer":"Dennis Ritchie","incorrect_answers":["Tim Berners Lee","al-Khw\u0101rizm\u012b","Willis Ware"]},{"category":"Science: Computers","type":"multiple","difficulty":"easy","question":"How long is an IPv6 address?","correct_answer":"128 bits","incorrect_answers":["32 bits","64 bits","128 bytes"]},{"category":"Science: Computers","type":"multiple","difficulty":"easy","question":"In computing, what does LAN stand for?","correct_answer":"Local Area Network","incorrect_answers":["Long Antenna Node","Light Access Node","Land Address Navigation"]}]
var selectedValue = []

var radioVal ;
function generateQuizz() {

    var questionElement = document.getElementById("questions")
   console.log(questionElement)
for (var i = 0; i<questions.length; i++){

// console.log(questions[i])



var questionList = document.createElement("LI")




var title = document.createElement("H3")
 
// option.innerHTML = questions[i].incorrect_answers + correct_answer

title.innerHTML = questions[i].question

questionList.appendChild(title)


var option = questions[i].incorrect_answers
var correct = questions[i].correct_answer

option.push(correct)
 
for (var j = 0; j<option.length; j++){
    var radio = document.createElement("INPUT")
    
    // console.log(radio)
radio.setAttribute("type", "radio")
radio.setAttribute("name",i)
radio.setAttribute("class","rad")
radio.setAttribute("value",option[j])
radio.setAttribute("onchange","getVal(event)")
// var radioVal = document.getElementsByName(i)
// // console.log(radioVal)
// radio.value = option[j]
// console.log(option[j])
questionList.appendChild(radio)
var valueItem = document.createElement("SPAN")
valueItem.innerHTML = option[j]
questionList.appendChild(valueItem)
var breaker = document.createElement("BR")
questionList.appendChild(breaker)

}






questionElement.appendChild(questionList)
}


}
generateQuizz()
var obtain = 0


// console.log(questions)
// console.log(correctAnswers)



function getVal(e) {

var rad = document.getElementsByClassName("rad")[1].checked
// console.log(rad)
// console.log(e.target.value)
selectedValue.push(e.target.value)


}
// getVal()
console.log(selectedValue)


function submit() {

    for (var c = 0 ; c<questions.length; c++){
        var correctAnswers = questions[c].correct_answer
        // console.log(correctAnswers)
        // console.log(correctAnswers)
        // console.log(selectedValue[c])
        if(correctAnswers==selectedValue[c]){
            obtain = obtain+1

        }
        

    }
    var percentage = obtain*100/10
    console.log(percentage)
    console.log(obtain)
    localStorage.setItem("percentage",JSON.stringify(percentage))
    
    
    // showResult()
    window.location.href = "result.html"

    // var para = document.getElementById("para")
   
    // var finalPercent =    obtain*100/10 
    // para.innerHTML = "Your percentage is "+ finalPercent.toString() + "%"
   
    

    
     
  
  
    
    
    
     
   
}
// console.log(obtain)
function showResult() {
  

    var main = document.getElementById("mainDiv")
    console.log(main)

    


}





