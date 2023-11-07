let myform = document.getElementById("myform");
let myemail = document.getElementById("myemail");
let mypassword = document.getElementById("mypassword");
let mynavigateButton=document.getElementById("navigateButton"); 

myform.addEventListener("submit", (data) => {
  data.preventDefault();

  if (myemail.value.trim() == "" && mypassword.value.trim() == "") {
    alert("Your form is empty")
    return false;
  }
 
  //validateemail(myemail.value) 
  // password(mypassword.value)
  if (validateemail(myemail.value) && validpassword(mypassword.value)) {
    alert("Sucesss")    
    return   window.location.href = "Welcome-page/welcome_page.html"; 
  }
  
}//,navigateButton.addEventListener("click", function() {
   
//   window.location.href = "Welcome-page/welcome_page.html"; 
// })
);

function validateemail(email) {
  if (myemail.value.trim() == "") {
    document.getElementById("erroremail").innerHTML="<b>your email is empty</b>";
    return false;
  }
  //return true;
  let Pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!Pattern.test(email)) {
    document.getElementById("erroremail").innerHTML="<b>Enter your valid email</b>";
    return false;
  }
  else{
    document.getElementById("erroremail").innerHTML="";  
  }
  return true;
}

function validpassword(password) {
  if (mypassword.value.trim() == "") {
    document.getElementById("errorpassword").innerHTML="<b>Your password is empty</b>";
    return false;
  }
  else{
    document.getElementById("errorpassword").innerHTML="";
  }
  
  let Pattern2 = /^[a-zA-Z0-9._-]{8,16}$/;
  if (!Pattern2.test(password)) {
    document.getElementById("errorpassword").innerHTML="<b>Enter your valid password <br> must be 8 charactor</b>";
    return false;
  }
  return true;
}





