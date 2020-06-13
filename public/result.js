function result() {
    var mainDiv = document.getElementById("mainDiv")
    console.log(mainDiv)
    var para = document.getElementById("para")
 var finalPercentage =    localStorage.getItem("percentage")
 para.innerHTML = "Your Percentage is " + finalPercentage + "%"
 console.log(finalPercentage)
    
  
}
result()