let rightans = 0;
document.getElementById("affrightans").innerHTML = 
  "Correct answer(s) : " +rightans;
function easyverif(nbCheck){
   if(document.getElementById(nbCheck).checked == true){       
    alert("Good job !");
        document.getElementById('easyverif').submit();
        rightans = rightans + 1;
alert(rightans);
    }
    else{
        alert("You are mistaken.");
    }
}
