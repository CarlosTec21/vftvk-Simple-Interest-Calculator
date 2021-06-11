//Compute fuction calcule the amount of interest.
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);//Get the date to show in what year obtain the amount of interest

    checkvalue();//Using the recursive fuction to validate the positive numbres in principal
    document.getElementById("result").innerHTML="If you deposit <mark>" + principal + "</mark>,\<br/>at an interest rate of <mark>" + rate + "%</mark>\<br/>You will receive an amount of <mark>" + interest + "</mark>,\<br/>in the year <mark>" + year + "</mark>\<br/>";
}

//This function is to change the number of the range value beside the bar range
function updateRate(rateval)
{
    var reteval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}

//Checkvalue is to always verified a positive values in the amount of the principal
function checkvalue()
{
    var principal = document.getElementById("principal").value;
    if(principal==0 || principal<0 ){
    alert("Enter a positive number");
    }
    document.getElementById("principal").focus()
}
