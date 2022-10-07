var countingText = 0;

     function postFunction(){
        countingText++;
        console.log(countingText);
        text_1 = document.getElementById("text1").value;
       if(countingText == 1){
        document.getElementById("topic1").innerHTML = text_1; 
       }
       else if(countingText == 2){
        document.getElementById("comment1").innerHTML = text_1; 
       }
       else if(countingText == 3){
        document.getElementById("comment2").innerHTML = text_1; 
       }
       else{
        alert("Sorry :( Exceed the limit!!!"); 
       }
    }

    function clearFunction(){
        document.getElementById("topic1").innerHTML = ''; 
        document.getElementById("comment1").innerHTML = ''; 
        document.getElementById("comment2").innerHTML = ''; 
        alert("Are you sure to clear all posts??"); 
        countingText = 0;
    }