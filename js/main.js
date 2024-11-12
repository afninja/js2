



// start validate function 

function validate(){

    var userName = document.getElementById("username").value;  
    
    var email = document.getElementById("email").value;
    
    var password = document.getElementById("password").value;
    
    var confirmPassword = document.getElementById("confirmpassword").value;
    
    var errorMessage = document.getElementById("errorMessage");
    
    // style error message 
    errorMessage.style.padding= "10px";
    errorMessage.style.backgroundColor= "red";
    errorMessage.style.color ="#fff";
    errorMessage.style.textAlign="center";
    errorMessage.style.transition= "all .5s ease-in";
    errorMessage.style.marginBottom="20px";
    
    
    
    var text = ""; 
    
    if( email=="" && userName=="" && password==""&& confirmPassword==""){
    
        text= "please Insert Valid Data";
        errorMessage.innerHTML =text;
        return false;
    }
    else if(userName.length <5 || userName.length >15){
        text ="please Insert 5-15 character in username";
        errorMessage.innerHTML =text;
        return false;
    }
    
    else if(email.indexOf("@")==-1){
        text= "Please Enter Valid Email";
        errorMessage.innerHTML =text;
        return false;
    }else if (password.length<8){
        text ="please Insert atleast 8 character in password";
        errorMessage.innerHTML =text;
        return false;
    }
    
    else if(password != confirmPassword){
        text= "please Matched password";
        errorMessage.innerHTML =text;
        return false;
    }
    else{
       
        return true;
    }
    
    
    }
    
    
    
    
// end validate function






// start validate function 

function validate(){

var userName = document.getElementById("username").value;  

var email = document.getElementById("email").value;

var password = document.getElementById("password").value;

var confirmPassword = document.getElementById("confirmpassword").value;

var errorMessage = document.getElementById("errorMessage");

// style error message 
errorMessage.style.padding= "10px";
errorMessage.style.backgroundColor= "red";
errorMessage.style.color ="#fff";
errorMessage.style.textAlign="center";
errorMessage.style.transition= "all .5s ease-in";
errorMessage.style.marginBottom="20px";



var text = ""; 

if( email=="" && userName=="" && password==""&& confirmPassword==""){

    text= "please Insert Valid Data";
    errorMessage.innerHTML =text;
    return false;
}
else if(userName.length <5 || userName.length >15){
    text ="please Insert 5-15 character in username";
    errorMessage.innerHTML =text;
    return false;
}

else if(email.indexOf("@")==-1){
    text= "Please Enter Valid Email";
    errorMessage.innerHTML =text;
    return false;
}else if (password.length<8){
    text ="please Insert atleast 8 character in password";
    errorMessage.innerHTML =text;
    return false;
}

else if(password != confirmPassword){
    text= "please Matched password";
    errorMessage.innerHTML =text;
    return false;
}
else{
   
    return true;
}


}




// end validate function 








var counter = 0;

function incNumber(){

counter++; 
document.getElementById("demo").innerHTML = counter;

}

function decNumber(){

counter--; 
document.getElementById("demo").innerHTML = counter;

}








function amountDollar(){

    var dollar= document.getElementById("dollar").value;
    var result= document.getElementById("result");


    if(isNaN(dollar)){
        result.innerHTML = "Enter number not text"
        result.style.color = "red"
        return false
    }else if (dollar<0){
        result.innerHTML = "Enter postive  number"
        result.style.color = "red"
        return false
    }else if(dollar==0){
        result.innerHTML = "Enter number rather than zero"
        result.style.color = "red"
        return false
    }else{
        result.innerHTML = dollar *50;
        result.style.color = "black"

        return false
    }
    
    






}