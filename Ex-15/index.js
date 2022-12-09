function ValidateForm()
{
var x = document.forms["myForm"]["fname"].value;
var validate = /^[A-Za-z]+$/;
if(x=="" ){
alert("Name is empty , minimum 6 characters needed!");
return false;}
if(x.lenght>5){
alert("Name should  be minimum 6 characters needed!");
}
if(!validate.test(x)){
alert("use only characters");
}
var y = document.forms["myForm"]["age"].value;
var validate2 =/^[0-9]+$/;
if(y==""){
alert("Age shouldn't be empty.");
return false;
}
if(y<15 && y>120){
alert("Age should be between 15 & 120 !");
}
if(!validate2.test(y)){
alert("Use numbers only");
}
}