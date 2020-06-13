
function signUp() {

    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
 
    var obj = {
        name : name,
        email: email,
        pass : password
    }
 var user = JSON.stringify(obj)
 localStorage.setItem("user",user)
 var data = localStorage.getItem("user")
 var user2 = JSON.parse(data)
 console.log(user2)
 window.location.href = "logIn.html"
 
 }
 
 
 function logIn() {
  
     var userEmail = document.getElementById("userEmail").value
     var userPassword = document.getElementById("userPassword").value
 
     var data = localStorage.getItem("user")
     var user2 = JSON.parse(data)
 
     if(userEmail===user2.email && userPassword===user2.pass){
 
    alert("successfully Log IN")
 
  
 
    window.location.href = "index.html "
 
     } else{
       alert("You are LogIn with wrong account ")

     }
 
 
 
 }